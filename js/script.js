let name = prompt("Insert Name");
let surname = prompt("Insert Surname");
let favorite_color = prompt("Insert favoutite color");

document.getElementById("name").innerHTML = "The insert name is:" + name;
document.getElementById("surname").innerHTML = "The insert surname is:" + surname;
document.getElementById("favorite-color").innerHTML = "The insert color is:" + favorite_color;
document.getElementById("passkey").innerHTML = "La passkey e': " + name + surname + favorite_color;