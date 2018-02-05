window.onload = function(){
  var resultatAnvaendare = 0;
  var resultatPc = 0;

  var res = document.getElementsByClassName("res"); 
  var sten = document.getElementById("sten");
  var sax = document.getElementById("sax");
  var pase = document.getElementById("pase");
  var resText = document.getElementById("resultatText");
  var datorAlternativArray = ["sten","sax","påse"];

  function updateraDatorAlternativ(){
    var randomNumber = Math.floor(Math.random()*datorAlternativArray.length);
    return randomNumber;
  }
  
  function valtSten(){
    var randomNr = updateraDatorAlternativ();
    if(randomNr == 0){  
      resText.innerHTML=" Båda valde "+ datorAlternativArray[randomNr];
   }
   else if (randomNr == 1){
      resText.innerHTML = 'Datorn valde '+ datorAlternativArray[randomNr] + ' du vann';
      ++resultatAnvaendare;
      res[0].innerHTML = resultatAnvaendare+":"+resultatPc;
   }
   else{
      resText.innerHTML = 'Datorn valde '+ datorAlternativArray[2] + ' du förlorade';
      ++resultatPc;
      res[0].innerHTML = resultatAnvaendare+":"+resultatPc;
   }
 }
  
  function valtSax(){
    var randomNr = updateraDatorAlternativ();
    if(randomNr == 0){  
      resText.innerHTML='Datorn valde '+ datorAlternativArray[randomNr] + ' du förlorade';
      ++resultatPc;
      res[0].innerHTML = resultatAnvaendare+":"+resultatPc;
   }
   else if (randomNr == 1){
     resText.innerHTML = "Båda valde "+ datorAlternativArray[randomNr];
     res[0].innerHTML = resultatAnvaendare+":"+resultatPc;
   }
   else{
    resText.innerHTML = 'Datorn valde '+ datorAlternativArray[2] + ' du vann';
    ++resultatAnvaendare;
    res[0].innerHTML = resultatAnvaendare+":"+resultatPc;
  }
 }
  
  function valtPase(){
    var randomNr = updateraDatorAlternativ();
    if(randomNr == 0){  
      resText.innerHTML='Datorn valde '+ datorAlternativArray[randomNr] + ' du vann';
      ++resultatAnvaendare;
      res[0].innerHTML = resultatAnvaendare+":"+resultatPc;
    }
    else if (randomNr == 1){
      resText.innerHTML = 'Datorn valde '+ datorAlternativArray[randomNr] + ' du förlorade';
      ++resultatPc;
      res[0].innerHTML = resultatAnvaendare+":"+resultatPc;
    }
    else{
     resText.innerHTML = 'Båda valde '+ datorAlternativArray[2];
     res[0].innerHTML = resultatAnvaendare+":"+resultatPc;
    }
  }
  sten.addEventListener('click', valtSten);
  sax.addEventListener('click', valtSax);
  pase.addEventListener('click', valtPase);
};
