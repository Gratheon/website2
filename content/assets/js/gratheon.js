(function () {
  function setLatestDownloadLinks() {
    var macLink = document.querySelector('[data-latest-release="mac"]');
    var windowsLink = document.querySelector('[data-latest-release="windows"]');
    var linuxLink = document.querySelector('[data-latest-release="linux"]');
    if (!macLink && !windowsLink && !linuxLink) return;

    var fallbackUrl = 'https://github.com/Gratheon/web-app/releases/latest';
    var keys = {
      mac: 'latestMacArmUrl',
      windows: 'latestWindowsUrl',
      linux: 'latestLinuxUrl'
    };

    function applyCached() {
      try {
        if (macLink && localStorage.getItem(keys.mac)) macLink.href = localStorage.getItem(keys.mac);
        if (windowsLink && localStorage.getItem(keys.windows)) windowsLink.href = localStorage.getItem(keys.windows);
        if (linuxLink && localStorage.getItem(keys.linux)) linuxLink.href = localStorage.getItem(keys.linux);
      } catch (_) {}
    }

    applyCached();

    fetch('https://api.github.com/repos/Gratheon/web-app/releases?per_page=1')
      .then(function (response) {
        if (!response.ok) throw new Error('GitHub API error: ' + response.status);
        return response.json();
      })
      .then(function (data) {
        if (!data || !data.length || !data[0].assets) throw new Error('No release assets found');
        data[0].assets.forEach(function (asset) {
          var name = String(asset.name || '').toLowerCase();
          var url = asset.browser_download_url;
          if (!url) return;
          if (name.endsWith('.dmg') && name.includes('aarch64') && macLink) {
            macLink.href = url;
            try { localStorage.setItem(keys.mac, url); } catch (_) {}
          } else if (name.endsWith('.msi') && windowsLink) {
            windowsLink.href = url;
            try { localStorage.setItem(keys.windows, url); } catch (_) {}
          } else if (name.endsWith('.appimage') && linuxLink) {
            linuxLink.href = url;
            try { localStorage.setItem(keys.linux, url); } catch (_) {}
          }
        });
      })
      .catch(function () {
        if (macLink && macLink.getAttribute('href') === '#') macLink.href = fallbackUrl;
        if (windowsLink && windowsLink.getAttribute('href') === '#') windowsLink.href = fallbackUrl;
        if (linuxLink && linuxLink.getAttribute('href') === '#') linuxLink.href = fallbackUrl;
      });
  }

  function setupPricingCalculator() {
    var calculator = document.querySelector('[data-pricing-calculator]');
    if (!calculator) return;

    var tokenOutput = calculator.querySelector('[data-token-result]');
    var costOutput = calculator.querySelector('[data-cost-result]');
    var weights = {
      telemetryRequests: 0.002,
      dataPoints: 0.0002,
      videoMinutes: 0.27,
      smsAlerts: 0.3,
      webhooks: 0.01,
      hives: 2,
      frames: 0.02,
      frameUploads: 0.25,
      inspections: 1
    };

    function update() {
      var tokens = Object.keys(weights).reduce(function (sum, key) {
        var input = calculator.querySelector('[name="' + key + '"]');
        var value = input ? parseFloat(input.value || '0') || 0 : 0;
        return sum + value * weights[key];
      }, 0);
      tokens = Math.round(tokens * 100) / 100;
      var cost = Math.round((tokens / 1000) * 100 * 100) / 100;
      if (tokenOutput) tokenOutput.textContent = tokens.toLocaleString();
      if (costOutput) costOutput.textContent = '€' + cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    calculator.querySelectorAll('input[type="number"]').forEach(function (input) {
      input.addEventListener('input', update);
    });
    update();
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLatestDownloadLinks();
    setupPricingCalculator();
  });
})();
