(function () {
  function setupCodeHighlighting() {
    var blocks = document.querySelectorAll('pre code[class*="language-"]');
    if (!blocks.length) return;

    function escapeHTML(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function languageOf(block) {
      var match = String(block.className || '').match(/(?:^|\s)language-([^\s]+)/);
      return match ? match[1].toLowerCase() : '';
    }

    function rule(pattern, className) {
      return { pattern: pattern, className: className };
    }

    function renderWithRules(source, rules) {
      var html = '';
      var pos = 0;

      while (pos < source.length) {
        var selected = null;
        for (var i = 0; i < rules.length; i += 1) {
          rules[i].pattern.lastIndex = pos;
          var match = rules[i].pattern.exec(source);
          if (match && match.index === pos && match[0]) {
            selected = { text: match[0], className: rules[i].className };
            break;
          }
        }

        if (!selected) {
          html += escapeHTML(source.charAt(pos));
          pos += 1;
          continue;
        }

        html += '<span class="token-' + selected.className + '">' + escapeHTML(selected.text) + '</span>';
        pos += selected.text.length;
      }

      return html;
    }

    function highlight(source, lang) {
      var rulesByLanguage = {
        bash: [
          rule(/#[^\n]*/g, 'comment'),
          rule(/'(?:'\\''|[^'])*'/g, 'string'),
          rule(/"(?:\\.|[^"\\])*"/g, 'string'),
          rule(/\b(?:curl|grep|docker|kubectl|npm|pnpm|yarn|git|go|python3?|node|just|make|cat|cd|cp|mv|rm|mkdir|export)\b/g, 'command'),
          rule(/--?[A-Za-z][\w-]*/g, 'option'),
          rule(/\$\{?[A-Za-z_][\w]*\}?/g, 'variable'),
          rule(/\b\d+(?:\.\d+)?\b/g, 'number'),
          rule(/[|\\]/g, 'operator')
        ],
        json: [
          rule(/"(?:\\.|[^"\\])*"(?=\s*:)/g, 'property'),
          rule(/"(?:\\.|[^"\\])*"/g, 'string'),
          rule(/\b(?:true|false|null)\b/g, 'keyword'),
          rule(/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/gi, 'number'),
          rule(/[{}[\],:]/g, 'punctuation')
        ],
        graphql: [
          rule(/#[^\n]*/g, 'comment'),
          rule(/"""[\s\S]*?"""/g, 'string'),
          rule(/"(?:\\.|[^"\\])*"/g, 'string'),
          rule(/\$[A-Za-z_][\w]*/g, 'variable'),
          rule(/\b(?:query|mutation|subscription|fragment|on|type|input|schema|scalar|enum|interface|union|implements|directive|true|false|null)\b/g, 'keyword'),
          rule(/[A-Za-z_][\w]*(?=\s*\()/g, 'function'),
          rule(/-?\b\d+(?:\.\d+)?\b/g, 'number'),
          rule(/[{}()[\]:!,=|@]/g, 'punctuation')
        ],
        javascript: [
          rule(/\/\/[^\n]*|\/\*[\s\S]*?\*\//g, 'comment'),
          rule(/`(?:\\.|[^`\\])*`|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"/g, 'string'),
          rule(/\b(?:const|let|var|function|return|if|else|for|while|await|async|import|export|from|new|class|extends|true|false|null|undefined)\b/g, 'keyword'),
          rule(/[A-Za-z_$][\w$]*(?=\s*\()/g, 'function'),
          rule(/-?\b\d+(?:\.\d+)?\b/g, 'number'),
          rule(/[{}()[\].,;:?]/g, 'punctuation'),
          rule(/[+\-*/%=!<>|&]+/g, 'operator')
        ],
        yaml: [
          rule(/#[^\n]*/g, 'comment'),
          rule(/^[ \t-]*[A-Za-z0-9_.-]+(?=\s*:)/gm, 'property'),
          rule(/'(?:''|[^'])*'|"(?:\\.|[^"\\])*"/g, 'string'),
          rule(/\b(?:true|false|null|yes|no|on|off)\b/gi, 'keyword'),
          rule(/-?\b\d+(?:\.\d+)?\b/g, 'number'),
          rule(/[:[\]{},|-]/g, 'punctuation')
        ]
      };

      if (lang === 'sh' || lang === 'shell' || lang === 'zsh') lang = 'bash';
      if (lang === 'js' || lang === 'ts' || lang === 'typescript') lang = 'javascript';
      if (lang === 'yml') lang = 'yaml';

      return rulesByLanguage[lang] ? renderWithRules(source, rulesByLanguage[lang]) : escapeHTML(source);
    }

    blocks.forEach(function (block) {
      var lang = languageOf(block);
      block.innerHTML = highlight(block.textContent || '', lang);
      block.classList.add('is-highlighted');
    });
  }

  document.addEventListener('DOMContentLoaded', setupCodeHighlighting);
})();
