const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarOpen = document.getElementById('sidebar-open');
const sidebar = document.querySelector('.sidebar2');
const right = document.querySelector('.s-right');
const other = document.getElementById('side-tog');
const aother = document.getElementById('a-side-tog');
const content = document.getElementById('content');
const hr = document.getElementById('hr');
const head = document.getElementById('head');
const hide = document.querySelector('.new');
const show = document.querySelector('.sh');

sidebarToggle.addEventListener('click', () => {
  if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
    right.classList.remove('collapsed');
    content.classList.remove('collapsed');
    sidebarToggle.classList.remove('collapsed', 'hide');
    other.classList.remove('hide', 'collapsed');
    aother.classList.remove('hide', 'collapsed');
    hr.classList.remove('hide', 'collapsed');
    // head.classList.remove('hide', 'collapsed');
    hide.classList.remove('hide');
    show.classList.add('sh');
  } else {
    sidebar.classList.add('collapsed');
    right.classList.add('collapsed');
    content.classList.add('collapsed');
    sidebarToggle.classList.add('collapsed', 'hide');
    other.classList.add('hide', 'collapsed');
    aother.classList.add('hide', 'collapsed');
    hr.classList.add('hide', 'collapsed');
    // head.classList.add('hide', 'collapsed');
    hide.classList.add('hide');
    show.classList.remove('sh');
    show.classList.add('show');
  }
});

sidebarOpen.addEventListener('click', () => {
  sidebar.classList.remove('collapsed');
  right.classList.remove('collapsed');
  content.classList.remove('collapsed');
  sidebarToggle.classList.remove('collapsed', 'hide');
  sidebarOpen.classList.remove('show');
  other.classList.remove('hide', 'collapsed');
  aother.classList.remove('hide', 'collapsed');
  hr.classList.remove('hide', 'collapsed');
//   head.classList.remove('hide', 'collapsed');
  hide.classList.remove('hide');
  show.classList.add('sh');
});
