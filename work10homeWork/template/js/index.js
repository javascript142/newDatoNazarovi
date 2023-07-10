function searchItem() {
    let input, filter, conteiner,h4,a,i,txtvalue, cover;

    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    conteiner = document.getElementById("conteiner");
    h4 = document.getElementsByTagName("h4");
    cover = document.getElementsByClassName("cover");

    for (i = 0; i < h4.length; i++) {
        a = h4[i].getElementsByTagName("a")[0];
        txtvalue = a.textContent || a.innerText;
        if (txtvalue.toUpperCase().indexOf(filter) > -1 ) {
            cover[i].style.display = "";
        }else{
            cover[i].style.display = "none";
        }
    }
}