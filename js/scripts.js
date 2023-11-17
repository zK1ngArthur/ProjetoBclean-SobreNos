

window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#NavPrincipal');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();


    document.addEventListener('scroll', navbarShrink);
    const NavPrincipal = document.body.querySelector('#NavPrincipal');
    if (NavPrincipal) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#NavPrincipal',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
