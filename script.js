const toggle = document.getElementById('darkModeToggle');
toggle && toggle.addEventListener('click', function(){
  document.body.classList.toggle('dark-mode');
  // Save preference (basic)
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('artcollab-dark', '1');
    toggle.textContent = '☀️';
  } else {
    localStorage.removeItem('artcollab-dark');
    toggle.textContent = '🌙';
  }
});
// On page load, check localStorage
if (localStorage.getItem('artcollab-dark')) {
  document.body.classList.add('dark-mode');
  document.getElementById('darkModeToggle').textContent = '☀️';
}
