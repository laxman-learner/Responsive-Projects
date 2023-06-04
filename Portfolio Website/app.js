document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('sidebarGo');
  
  if (sidebar.classList.contains('sidebarGo')) {
    document.querySelector('.ham').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none';
  } else {
    document.querySelector('.ham').style.display = 'none';
    
    setTimeout(() => {
      document.querySelector('.cross').style.display = 'inline';
    }, 350);
  }
});


