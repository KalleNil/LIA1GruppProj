//produkterna/annonserna
const annonser = [
    { id: 1, title: "Tavla",category: "Konst", description: "En väldigt unik tavla från Antwerp", price: 123, url:  "https://cdn.newport.se/gallery/4142/goc-fageltavla-laura-2__fullsize.jpg"},
    { id: 2, title: "Ost",category: "Konst", description: "En välsmakande ost gjord på get", price: 456 },
    { id: 3, title: "Skinka",category: "Konst", description: "Rökt skinka från Dalarna", price: 789 },
];
//skapar en annons för alla produkterna
for(let i = 0; i<annonser.length; i++){
    document.getElementById("annonser").innerHTML += 
    "<a class='card' href='#!'><div id='kort"+annonser[i].id +"Front' class='front'><h3>"+annonser[i].title+"</h3><p>hej</p><br> <p class='olle'>"+annonser[i].price+"kr</p></div><div class='back'><div id='kort"+annonser[i].id+"Back'><p>"+annonser[i].description+"</p> </div> <button>KÖP</button>";
    document.getElementById('kort'+annonser[i].id+'Front').style.backgroundImage = "url("+annonser[i].url+")";
    
}
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
    document.getElementById('kort'+idNumber+'Front').style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/France-003324_-_Mona_Lisa_%2816236519171%29.jpg/250px-France-003324_-_Mona_Lisa_%2816236519171%29.jpg)";
    

}

//skall bytas ut mot en annna api pga tomt innehåll
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

//låter oss skapa en URL av våran fil vi laddar upp  
function loadFile() {
    var annonsBild = document.getElementById('kort1Front');
    annonsBild.style.backgroundImage = "url("+URL.createObjectURL(event.target.files[0])+")";
    
  };



