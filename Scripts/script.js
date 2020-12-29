
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
    $scope.cambiarIdioma = function(){
        var idiomaSeleccionado = document.getElementById("seleccionIdioma").value;
        var esp = require("../json/es_cr.json");
        console.log(esp);

        console.log("Información: " + esp);
         
        switch(idiomaSeleccionado){
            case "es-cr":
                $scope.titulo = "Ingeniero de Software";
                break;
            case "en-us":
                $scope.titulo = "Software Engineer";
                break;
            case "pt-br":
                $scope.titulo = "Engenheiro de Software";
                break;
            case "de-de":
                $scope.titulo = "Software Ingenieur";
                break;
                
        }
    }
}]);
