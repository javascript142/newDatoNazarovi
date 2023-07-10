$('.conteiner').hide();
setTimeout(function(){
    $(".center").hide();
    $('.conteiner').fadeToggle();
},5000)

function zero() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 0;
}
function one() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 1;
}
function two() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 2;
}
function tree() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 3;
}
function four() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 4;
}
function five() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 5;
}
function six() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 6;
}
function seven() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 7;
}
function eit() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 8;
}
function nain() {
    let canculator = document.getElementById('canculator').value;
    document.getElementById('canculator').value = canculator + 9;
}


function equal(){
    let canculator = document.getElementById('canculator').value;
    if (canculator.includes("+")) {
     let numbers = canculator.split("+");
     let sam = 0;
    for (let i = 0; i < numbers.length; i++) {
        sam = sam + parseInt(numbers[i]);
    }
    
    document.getElementById("canculator").value = sam ;
} else if (canculator.includes("-")) {
    let num = canculator.split('-');
    let minus = 0;
    for (let i = 0; i < num.length; i++) {
        minus = minus * parseInt(num[i]);
    }
    document.getElementById("canculator").value = minus;
}

}
function plus() {
    let canculator = document.getElementById('canculator').value;
    if (canculator.length > 0) {
    document.getElementById('canculator').value = canculator + "+";
    }
}
function minus(){
    let canculator = document.getElementById('canculator').value;
    if (canculator.length > 0) {
    document.getElementById('canculator').value = canculator + "-";
    }
}
function multiply(){
    let canculator = document.getElementById('canculator').value;
    if (canculator.length > 0) {
    document.getElementById('canculator').value = canculator + "*";
    }
}