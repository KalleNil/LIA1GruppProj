function marsRover() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=NevcQOLxnP4zdGk4Gp1yDVbEMNd5ALafbgfxB5kJ");

    xhr.responseType = "json";

    xhr.send();

    document.getElementById('kort1Front').innerHTML = "Laddar"
    document.getElementById('kort2Front').innerHTML = "Laddar"
    document.getElementById('kort3Front').innerHTML = "Laddar"
    document.getElementById('kort4Front').innerHTML = "Laddar"
    document.getElementById('kort5Front').innerHTML = "Laddar"
    document.getElementById('kort6Front').innerHTML = "Laddar"
    xhr.onload = function () {
       
        
      console.log(xhr.response);
      
    
      //deklarerar alla texter innan loopen
      let backText1 = "";
      let backText2 = "";
      let backText3 = "";
      let backText4 = "";
      let backText5 = "";
      let backText6 = "";

      //en loop för att få rätt indexvärde till varje bild
      for(let x = 0; x<6; x++){

        
        let backText = "<p>"+ xhr.response.photos[x].id +"</p>" + "<p>" + xhr.response.photos[x].rover.name + "</p>"
        +"<p>" + xhr.response.photos[x].rover.landing_date + "</p>"+"<p>" + xhr.response.photos[x].rover.launch_date+ "</p>"+"<p>" + xhr.response.photos[x].rover.status + "</p>";

        switch(x){
          case 0:
            backText1 = backText;
            break;
          case 1:
            backText2 = backText;
            break;
          case 2:
            backText3 = backText;
            break;
          case 3:
            backText4 = backText;
            break;
          case 4:
            backText5 = backText;
            break;
          case 5:
            backText6 = backText;
            break;
            
            
        }
       
      }
     
      //baksidan av alla korten
      document.getElementById('kort1Back').innerHTML = backText1;
      document.getElementById('kort2Back').innerHTML = backText2;
      document.getElementById('kort3Back').innerHTML = backText3;
      document.getElementById('kort4Back').innerHTML = backText4;
      document.getElementById('kort5Back').innerHTML = backText5;
      document.getElementById('kort6Back').innerHTML = backText6;
     
      
        //Bilder och en paragraf till varje flipping card
        //1
        document.getElementById('kort1Front').style.backgroundImage = "url("+xhr.response.photos[0].img_src+")";
        document.getElementById('kort1Front').innerHTML = "<p>"+ xhr.response.photos[0].camera.full_name +"</p>" + "<p>"+ xhr.response.photos[0].id +"</p>";

        document.getElementById('kort2Front').style.backgroundImage = "url("+xhr.response.photos[1].img_src+")";
        document.getElementById('kort2Front').innerHTML = "<p>"+ xhr.response.photos[1].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[1].id +"</p>";
  
        document.getElementById('kort3Front').style.backgroundImage = "url("+xhr.response.photos[2].img_src+")";
        document.getElementById('kort3Front').innerHTML = "<p>"+ xhr.response.photos[2].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[2].id +"</p>";
  
        document.getElementById('kort4Front').style.backgroundImage = "url("+xhr.response.photos[3].img_src+")";
        document.getElementById('kort4Front').innerHTML = "<p>"+ xhr.response.photos[3].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[3].id +"</p>";

        document.getElementById('kort5Front').style.backgroundImage = "url("+xhr.response.photos[4].img_src+")";
        document.getElementById('kort5Front').innerHTML = "<p>"+ xhr.response.photos[4].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[4].id +"</p>";

        document.getElementById('kort6Front').style.backgroundImage = "url("+xhr.response.photos[5].img_src+")";
        document.getElementById('kort6Front').innerHTML = "<p>"+ xhr.response.photos[5].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[5].id +"</p>";
        
  
  
    
         
     };
}

function marsRover2() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=NevcQOLxnP4zdGk4Gp1yDVbEMNd5ALafbgfxB5kJ");

  xhr.responseType = "json";

  xhr.send();

  document.getElementById('kort1Front').innerHTML = "Laddar"
  document.getElementById('kort2Front').innerHTML = "Laddar"
  document.getElementById('kort3Front').innerHTML = "Laddar"
  document.getElementById('kort4Front').innerHTML = "Laddar"
  document.getElementById('kort5Front').innerHTML = "Laddar"
  document.getElementById('kort6Front').innerHTML = "Laddar"
  xhr.onload = function () {
     
      
    console.log(xhr.response);
    
  
    //deklarerar alla texter innan loopen
    let backText1 = "";
    let backText2 = "";
    let backText3 = "";
    let backText4 = "";
    let backText5 = "";
    let backText6 = "";

    //en loop för att få rätt indexvärde till varje bild
    for(let x = 6; x<12; x++){

      
      let backText = "<p>"+ xhr.response.photos[x].id +"</p>" + "<p>" + xhr.response.photos[x].rover.name + "</p>"
      +"<p>" + xhr.response.photos[x].rover.landing_date + "</p>"+"<p>" + xhr.response.photos[x].rover.launch_date+ "</p>"+"<p>" + xhr.response.photos[x].rover.status + "</p>";

      switch(x){
        case 6:
          backText1 = backText;
          break;
        case 7:
          backText2 = backText;
          break;
        case 8:
          backText3 = backText;
          break;
        case 9:
          backText4 = backText;
          break;
        case 10:
          backText5 = backText;
          break;
        case 11:
          backText6 = backText;
          break;
          
          
      }
     
    }
   
    //baksidan av alla korten
    document.getElementById('kort1Back').innerHTML = backText1;
    document.getElementById('kort2Back').innerHTML = backText2;
    document.getElementById('kort3Back').innerHTML = backText3;
    document.getElementById('kort4Back').innerHTML = backText4;
    document.getElementById('kort5Back').innerHTML = backText5;
    document.getElementById('kort6Back').innerHTML = backText6;
   
    
      //Bilder och en paragraf till varje flipping card
      document.getElementById('kort1Front').style.backgroundImage = "url("+xhr.response.photos[6].img_src+")";
      document.getElementById('kort1Front').innerHTML = "<p>"+ xhr.response.photos[6].camera.full_name +"</p>" + "<p>"+ xhr.response.photos[6].id +"</p>";

      document.getElementById('kort2Front').style.backgroundImage = "url("+xhr.response.photos[7].img_src+")";
      document.getElementById('kort2Front').innerHTML = "<p>"+ xhr.response.photos[7].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[7].id +"</p>";

      document.getElementById('kort3Front').style.backgroundImage = "url("+xhr.response.photos[8].img_src+")";
      document.getElementById('kort3Front').innerHTML = "<p>"+ xhr.response.photos[8].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[8].id +"</p>";

      document.getElementById('kort4Front').style.backgroundImage = "url("+xhr.response.photos[9].img_src+")";
      document.getElementById('kort4Front').innerHTML = "<p>"+ xhr.response.photos[9].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[9].id +"</p>";

      document.getElementById('kort5Front').style.backgroundImage = "url("+xhr.response.photos[10].img_src+")";
      document.getElementById('kort5Front').innerHTML = "<p>"+ xhr.response.photos[10].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[10].id +"</p>";

      document.getElementById('kort6Front').style.backgroundImage = "url("+xhr.response.photos[11].img_src+")";
      document.getElementById('kort6Front').innerHTML = "<p>"+ xhr.response.photos[11].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[11].id +"</p>";
      


  
       
   };
}
function marsRover3() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=NevcQOLxnP4zdGk4Gp1yDVbEMNd5ALafbgfxB5kJ");

  xhr.responseType = "json";

  xhr.send();

  document.getElementById('kort1Front').innerHTML = "Laddar"
  document.getElementById('kort2Front').innerHTML = "Laddar"
  document.getElementById('kort3Front').innerHTML = "Laddar"
  document.getElementById('kort4Front').innerHTML = "Laddar"
  document.getElementById('kort5Front').innerHTML = "Laddar"
  document.getElementById('kort6Front').innerHTML = "Laddar"
  xhr.onload = function () {
     
      
    console.log(xhr.response);
    
  
    //deklarerar alla texter innan loopen
    let backText1 = "";
    let backText2 = "";
    let backText3 = "";
    let backText4 = "";
    let backText5 = "";
    let backText6 = "";

    //en loop för att få rätt indexvärde till varje bild
    for(let x = 12; x<18; x++){

      
      let backText = "<p>"+ xhr.response.photos[x].id +"</p>" + "<p>" + xhr.response.photos[x].rover.name + "</p>"
      +"<p>" + xhr.response.photos[x].rover.landing_date + "</p>"+"<p>" + xhr.response.photos[x].rover.launch_date+ "</p>"+"<p>" + xhr.response.photos[x].rover.status + "</p>";

      switch(x){
        case 12:
          backText1 = backText;
          break;
        case 13:
          backText2 = backText;
          break;
        case 14:
          backText3 = backText;
          break;
        case 15:
          backText4 = backText;
          break;
        case 16:
          backText5 = backText;
          break;
        case 17:
          backText6 = backText;
          break;
          
          
      }
     
    }
   
    //baksidan av alla korten
    document.getElementById('kort1Back').innerHTML = backText1;
    document.getElementById('kort2Back').innerHTML = backText2;
    document.getElementById('kort3Back').innerHTML = backText3;
    document.getElementById('kort4Back').innerHTML = backText4;
    document.getElementById('kort5Back').innerHTML = backText5;
    document.getElementById('kort6Back').innerHTML = backText6;
   
    
      //Bilder och en paragraf till varje flipping card
      document.getElementById('kort1Front').style.backgroundImage = "url("+xhr.response.photos[12].img_src+")";
      document.getElementById('kort1Front').innerHTML = "<p>"+ xhr.response.photos[12].camera.full_name +"</p>" + "<p>"+ xhr.response.photos[12].id +"</p>";

      document.getElementById('kort2Front').style.backgroundImage = "url("+xhr.response.photos[13].img_src+")";
      document.getElementById('kort2Front').innerHTML = "<p>"+ xhr.response.photos[13].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[13].id +"</p>";

      document.getElementById('kort3Front').style.backgroundImage = "url("+xhr.response.photos[14].img_src+")";
      document.getElementById('kort3Front').innerHTML = "<p>"+ xhr.response.photos[14].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[14].id +"</p>";

      document.getElementById('kort4Front').style.backgroundImage = "url("+xhr.response.photos[15].img_src+")";
      document.getElementById('kort4Front').innerHTML = "<p>"+ xhr.response.photos[15].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[15].id +"</p>";

      document.getElementById('kort5Front').style.backgroundImage = "url("+xhr.response.photos[16].img_src+")";
      document.getElementById('kort5Front').innerHTML = "<p>"+ xhr.response.photos[16].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[16].id +"</p>";

      document.getElementById('kort6Front').style.backgroundImage = "url("+xhr.response.photos[17].img_src+")";
      document.getElementById('kort6Front').innerHTML = "<p>"+ xhr.response.photos[17].camera.full_name +"</p>"+ "<p>"+ xhr.response.photos[17].id +"</p>";
      


  
       
   };
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

    document.getElementById("annonser").innerHTML += 
    "<a class='card' href='#!'><div id='kort"+idNumber+"Front' class='front'><p>"+titleInput+"</p></div><div class='back'><div id='kort"+idNumber+"Back'><p>Klicka på knappen högst upp</p></div>";

    

}



