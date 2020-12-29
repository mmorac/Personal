
var openChat = document .querySelector(".openChatBtn");
var closeChat = document.querySelector(".close")


if(openChat != null){
    openChat.addEventListener("click", openForm);    
}
if(closeChat != null){
    closeChat.addEventListener("click", closeForm);
}
function openForm() {
   document.querySelector(".openChat").style.display = "block";
   document.querySelector(".openChatBtn").style.display = "none";
}
function closeForm() {
   document.querySelector(".openChat").style.display = "none";
   document.querySelector(".openChatBtn").style.display = "block";
}

function readJSON(filepath){
    fetch(filepath).then(function(resp){
        return resp.json();
    });
}

angular.module('sitioPersonal', []).controller('controlador', ['$scope', function($scope){
    $scope.textos = idiomas["es-cr"];

    $scope.cambiarIdioma = function(){
        var idiomaSeleccionado = document.getElementById("seleccionIdioma").value;
        
        var fReader = new FileReader();
        fReader.onload = function(e){
            var esp = fReader.readAsText(e.target.result, "UTF-8");
            console.log("Información: " + esp);
        }
        
         
        switch(idiomaSeleccionado){
            case "es-cr":
                $scope.textos = idiomas["es-cr"];
                break;
            case "en-us":
                $scope.textos = idiomas["en-us"];
                break;
            case "pt-br":
                $scope.textos = idiomas["pt-br"];
                break;
            case "de-de":
                $scope.textos = idiomas["de-de"];
                break;
                
        }
    }
}]);


// IDIOMAS

var idiomas = {

    "es-cr": {
        "titulo": "Ingeniero de Software",
        "presentacion": "Mi nombre es Mario Mora, soy costarricense, vivo en Heredia, y soy desarrollador de software.",
        "botoninicio": "Inicio",
        "botonportafolio": "Portafolio",
        "botoncontacto": "Contacto",
        "botonchat": "Chat con Blaise"
    },
    "en-us":{
        "titulo": "Software Engineer",
        "presentacion": "My name is Mario Mora, I am Costa Rican, living in Heredia, and am a software developer.",
        "botoninicio": "Home",
        "botonportafolio": "Portfolio",
        "botoncontacto": "Contact",
        "botonchat": "Chat with Blaise"
    },
    "pt-br": {
        "titulo": "Engenheiro de Software",
        "presentacion": "Meu nome é Mario Mora, sou costarriquenho, moro em Heredia, e sou desenvolvedor de software.",
        "botoninicio": "Início",
        "botonportafolio": "Portafólio",
        "botoncontacto": "Contato",
        "botonchat": "Bate-papo com o Blaise"
    },
    "de-de": {
        "titulo": "Software Ingenieur",
        "presentacion": "Mein name ist Mario Mora, Ich komme aus Costa Rica, wohne in Heredia, und ich bin Software Entwinckler.",
        "botoninicio": "Anfang",
        "botonportafolio": "Anktenkoffer",
        "botoncontacto": "Kontakt",
        "botonchat": "Unterhalt mit Blaise"
   }


}