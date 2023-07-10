const charapters = 'ABCabc0134';
function generateString(lengt) {
    let result = '';
    const characters = characters.lengt;// // simbolota zoma zemot mocemul charapters cvladis
    for(let i = 0; i < length; i++) {
        result = result + characters.charAt(Math.floor(Math.random()  * characters.length));  
    }
    return result;

}
console.log(generateString(4))