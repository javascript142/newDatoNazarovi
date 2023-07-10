// // შექმენით ერთგვარი ტექსტური ფაილის ანალიზატორი.
const fileinput  =  document.querySelector('input');
const divUser = document.getElementById('result');

fileinput.addEventListener('change', () => {
    const fr = new FileReader();

    
    fr.readAsText(fileinput.files[0]);
    fr.addEventListener('load', () => {
        divUser.textContent = fr.result;
        // // შექმენით საიტი სადაც მომხმარებელს შეეძლება აირჩიოს მისთვის სასურველი სურათი, შემდეგში კი გამოიტანეთ ეს სურათი ეკრანზე.
        // const url = fr.result;
        // const img  = new img();
        //  img.src = url;
        //  divUser.appendChild(img);

    });
});
// // შექმენით საიტი სადაც მომხმარებელს შეეძლება აირჩიოს მისთვის სასურველი სურათი, შემდეგში კი გამოიტანეთ ეს სურათი ეკრანზე.
function user() {
    const preview = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
  
    reader.addEventListener( "load", () => {
        preview.src = reader.result;
      },false);
    if (file) {
      reader.readAsDataURL(file);
    }
  };