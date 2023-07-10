function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const contents = event.target.result; // სამიზნე მოქმედების შედეგი
            resolve(contents); // აქ მოდის როცა წარმატებით წაიკითხავს ფაილის ინფოს
        };

        reader.onerror = function (event) {
            reject(event.target.error); // აქ მოდის მაშინ როცა წარუმატებლად დასრულდება ფაილის წაკითხვის პროცესი
        };

        if (file.type.startsWith('text')) {
            reader.readAsText(file);
        } else if (file.type.startsWith('image')) {
            reader.readAsDataURL(file);
        } else {
            reject(new Error('Unsupported file type'));
        };
    })
}
function displayImage(contents) {
    const output = document.getElementById('output');
    output.innerHTML = `<img width=400px; height=200px;  src="${contents}" />`; // template string
}
function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const output = document.getElementById('output');
    if (!file) {
        output.style.color = 'red';
        output.innerText = 'No file selected';
        return;
    }

    readFileAsync(file).then((fileContents) => {
        if (file.type.startsWith('image')) {
            displayImage(fileContents);
        } else {
            output.textContent = fileContents;
        }
    }).catch((error) => {
        output.style.color = 'red';
        output.textContent = error;
    });

}