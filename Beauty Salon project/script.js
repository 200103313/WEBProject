function change(element){
    var a = element.innerHTML;
    switch(a){
        case "Сергей Барсуков":
            document.getElementById("img").src = "https://beautyhack.ru/assets/images/jule/10(10).jpg";
            document.getElementById("txt").innerHTML = "Сергей Барсуков";
            document.getElementById("txt2").innerHTML = "Стаж: 10 лет <br> Образование: врач дерматолог-косметолог. <br>Окончил Ивановскую государственную медицинскую академию, <br>Государственный институт усовершенствования врачей МО РФ, <br>Российскую медицинскую академию последипломного образования. <br>Мое кредо/девиз:<br>«Звезды должны сиять!»";
            break;
        case "Татьяна Жукова":
            document.getElementById("img").src = "https://beautyhack.ru/assets/images/jule/1-1(15).jpg";
            document.getElementById("txt").innerHTML = "Татьяна Жукова";
            document.getElementById("txt2").innerHTML = "Стаж: 15 лет <br>Образование: врач-дерматокосметолог. <br>Окончила РНИМУ имени Н.И. Пирогова, ежегодно проходит курсы <br>повышения квалификации по циклу «Дерматовенерология» и «Косметология»,<br> совершенствует знания в центрах дерматологии и косметологии,<br> посещает профессиональные мастер-классы и обучающие семинары,<br> в том числе за рубежом – Международный Конгресс по Антивозрастной Медицине (AMWC 2017).<br>Мое кредо/девиз:<br>«Нет предела совершенству, но во всем должна быть мера»."
            break;
        case "Екатерина Васильева":
            document.getElementById("img").src = "https://beautyhack.ru/assets/images/jule/tekst-1(2).jpg";
            document.getElementById("txt").innerHTML = "Екатерина Васильева";
            document.getElementById("txt2").innerHTML = "Стаж: 11 лет <br>Образование: врач-дерматовенеролог, косметолог, трихолог, трансфузиолог, кандидат медицинских наук.<br> Окончила Российский государственный медицинский университет им. Н.И. Пирогова,<br> ординатуру на базе ФГБОУ ВО РНИМУ им. Н.И. Пирогова,<br> курс повышения квалификации ФГУ «ЦНИКВИ Росмедтехнологий», проходила стажировки у ведущих мировых специалистов,<br> в том числе под эгидой Американского общества лазерной медицины и хирургии.<br>Мое кредо/девиз:<br>«Красота не требует жертв, она требует внимания и деликатного подхода»."
            break;
        case "Виктория Кокорева":
            document.getElementById("img").src = "https://beautyhack.ru/assets/images/jule/18(7).jpg";
            document.getElementById("txt").innerHTML = "Виктория Кокорева";
            document.getElementById("txt2").innerHTML = "Стаж: 12 лет <br>Образование: среднее медицинское (Медицинское училище №1 в Измайлово)<br> и неоконченное высшее (кафедра стоматологии ФУВ Моники). <br>Мое кредо/девиз:<br>«Нет некрасивых женщин, есть ленивые»."
            break;
    }
    $("#img").animate({
        top: '+=100px', 
        opacity: "0"
    }, "slow");
    $("#img").animate({
        top: '-=100px', 
        opacity: "1"
    }, "slow");
}
function load(){
    $(".text").animate({ 
        opacity: "1"
    }, "slow");
}

function big(element){
    element.style.fontSize = "30px";
}
function small(element){
    element.style.fontSize = "20px";
}