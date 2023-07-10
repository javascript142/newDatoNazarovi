let users =  ['burger', 'chips', 'salate',  'potato'];
function user(){
    let Food = users.filter  (use => use !== 'burger' && use !== 'chips');
    let map = users.map(users =>{
        return `${Food} burger is bad food ${map}`;
    });
    document.getElementById('result').innerHTML = Food;
    document.getElementById('result').innerHTML = map;
}
