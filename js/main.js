var elSiteNav = document.querySelector('.sitenav');
var elSiteNavToggler = document.querySelector('.sitenav__menu-toggler');

elSiteNavToggler.addEventListener('click', function () {
  elSiteNav.classList.toggle('sitenav--open');
});