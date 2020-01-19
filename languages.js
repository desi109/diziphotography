var arrLang = {
  en: {
    home: "Home",
    portfolio: "Portfolio",
    aboutme: "About Me",
    contact: "Contact",
    firstslideh4: ". . . through the lens of a . . .",
    firstslideh2: "Photographer",
    firstslidehbtn: "The World in Photos",
    secondslideh4: ". . . every photo has a . . .",
    secondslideh2: "beautiful story",
    thirdslideh4: ". . . capture . . .",
    thirdslideh2: "the moment",
    fourthslideh4: ". . . a photography is a . . .",
    fourthslideh2: "pause button of life",
    imagine: "Imagine the world with other eyes",
    intro1: "Every photo tells a story and every story can be told in many ways. Only the photographer decides which way to choose.",
    intro2: "When I create a DIZI Photography, my only purpose was to capture the world from a different perspective and show it to people. It's been a long time since then and photography has become not only a hobby for me but also a way of life. With each of my photos, I want to show you that even the most ordinary thing is unique in its own way.",
    enjoy: "Enjoy!",
    wantmorephotos: "Whant to see more photos?",
    wantmorephotosbtn: "My Work",
    name: "Desislava Milusheva",
    photographer: "Photographer",
    traveler: "Traveler by spirit and photographer by vocation",
    aboutmetext: "To me, photography is an art of observation. It’s about finding something so ordinary in an even more ordinary place and capturing its unique beauty… I’ve found that to be a photographer is like to be a collector of  moments. My photos are the stories I fail to put into words. Taking an image, freezing a moment, everytime I realise how rich reality truly is.",
    thankyou: "Thank you for your time!",
    contactinfo: "Contact Info"
  },
  bg: {
    home: "Начало",
    portfolio: "Фотография",
    aboutme: "За мен",
    contact: "Контакти",
    firstslideh4: ". . . през обектива на един . . .",
    firstslideh2: "Фотограф",
    firstslidehbtn: "Света в снимки",
    secondslideh4: ". . . всяка снимка има . . .",
    secondslideh2: "красива история",
    thirdslideh4: ". . . улови . . .",
    thirdslideh2: "момента",
    fourthslideh4: ". . . фотографията е като . . .",
    fourthslideh2: "стоп бутон на живота",
    imagine: "Представете си света по един нов начин",
    intro1: "Всяка снимка разказва история, а всяка история може да бъде разказана по много начини. Само фотографът решава кой начин ще избере. ",
    intro2: "Когато създадох DIZI Photography, моята единствна цел беше да уловя света от един различен ъгъл  и да го покажа на хората. Оттогава мина доста време и фотогрофията за мен се превърна от просто хоби, в начин на живот. С всяка моя снимка искам да покажа на всички вас, че и най-обикновеното нещо е уникално по свой собствен начин.",
    enjoy: "Приятно гледане!",
    wantmorephotos: "Искате да видите още снимки?",
    wantmorephotosbtn: "Моята работа",
    name: "Десислава Милушева",
    photographer: "Фотограф",
    traveler: "Пътешественик по дух и фотограф по призвание",
    aboutmetext: "За мен фотографията е изкуството да наблюдаваш. Да намериш нещо толкова обикновено на още по-обикновено място и да заснемеш уникалната му красота ... Да си фотограф е сякаш да си колекционер на моменти. Моите снимки са историите, които не успявам да сложа в рамката на думите. Правейки снимка, замразявайки момент, всеки път осъзнавам колко богата всъщност е реалността.",
    thankyou: "Благодарим Ви за отделеното време!",
    contactinfo: "Можете да се свържете с мен на:"
  }
};

$(function(){
  $('.translate').click(function(){
    var lang = $(this).attr('id');

    $('.lang').each(function(index, element){
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});
