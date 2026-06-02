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


  document.addEventListener('DOMContentLoaded', function () {
    setLatestDownloadLinks();
  });
})();
