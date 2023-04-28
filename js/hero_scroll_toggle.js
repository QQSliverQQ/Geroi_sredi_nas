var lipatov = document.getElementById('hero_scroll_img_lipatov');
var demishev = document.getElementById('hero_scroll_img_demishev');
var zazdravnih = document.getElementById('hero_scroll_img_zazdravnih');
var malgin = document.getElementById('hero_scroll_img_malgin');
var plasynov = document.getElementById('hero_scroll_img_plasynov');
var hero_lipatov = document.getElementById('hero_lipatov');
var hero_demishev = document.getElementById('hero_demishev');
var hero_zazdravnih = document.getElementById('hero_zazdravnih');
var hero_malgin = document.getElementById('hero_malgin');
var hero_plasynov = document.getElementById('hero_plasynov');
let smoother = ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  effects: true,
});

function hero_scroll_toggle(el){
  switch (el.id) {
    case "hero_scroll_img_lipatov": smoother.scrollTo(hero_lipatov, true); break;
    case "hero_scroll_img_demishev": smoother.scrollTo(hero_demishev, true); break;
    case "hero_scroll_img_zazdravnih": smoother.scrollTo(hero_zazdravnih, true); break;
    case "hero_scroll_img_malgin": smoother.scrollTo(hero_malgin, true); break;
    case "hero_scroll_img_plasynov": smoother.scrollTo(hero_plasynov, true); break;
  }
}
