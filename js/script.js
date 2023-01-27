import MenuMobile from './module/menu-mobile.js';
import SlideNav from './module/slide.js';
import ScrollSuave from './module/scroll-suave.js';

// ------------------------------------------------------------------------
// MENU MOBILE
// ------------------------------------------------------------------------
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

// ----------------------------------------------------------------------------------------------
// Slide
// -----------------------------------------------------------------------------------------------

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
// slide.addArrow('.prev', '.next'); // sem navegação por arrow
slide.addControl('.custom-controls');

// ------------------------------------------------------------------------
// INÍCIO SCROLL SUAVE - Scroll suave ao clicar nos links internos
// ------------------------------------------------------------------------

const scrollSuave = new ScrollSuave("a[href^='#']");
scrollSuave.init();

// --------------------------------------------------------------------
//  Animações do Plugin
// --------------------------------------------------------------------

if (window.SimpleAnime) {
  new SimpleAnime();
}
