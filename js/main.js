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

function returnMain(message) {

    let HTML = `<div class="card__main">
                 <p class="para">${message.tekstas}</p>
                  <div class="gallery">
                     <img src="./img/5.jpeg" alt="img">
                  </div>
               </div>`;

    return HTML;
}

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

// function getText(message) {

//     let messageText = message.tekstas;
//     let kiek = 10;
//     let textArr = messageText.split(' ');
//     let normal = textArr.length;
//     let cutted = '';


//     // ... ?
//     if (normal.length < kiek) {
//         cutted = normal.length;
//         console.log(cutted);
//     }


//     let HTML = `<p>${message.tekstas}</p>`;

//     return HTML;
// }


function getAvatar(img) {

    if (img.avataras === '') {
        img.avataras = 'user.png';
    }

    let HTML = `<img src="./img/avatar/${img.avataras}" alt="avataras">`;

    return HTML;
}

//----PASKUTINIS---//
getData(feed);


// let likebutton = document.querySelector('.pirmas');
// let likeON = document.querySelector('.like');


// likebutton.addEventListener('click', () => {

//     if (likeON.className == 'like pirmas likeON') {
//         likeON.classList.remove('likeON');
//     } else {
//         likeON.classList.add('likeON');
//     }

// });