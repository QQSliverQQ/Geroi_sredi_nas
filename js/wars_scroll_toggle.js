var shadow = "box-shadow: 0 0 10px 5px gray;";
//Создаю переменные основных блоков с войнами
var war_afgan = document.getElementById('war_afgan');
var war_chechna1 = document.getElementById('war_chechna1');
var war_chechna2 = document.getElementById('war_chechna2');
var war_svo = document.getElementById('war_svo');
//Массив картинок с войнами
var wars_scroll_img = document.getElementsByClassName('wars_scroll_img');
//Массив с войнами
var all_war = [war_afgan, war_chechna1, war_chechna2, war_svo];
//Функция для выключения всех основных блоков с войнами
function close_all_war(){
    for(var i=0; i<(all_war.length); i++){
      all_war[i].style.cssText = "";
    }
}
//Включаю первую менюшку
war_afgan.style.cssText="display: block";
wars_scroll_img[0].style.cssText=shadow;

//Функция подсветки картинок в скролле с войнами
function shadow_img(element){
      for (var i=0; i<(wars_scroll_img.length);i++){
        if (wars_scroll_img[i].id==element){ wars_scroll_img[i].style.cssText=shadow; }
        else {wars_scroll_img[i].style.cssText=""}
      }
}

//Обрабатываю событие клика по картинкам с войнами
function wars_scroll_img_click(e){
  switch (e.id) {
    case "wars_scroll_img_afgan":     shadow_img("wars_scroll_img_afgan");     close_all_war(); war_afgan.style.cssText="display: block;";     break;
    case "wars_scroll_img_chechna1":  shadow_img("wars_scroll_img_chechna1");  close_all_war(); war_chechna1.style.cssText="display: block;";  break;
    case "wars_scroll_img_chechna2":  shadow_img("wars_scroll_img_chechna2");  close_all_war(); war_chechna2.style.cssText="display: block;";  break;
    case "wars_scroll_img_svo":       shadow_img("wars_scroll_img_svo");       close_all_war(); war_svo.style.cssText="display: block;";       break;
  }
}
