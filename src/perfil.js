const perfil = document.getElementById('perfil');


var imagesPerfil = [
    "url('../src/img/ft1.jpeg')",
    "url('../src/img/ft2.jpeg')",
    "url('../src/img/ft3.jpeg')",
    "url('../src/img/ft4.jpeg')",
    "url('../src/img/ft5.jpeg')",
    "url('../src/img/ft6.jpeg')",
    "url('../src/img/ft7.jpeg')",
    "url('../src/img/ft8.jpeg')",
];

perfil.style.backgroundImage = imagesPerfil[0];

let cont = 0;
function changeimg() {
    if(cont == cont){
        
        perfil.style.backgroundImage = imagesPerfil[cont];
        cont += 1;
    }
    if(cont == 7){
         cont = 0;
         perfil.style.backgroundImage = imagesPerfil[cont];

    }
    
}

setInterval(() => {
   
    changeimg();
}, 2000);

