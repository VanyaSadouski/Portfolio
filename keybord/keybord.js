let textField = document.getElementById('text'),
    letterBtn = document.querySelectorAll('.letter'),
    enterBtn = document.getElementById("enter"),
    shiftBtn = document.querySelectorAll(".shift"),
    capsBtn = document.getElementById('caps'),
    tabBtn = document.getElementById('tab'),
    backBtn = document.getElementById('back'),
    clearBtn = document.getElementById('clearAll'),
    spaceBtn = document.getElementById('space');

console.log(letterBtn);

let isShift = false;
let upCase = false;
let isCaps = false;

for (let i = 0; i < letterBtn.length; i++) {
    let letter = letterBtn[i];
    letter.addEventListener('click', function (e) {
        if(isCaps){
            textField.value += e.target.textContent.trim().toUpperCase();
        }
        else if (upCase){
            textField.value += e.target.textContent.trim().toUpperCase();
            for (let i = 0; i < shiftBtn.length; i++) {
                shiftBtn[i].style.backgroundColor = '#385890';
            }
            for (let i = 0; i<letterBtn.length;i++){
                letterBtn[i].style.textTransform = 'lowercase';
            }
            isShift = false;
            upCase = false;
        }
        else textField.value += e.target.textContent.trim();
    })
}



enterBtn.addEventListener('click', function () {
    textField.value += '\n';
});

tabBtn.addEventListener('click', function () {
    textField.value += '   ';
});
backBtn.addEventListener('click',function () {
   textField.value =textField.value.substring(0,textField.value.length-1);
});

clearBtn.addEventListener('click',function () {
   textField.value  = '';
});
spaceBtn.addEventListener('click', function () {
   textField.value+= ' ';
});



for (let i = 0; i < shiftBtn.length; i++) {
    shift = shiftBtn[i];
    shift.addEventListener('click', shiftAdd)
}

capsBtn.addEventListener('click',capsAdd);



function capsAdd() {
    if (!isCaps){
        capsBtn.style.backgroundColor = 'red';
        isCaps = true;
        upCase = true;
        for (let i = 0; i<letterBtn.length;i++){
            letterBtn[i].style.textTransform = 'uppercase';

        }
    }
    else {
        capsBtn.style.backgroundColor = '#385890';
        isCaps = false;
        upCase = false;
        for (let i = 0; i<letterBtn.length;i++){
            letterBtn[i].style.textTransform = 'lowercase';

        }
    }
}

function shiftAdd() {
    if (!isShift) {
        for (let i = 0; i < shiftBtn.length; i++) {
            shiftBtn[i].style.backgroundColor = 'red';
        }
        for (let i = 0; i<letterBtn.length;i++){
            letterBtn[i].style.textTransform = 'uppercase';

        }
        upCase = true;
        isShift = true;
    }
    else {
        for (let i = 0; i < shiftBtn.length; i++) {
            shiftBtn[i].style.backgroundColor = '#385890';
        }
        for (let i = 0; i<letterBtn.length;i++){
            letterBtn[i].style.textTransform = 'lowercase';
        }
        upCase = false;
        isShift = false;
    }
}

///Подсветка
document.addEventListener('keydown', function (e) {
   let  a = String.fromCharCode(e.which).toLowerCase();
   for (let i=0;i<letterBtn.length;i++){
       if (a === letterBtn[i].id.substring(1)){
           document.getElementById("_"+a).style.backgroundColor = 'red';
       }
   }

   console.log(a);
});

document.addEventListener('keyup',function (e) {

    let  a = String.fromCharCode(e.which).toLowerCase();

    for (let i=0;i<letterBtn.length;i++){

        if (a === letterBtn[i].id.substring(1)){
            document.getElementById("_"+a).style.backgroundColor = '#363c5a'
        }
    }


});



