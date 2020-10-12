var elSiteNav = document.querySelector('.sitenav');
var elSiteNavToggler = document.querySelector('.sitenav__menu-toggler');
var elBody = document.querySelector('.body');

elSiteNav.classList.remove('sitenav--nojs');
elBody.classList.remove('body--nojs');

elSiteNavToggler.addEventListener('click', function () {
  elSiteNav.classList.toggle('sitenav--open');
});