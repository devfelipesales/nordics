import MenuMobile from './module/menu-mobile.js';
import SlideNav from './module/slide.js';
import ScrollSuave from './module/scroll-suave.js';
import AccordionList from './module/accordion.js';

// ------------------------------------------------------------------------
// MENU MOBILE
// ------------------------------------------------------------------------
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
if (menuMobile) {
  menuMobile.init();
}

// ----------------------------------------------------------------------------------------------
// Slide
// -----------------------------------------------------------------------------------------------

const slide = new SlideNav('.slide', '.slide-wrapper');
if (slide) {
  slide.init();
  // slide.addArrow('.prev', '.next'); // sem navegação por arrow
  slide.addControl('.custom-controls');
}

// ------------------------------------------------------------------------
// INÍCIO SCROLL SUAVE - Scroll suave ao clicar nos links internos
// ------------------------------------------------------------------------

const scrollSuave = new ScrollSuave("a[href^='#']");
if (scrollSuave) {
  scrollSuave.init();
}

// --------------------------------------------------------------------
//  Accordion - Manipulação na sessão de perguntas frequentes da página de seguros
// --------------------------------------------------------------------

const accordion = new AccordionList('.perguntas button');
if (accordion) {
  accordion.init();
}

// --------------------------------------------------------------------
//  Animações do Plugin
// --------------------------------------------------------------------

if (window.SimpleAnime) {
  new SimpleAnime();
}
