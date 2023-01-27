import MenuMobile from './module/menu-mobile.js';
import SlideNav from './module/slide.js';
import ScrollSuave from './module/scroll-suave.js';
import AnimacaoScroll from './module/animacao-scroll.js';

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

// -----------------------------------------------------------------------------------------------------------------
// INÍCIO ANIMAÇÃO SCROLL - À medida for for rolando para baixo, o conteúdo das seções aparecem
// -----------------------------------------------------------------------------------------------------------------
const animacaoScroll = new AnimacaoScroll('.js-scroll');
animacaoScroll.init();

// --------------------------------------------------------------------
//  Animações do Plugin
// --------------------------------------------------------------------

if (window.SimpleAnime) {
  new SimpleAnime();
}
