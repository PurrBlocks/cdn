document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('.pbi-root');
  if (root) {
    root.innerHTML = '<pbi-loading-group class="pbi-loading-group"><pbi-loading class="pbi-loading"></pbi-loading></pbi-loading-group>';
  }
});