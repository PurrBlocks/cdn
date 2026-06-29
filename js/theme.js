let themeColor = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
document.body.className = 'body_' + themeColor;
document.getElementById('pbi-src-1').innerHTML = '<script src="https://purrblocks.github.io/cdn/js/theme.js"></script>'