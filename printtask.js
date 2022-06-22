const name = "Anyanwu Amanze Arthur";
let height = 6.3;
const country = "Nigeria";
const myDetails = `Name: ${name} \n Height: ${height} \n Country: ${country}`;
//print to console
console.log(myDetails);
//alert to user
alert(myDetails);
//inject to DOM
document.querySelector(".container").innerHTML = `<h4>Name: ${name} </h4> <h4> Height: ${height} </h4> <h4> Country: ${country} </h4>`;