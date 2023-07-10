function person() {
    let person = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        birthYear: document.getElementById("year").value,
        age: function() {
            return 2023 - parseInt(this.birthYear);
        }
    }
    document.getElementById("result").innerHTML = ` mr/ms ${person.name} ${person.surname} thank u for it ${person.age()}`;
    // console.log(person.age());
}
