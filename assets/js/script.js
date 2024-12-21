//FUNZIONAMENTO DROPDOWN MENU
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let options = {hover: true, closeOnClick: true}
    let instances = M.Dropdown.init(elems, options);
    
  });