/**---------- Show Menu ----------**/

const nav = document.getElementById('nav-menu');
const toggle = document.getElementById('nav-toggle');
const close = document.getElementById('nav-close');

if (toggle) {
    toggle.addEventListener('click', () => {
        nav.classList.add('show-menu');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('show-menu');
    });
}

/**------------ Remove Menu Mobile ------------**/

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/**------------ Background Header ------------**/

function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/**------------ FAQs Accordion ------------**/
const accordionItems = document.querySelectorAll('.questions-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions-header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions-content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
};

/**------------ Scroll Sections Active Links ------------**/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav-menu a[href*=' + sectionId + ']')
                .classList.add('active-link');
        } else {
            document
                .querySelector('.nav-menu a[href*=' + sectionId + ']')
                .classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/**------------ Show Scroll Up ------------**/
function scrollUp() {
    const scrollup = document.getElementById('scroll-up');

    if (this.scrollY >= 400) scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/**------------ Dark Light Theme ------------**/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
    );
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
        iconTheme
    );
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
