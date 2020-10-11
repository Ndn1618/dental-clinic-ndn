var elSiteNav = document.querySelector('.sitenav');
var elSiteNavToggler = document.querySelector('.sitenav__menu-toggler');

elSiteNav.classList.remove('sitenav--nojs');

elSiteNavToggler.addEventListener('click', function () {
  elSiteNav.classList.toggle('sitenav--open');
});