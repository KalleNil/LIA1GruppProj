//id:t på annonskortet
let idNumber = 6;
function newAd(){
    idNumber += 1;
    let annonsDisplay = document.getElementById('annons')
    if (annonsDisplay.style.display === "none") {
        annonsDisplay.style.display = "block";
    } else {
        annonsDisplay.style.display = "none";
    }  

    /*document.getElementById("annonser").innerHTML += 
    "<a class='card' href='#!'><div id='kort"+idNumber+"Front' class='front'><p>Klicka på knappen högst upp</p></div><div class='back'><div id='kort"+idNumber+"Back'><p>Klicka på knappen högst upp</p></div>";
    */


}

function newAdForm(){
    let annonsDisplay = document.getElementById('annons');
    if (annonsDisplay.style.display === "none") {
        annonsDisplay.style.display = "block";
    } else {
        annonsDisplay.style.display = "none";
    }
    
    let titleInput = document.getElementById('titleId').value;
    let categoryInput = document.getElementById('kategoriId').value;
    let priceInput = document.getElementById('priceId').value;
    let beskrivningInput = document.getElementById('beskrivningId').value;


    document.getElementById("annonser").innerHTML += 
    "<a class='card' href='#!'><div id='kort"+idNumber+"Front' class='front'><h3>"+titleInput+"</h3><p>"+categoryInput+"</p><br> <p class='olle'>"+priceInput+"kr</p></div><div class='back'><div id='kort"+idNumber+"Back'><p>"+beskrivningInput+"</p></div>";
    let imageInput = document.getElementById('img').value;
    document.getElementById('kort'+idNumber+'Front').style.backgroundImage = "url("+imageInput+")";

}

function testApi(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

    xhr.responseType = "json";

    xhr.send();

    xhr.onload = function () {
       
        
        console.log(xhr.response);

        document.getElementById('kort6Front').style.backgroundImage = "url("+xhr.response[idNumber].url+")";
    }  

}



