const themeColor = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
document.body.classList.remove('body_dark', 'body_light');
document.body.classList.add('body_' + themeColor);