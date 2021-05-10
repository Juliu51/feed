"use strict";
function getData(data) {

    let HTML = "";
    let sectionBody = document.querySelector('.section');

  

    if (Array.isArray(data)) {

        //patikrina kiek objektu yra
        for (let i = 0; i < data.length; i++) {
            //padaro 11 HTML korteliu
            HTML += getList(data[i]);
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
    <div class="card_head">
        <img src="./src/img/avatar/${list.autorius.avataras}" alt="avataras">
        <div class="user">
            <div class="name">${list.autorius.vardas} ${list.autorius.pavarde}</div>
            <div class="time">${list.laikas}</div>
        </div>
        <div class="more"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></i></div>
    </div>
    <div class="card_main">${list.pranesimas.tekstas}</div>
    <div class="card_footer">
    <div class="buttonai">
    <button class="like pirmas"><i class="fa fa-thumbs-o-up" aria-hidden="true">Like</i></button>
    <button class="comment"><i class="fa fa-comment-o" aria-hidden="true">Comment</i></button>
    </div>
    <input type="text" placeholder="Write your comment">
    </div>
</div>`;
    
    return HTML;

}
 
function creatHead() {
    
}

function creatMain() {
    
}

function creatFooter() {
    
}
//----PASKUTINIS---//
getData(feed);


let likebutton = document.querySelector('.pirmas');
let likeON = document.querySelector('.like');


likebutton.addEventListener('click', () => {

    if (likeON.className == 'like pirmas likeON') {
        likeON.classList.remove('likeON');
    } else {
        likeON.classList.add('likeON');
    }

});