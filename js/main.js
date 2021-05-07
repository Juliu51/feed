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
        <img src="./src/img/avatar/user.png" alt="avataras">
        <div class="user">
            <div class="name">${list.autorius.vardas} ${list.autorius.pavarde}</div>
            <div class="time">${list.laikas}</div>
        </div>
        <div class="more"><i class="fas fa-ellipsis-v"></i></div>
    </div>
    <div class="card_main">${list.pranesimas.tekstas}</div>
    <div class="card_footer">footer</div>
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