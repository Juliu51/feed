"use strict";
function getData(data) {

    let HTML = "";
    let sectionBody = document.querySelector('.section');
  

    if (Array.isArray(data)) {

        //patikrina kiek objektu yra
        // for (let i = 0; i < data.length; i++) {
        //     //padaro 11 HTML korteliu
        //     HTML += getList(data[i]);
        // }
        for (let index of data) {
            HTML += getList(index);
        }
         //patikrina ar masyvas-----
        return sectionBody.innerHTML = HTML;
        // return console.log(HTML);
    } else {
       return console.log('Tai ne masyvas');
    }
}

function getData1(data) {

    let HTML = "";
    let sarasas = document.querySelector('.sarasas');
  

    if (Array.isArray(data)) {

        //patikrina kiek objektu yra
        for (let i = 0; i < data.length; i++) {
            //padaro 11 HTML korteliu
            HTML += getLists(data[i]);
        }
        // for (let index of data) {
        //     HTML += getLists(index);
        // }
         //patikrina ar masyvas-----
        return sarasas.innerHTML = HTML;
        // return console.log(HTML);
    } else {
       return console.log('Tai ne masyvas');
    }
}
    
function getLists(list) {
    let HTML = `<div class="para">
    <p>  ${list.autorius.vardas} ${list.autorius.pavarde}</p>
     </div>`
    return HTML;
}

function getList(list) {
    let HTML = `<div class="card">
    ${returnHead(list.autorius, list.laikas)}
    ${returnMain(list.pranesimas)}
    ${returnFooter(list.autorius)}
</div>`;
    
    return HTML;

}
 
function returnHead(who, laikas) {
    let HTML = ` <div class="card_head">
    ${getAvatar(who)}
    <div class="user">
        <div class="name">${who.vardas} ${who.pavarde}</div>
        <div class="time">${laikas}</div>
    </div>
    <div class="more"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></i></div>
</div>`
    return HTML;
}

function returnMain(text) {

    let HTML = `<div class="card__main">
                     ${getText(text)} 
                     <div class="gallery">${getGallery(text.paveiksliukai)}</div>
                 </div>`;

    return HTML;
}
// <img src="./img/${message.paveiksliukai}" alt="img"> 

function returnFooter(who) {
let HTML = `<div class="LikeCommentShare">
    <span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>like</span>
    <span><i class="fa fa-comment-o" aria-hidden="true"></i>comment</span>
    <span><i class="fa fa-share" aria-hidden="true"></i>share</span>
 </div>
 <div class="card__footer">
 ${getAvatar(who)}
    <textarea placeholder="Write your comment"></textarea>
    <div class="actions">
       <i class="fa fa-smile-o" aria-hidden="true"></i>
       <i class="fa fa-camera-retro" aria-hidden="true"></i>
       <i class="fa fa-picture-o" aria-hidden="true"></i>
       <i class="fa fa-plus-square-o" aria-hidden="true"></i>
    </div>
 </div>`;

    return HTML;
}

function getText(message) {
    
    let messageText = message.tekstas;
    let kiek = 10;
    let HTML;
    
    
    let normal;
    let cutted;
    let textArr = messageText.split(' ');

        // Cutted TEXT first
    if (textArr.length > kiek) {
        cutted = textArr.slice();
        cutted.length = kiek;
        print = cutted.join(' ');
        HTML = `<p>${print}</p><span>...Show more</span>`;
        }  else {
            // Normal TEXT
           print = textArr.join(' ');
           HTML = `<p>${print}<span></span></p>`;
           
       }
          return HTML;
}
///// paveiksliukai
function getGallery(img) {

    let HTML = '';
    if (img.length > 0) {
        HTML = `<img class="img0" src="./img/${img[0]}" alt="image">`
        for (let i = 1; i < img.length; i++){
            HTML += `<img class="imgs" src="./img/${img[i]}" alt="image">`;
        }
    } else {
        HTML = '';
    }
    return HTML;
}



function renderText() {
    let cards = document.querySelectorAll('.card');
    let showButton = document.querySelectorAll('.card__main span');
    let cardMain = document.querySelectorAll('.card__main p')



    for (let i = 0; i < showButton.length; i++) {

        let feedText = feed[i].pranesimas.tekstas;

        showButton[i].addEventListener('click', (e) => {
            
            cardMain[i].innerHTML = feedText;
            
        });
    }
}
function getAvatar(img) {

    if (img.avataras === '') {
        img.avataras = 'user.png';
    }

    let HTML = `<img src="./img/avatar/${img.avataras}" alt="avataras">`;

    return HTML;
}


//----PASKUTINIS---//
getData(feed);
getData1(feed);
renderText();
