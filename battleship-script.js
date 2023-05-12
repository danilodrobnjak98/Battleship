function checkUsername() {
  let Regusername=/^\w{3,15}$/; //mala,velika slova,brojeve,donja crta, ne sme biti prazno, min 3 karaktera, max 15
  //testiranje prvog
  var a=0;
  if(Regusername.test(document.getElementById("PrviIgrac").value)){
   // alert("Username prvog igraca je u dobrom formatu!");
    a++;
    localStorage.setItem("PrviIgrac",document.getElementById("PrviIgrac").value);
  }
  else
  alert("Username prvog igraca je u losem formatu!");
//testiranje drugog
if(Regusername.test(document.getElementById("DrugiIgrac").value)){
 // alert("Username drugog igraca je u dobrom formatu!");
 a++;
 localStorage.setItem("DrugiIgrac",document.getElementById("DrugiIgrac").value);
}
else
alert("Username drugog igraca je u losem formatu!");

if(a==2){ //prelazak na drugi sajt
 window.location ="battleship-setup.html"; 
}

}
var drugi=false; // flag za prepoznavanje koji je igrac na redu

function ucitajImena() {

if(drugi==false){
  ime=localStorage.getItem("PrviIgrac");
  
  
  document.getElementById('demo').innerHTML = "Ime igrača koji je na redu da postavi brodove : " + " " + ime;
 
  
}
if(drugi==true) {
  ime=localStorage.getItem("DrugiIgrac");

  
  document.getElementById('demo').innerHTML = "Ime igrača koji je na redu da postavi brodove : " + " " + ime;

}


}

function start() {
ucitajImena();
brodovi();


}
//brodovi koji su na raspolaganju 
var gjednopolje=4;
var gdvapolja=3;
var gtripolka=2;
var gcetripolja=1;

function brodovi() {
if (gjednopolje<=0){
  gjednopolje=0;
}
if (gdvapolja<=0){
  gdvapolja=0;
}
if (gtripolka<=0){
  gtripolka=0;
}
if (gcetripolja<=0){
  gcetripolja=0;
}
document.getElementById('jednopolje').innerHTML = " Broj preostalih brodova dužine jednog polja : " + " " + gjednopolje;
document.getElementById('dvapolja').innerHTML = " Broj preostalih brodova dužine dva polja : " + " " + gdvapolja;
document.getElementById('tripolja').innerHTML = " Broj preostalih brodova dužine tri polja : " + " " + gtripolka;
document.getElementById('cetiripolja').innerHTML = " Broj preostalih brodova dužine cetiri polja : " + " " + gcetripolja;

}


function uNizu(a,arrr) {
for (let i = 0; i < arrr.length; i++) {
    if(arrr[i]===a) return true;
    
    
  }    
  return false;
 }
var arr=[];
var global=[];
var igrac=[];
var zabranjena=[];

var ulazak=false;
function mdown(clickedElement) {
    elem=clickedElement.id;

    if(uNizu(elem,global)){
      alert("Brod je vec postavljen na toj poziciji!");
      ulazak=false;
      return;
    }
    if(uNizu(elem,zabranjena)){
      alert("Brodovi ne smeju da se preklapaju!");
      ulazak=false;
      return;
    }
    arr.length=0; //ovo je posl menjano

    arr.push(elem);
    //document.getElementById(elem).style.backgroundColor="darkorange";

  ulazak=true;
}
function mover(clickedElement) {

    if(ulazak==false) return;
    elem=clickedElement.id;

    if(uNizu(elem,global)){
      alert("Brod je vec postavljen na toj poziciji!");
      arr.length=0;
      ulazak=false;
      return;
    }
    if(uNizu(elem,arr)){
      alert("Brod je vec postavljen na toj poziciji!");
      arr.length=0;
      ulazak=false;
      return;
    }
    if(uNizu(elem,zabranjena)){
      alert("Brodovi ne smeju da se preklapaju!");
      ulazak=false;
      return;
    }
  
    arr.push(elem);
   // document.getElementById(elem).style.backgroundColor="darkorange";
  
}
function mout(clickedElement) {
  
  ulazak=false;

 //zabranjena mesta
 

  if(arr.length>=5) {
    arr.length=0;
    return;
 }
 arr.sort();

let ne_znam=0;
 if(arr.length==3){
      let prvi1=arr[0].charAt(0);
      let prvi2=arr[0].charAt(1);
      let drugi1=arr[1].charAt(0);
      let drugi2=arr[1].charAt(1);
      let treci1=arr[2].charAt(0);
      let treci2=arr[2].charAt(1);

      if(((prvi1==drugi1)&&(drugi1==treci1)&&(prvi1==treci1))||((prvi2==drugi2)&&(drugi2==treci2)&&(prvi2==treci2))) ne_znam=1;
      else{
      alert("Nedozvoljeni brod!");
        arr.length=0;
        return;
      }
 }
if(arr.length==4){
    let prvi1=arr[0].charAt(0);
    let prvi2=arr[0].charAt(1);
    let drugi1=arr[1].charAt(0);
    let drugi2=arr[1].charAt(1);
    let treci1=arr[2].charAt(0);
    let treci2=arr[2].charAt(1);
    let cetvr1=arr[3].charAt(0);
    let cetvr2=arr[3].charAt(1);
    if(((prvi1==drugi1)&&(prvi1==cetvr1)&&(drugi1==cetvr1)&&(treci1==cetvr1)&&(drugi1==treci1)&&(prvi1==treci1))||((prvi2==drugi2)&&(drugi2==treci2)&&(prvi2==cetvr2)&&(drugi2==cetvr2)&&(treci2==cetvr2)&&(prvi2==treci2))) ne_znam=1;
    else{
    alert("Nedozvoljeni brod!");
      arr.length=0;
      return;
    }
    
}


   if(arr.length==1 && gjednopolje<=0){
    alert("Iskoristili ste brodove duzine 1 polja");
    arr.length=0;
    return;
  }
  if(arr.length==2 && gdvapolja<=0){
    alert("Iskoristili ste brodove duzine 2 polja");
    arr.length=0;
    return;
  }
  if(arr.length==3 && gtripolka<=0){
    alert("Iskoristili ste brodove duzine 3 polja");
    arr.length=0;
    return;
  }
  if(arr.length==4 && gcetripolja<=0){
    alert("Iskoristili ste brodove duzine 4 polja");
    arr.length=0;
    return;
  }
  for(let i=0;i<arr.length;i++){
  document.getElementById(arr[i]).style.backgroundColor="darkorange";
}
 if(arr.length==1) {
   gjednopolje--;

   let znak=arr[0].charAt(0);
   let broj=arr[0].charAt(1);

   if(arr[0].charAt(2)=="0"){
    let prv=arr[0].charAt(0);
    let num=10;
    //A10,J10 
    let lLevo=prv+"9";
    zabranjena.push(lLevo);
    
    let up=prv.charCodeAt(0);
      let uppp=parseInt(up);
      uppp--;

    let upp=String.fromCharCode(uppp);

    let GORE=upp+"10";

    zabranjena.push(GORE);


    let d=prv.charCodeAt(0);
      let dow=parseInt(d);
      dow++;

    let down=String.fromCharCode(dow);

    let DOLE=down+"10";

    zabranjena.push(DOLE);

    brodovi();

    //provera
    if(kraj()){
      if(krajPodesavanja){
        //localStorage.setItem("BrodoviDrugog",global);
        localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
        window.location="battleship-game.html";
        return;
      }
      alert("Drugi igrac je na redu!");
      prepravi(); brodovi();
      drugi=true;
      ucitajImena();
     
      
     for (let i = 0; i < global.length; i++) {
      
      if (global[i]=="|") {
        //alert("crta");
        continue;
      }
      document.getElementById(global[i]).style.backgroundColor="white";     
     }
  
     //brisanje kolone 10
  
     document.getElementById("A10").style.backgroundColor="white";
     document.getElementById("B10").style.backgroundColor="white";
  
     document.getElementById("C10").style.backgroundColor="white";
  
     document.getElementById("D10").style.backgroundColor="white";
     document.getElementById("E10").style.backgroundColor="white";
     document.getElementById("F10").style.backgroundColor="white";
     document.getElementById("G10").style.backgroundColor="white";
     document.getElementById("H10").style.backgroundColor="white";
     document.getElementById("I10").style.backgroundColor="white";
     document.getElementById("J10").style.backgroundColor="white";
  
     document.getElementById("A9").style.backgroundColor="white";
     document.getElementById("B9").style.backgroundColor="white";
  
     document.getElementById("C9").style.backgroundColor="white";
  
     document.getElementById("D9").style.backgroundColor="white";
     document.getElementById("E9").style.backgroundColor="white";
     document.getElementById("F9").style.backgroundColor="white";
     document.getElementById("G9").style.backgroundColor="white";
     document.getElementById("H9").style.backgroundColor="white";
     document.getElementById("I9").style.backgroundColor="white";
     document.getElementById("J9").style.backgroundColor="white";
  
     document.getElementById("A8").style.backgroundColor="white";
     document.getElementById("B8").style.backgroundColor="white";
  
     document.getElementById("C8").style.backgroundColor="white";
  
     document.getElementById("D8").style.backgroundColor="white";
     document.getElementById("E8").style.backgroundColor="white";
     document.getElementById("F8").style.backgroundColor="white";
     document.getElementById("G8").style.backgroundColor="white";
     document.getElementById("H8").style.backgroundColor="white";
     document.getElementById("I8").style.backgroundColor="white";
     document.getElementById("J8").style.backgroundColor="white";
  
  
     document.getElementById("A7").style.backgroundColor="white";
     document.getElementById("B7").style.backgroundColor="white";
  
     document.getElementById("C7").style.backgroundColor="white";
  
     document.getElementById("D7").style.backgroundColor="white";
     document.getElementById("E7").style.backgroundColor="white";
     document.getElementById("F7").style.backgroundColor="white";
     document.getElementById("G7").style.backgroundColor="white";
     document.getElementById("H7").style.backgroundColor="white";
     document.getElementById("I7").style.backgroundColor="white";
     document.getElementById("J7").style.backgroundColor="white";
  
  
     //localStorage.setItem("BrodoviPrvog",global);
     localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
    
      global.length=0;
      zabranjena.length=0;
      
      
      
     
    }
    return;
   }
   let levo=znak; let desno=znak;
   
   let realBroj=parseInt(broj);
   
   let levibr=--realBroj;
   let desnibr=levibr+2;

   levo+=levibr; desno+=desnibr;

   zabranjena.push(levo);
   zabranjena.push(desno);

    //gore,dole

    let znk=arr[0].charAt(0);
    let br=arr[0].charAt(1);

     let nmb=znk.charCodeAt(0);
     let brojc=parseInt(nmb);

     let gore=--brojc;
    let dole=gore+2;


    let Gore=String.fromCharCode(gore);
     let Dole=String.fromCharCode(dole);

     Gore+=br;
     Dole+=br;
     zabranjena.push(Gore);
     zabranjena.push(Dole);
     brodovi();
     //provera

     if(kraj()){
      if(krajPodesavanja){
        //localStorage.setItem("BrodoviDrugog",global);
        localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
        window.location="battleship-game.html";
        return;
      }
      alert("Drugi igrac je na redu!");
      prepravi(); brodovi();
      drugi=true;
      ucitajImena();
     
      
     for (let i = 0; i < global.length; i++) {
      
      if (global[i]=="|") {
        //alert("crta");
        continue;
      }
      document.getElementById(global[i]).style.backgroundColor="white";     
     }
  
     //brisanje kolone 10
  
     document.getElementById("A10").style.backgroundColor="white";
     document.getElementById("B10").style.backgroundColor="white";
  
     document.getElementById("C10").style.backgroundColor="white";
  
     document.getElementById("D10").style.backgroundColor="white";
     document.getElementById("E10").style.backgroundColor="white";
     document.getElementById("F10").style.backgroundColor="white";
     document.getElementById("G10").style.backgroundColor="white";
     document.getElementById("H10").style.backgroundColor="white";
     document.getElementById("I10").style.backgroundColor="white";
     document.getElementById("J10").style.backgroundColor="white";
  
     document.getElementById("A9").style.backgroundColor="white";
     document.getElementById("B9").style.backgroundColor="white";
  
     document.getElementById("C9").style.backgroundColor="white";
  
     document.getElementById("D9").style.backgroundColor="white";
     document.getElementById("E9").style.backgroundColor="white";
     document.getElementById("F9").style.backgroundColor="white";
     document.getElementById("G9").style.backgroundColor="white";
     document.getElementById("H9").style.backgroundColor="white";
     document.getElementById("I9").style.backgroundColor="white";
     document.getElementById("J9").style.backgroundColor="white";
  
     document.getElementById("A8").style.backgroundColor="white";
     document.getElementById("B8").style.backgroundColor="white";
  
     document.getElementById("C8").style.backgroundColor="white";
  
     document.getElementById("D8").style.backgroundColor="white";
     document.getElementById("E8").style.backgroundColor="white";
     document.getElementById("F8").style.backgroundColor="white";
     document.getElementById("G8").style.backgroundColor="white";
     document.getElementById("H8").style.backgroundColor="white";
     document.getElementById("I8").style.backgroundColor="white";
     document.getElementById("J8").style.backgroundColor="white";
  
  
     document.getElementById("A7").style.backgroundColor="white";
     document.getElementById("B7").style.backgroundColor="white";
  
     document.getElementById("C7").style.backgroundColor="white";
  
     document.getElementById("D7").style.backgroundColor="white";
     document.getElementById("E7").style.backgroundColor="white";
     document.getElementById("F7").style.backgroundColor="white";
     document.getElementById("G7").style.backgroundColor="white";
     document.getElementById("H7").style.backgroundColor="white";
     document.getElementById("I7").style.backgroundColor="white";
     document.getElementById("J7").style.backgroundColor="white";
  
  
     //localStorage.setItem("BrodoviPrvog",global);
     localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
  
      global.length=0;
      zabranjena.length=0;
      
      
      
     
    }
   }
 if(arr.length==2) {
   gdvapolja--; 

  
   let znak1=arr[0].charAt(0);
   let broj1=arr[0].charAt(1);

   let znak2=arr[1].charAt(0);
   let broj2=arr[1].charAt(1);
   if(arr[0].charAt(2)=="0" || arr[1].charAt(2)=="0" ){//ako su na 10oj koloni

    if(arr[0].charAt(1)==arr[1].charAt(1)){ //brodovi su vertikalno
      let gore=arr[0].charCodeAt(0);
      gore=parseInt(gore);
      gore--;
      gore=String.fromCharCode(gore);
      gore+=10;
      zabranjena.push(gore);

      let dole=arr[1].charCodeAt(0);
      dole=parseInt(dole);
      dole++;
      dole=String.fromCharCode(dole);
      dole+=10;
      zabranjena.push(dole);

      let levigore=arr[0].charAt(0);
      levigore+=9;
      zabranjena.push(levigore);

      let levidole=arr[1].charAt(0);
      levidole+=9;
      zabranjena.push(levidole);
      brodovi();
      //provera
      if(kraj()){
        if(krajPodesavanja){
          //localStorage.setItem("BrodoviDrugog",global);
          localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
          window.location="battleship-game.html";
          return;
        }
        alert("Drugi igrac je na redu!");
        prepravi(); brodovi();
        drugi=true;
        ucitajImena();
       
        
       for (let i = 0; i < global.length; i++) {
        
        if (global[i]=="|") {
          //alert("crta");
          continue;
        }
        document.getElementById(global[i]).style.backgroundColor="white";     
       }
    
       //brisanje kolone 10
    
       document.getElementById("A10").style.backgroundColor="white";
       document.getElementById("B10").style.backgroundColor="white";
    
       document.getElementById("C10").style.backgroundColor="white";
    
       document.getElementById("D10").style.backgroundColor="white";
       document.getElementById("E10").style.backgroundColor="white";
       document.getElementById("F10").style.backgroundColor="white";
       document.getElementById("G10").style.backgroundColor="white";
       document.getElementById("H10").style.backgroundColor="white";
       document.getElementById("I10").style.backgroundColor="white";
       document.getElementById("J10").style.backgroundColor="white";
    
       document.getElementById("A9").style.backgroundColor="white";
       document.getElementById("B9").style.backgroundColor="white";
    
       document.getElementById("C9").style.backgroundColor="white";
    
       document.getElementById("D9").style.backgroundColor="white";
       document.getElementById("E9").style.backgroundColor="white";
       document.getElementById("F9").style.backgroundColor="white";
       document.getElementById("G9").style.backgroundColor="white";
       document.getElementById("H9").style.backgroundColor="white";
       document.getElementById("I9").style.backgroundColor="white";
       document.getElementById("J9").style.backgroundColor="white";
    
       document.getElementById("A8").style.backgroundColor="white";
       document.getElementById("B8").style.backgroundColor="white";
    
       document.getElementById("C8").style.backgroundColor="white";
    
       document.getElementById("D8").style.backgroundColor="white";
       document.getElementById("E8").style.backgroundColor="white";
       document.getElementById("F8").style.backgroundColor="white";
       document.getElementById("G8").style.backgroundColor="white";
       document.getElementById("H8").style.backgroundColor="white";
       document.getElementById("I8").style.backgroundColor="white";
       document.getElementById("J8").style.backgroundColor="white";
    
    
       document.getElementById("A7").style.backgroundColor="white";
       document.getElementById("B7").style.backgroundColor="white";
    
       document.getElementById("C7").style.backgroundColor="white";
    
       document.getElementById("D7").style.backgroundColor="white";
       document.getElementById("E7").style.backgroundColor="white";
       document.getElementById("F7").style.backgroundColor="white";
       document.getElementById("G7").style.backgroundColor="white";
       document.getElementById("H7").style.backgroundColor="white";
       document.getElementById("I7").style.backgroundColor="white";
       document.getElementById("J7").style.backgroundColor="white";
    
    
       //localStorage.setItem("BrodoviPrvog",global);
       localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
    
        global.length=0;
        zabranjena.length=0;
        
        
        
       
      }
        return;
    }
    //brodovi su horizontalno
   
      let krajnjelevo=arr[0].charAt(1);
      krajnjelevo=arr[0].charAt(0)+8;
      zabranjena.push(krajnjelevo);

      let levogore=arr[0].charCodeAt(0);
      levogore=parseInt(levogore);
      levogore--;
      levogore=String.fromCharCode(levogore);
      levogore+=9;
      zabranjena.push(levogore);

      let desnogore=arr[1].charCodeAt(0);
      desnogore=parseInt(desnogore);
      desnogore--;
      desnogore=String.fromCharCode(desnogore);
      desnogore+="10";
      zabranjena.push(desnogore);

      let levodole=arr[0].charCodeAt(0);
      levodole=parseInt(levodole);
      levodole++;
      levodole=String.fromCharCode(levodole);
      levodole+=9;
      zabranjena.push(levodole);

      let desnodole=arr[1].charCodeAt(0);
      desnodole=parseInt(desnodole);
      desnodole++;
      desnodole=String.fromCharCode(desnodole);
      desnodole+="10";
      zabranjena.push(desnodole);
      brodovi();
      //provera
      if(kraj()){
        if(krajPodesavanja){
          //localStorage.setItem("BrodoviDrugog",global);
          localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
          window.location="battleship-game.html";
          return;
        }
        alert("Drugi igrac je na redu!");
        prepravi(); brodovi();
        drugi=true;
        ucitajImena();
       
        
       for (let i = 0; i < global.length; i++) {
        
        if (global[i]=="|") {
          //alert("crta");
          continue;
        }
        document.getElementById(global[i]).style.backgroundColor="white";     
       }
    
       //brisanje kolone 10
    
       document.getElementById("A10").style.backgroundColor="white";
       document.getElementById("B10").style.backgroundColor="white";
    
       document.getElementById("C10").style.backgroundColor="white";
    
       document.getElementById("D10").style.backgroundColor="white";
       document.getElementById("E10").style.backgroundColor="white";
       document.getElementById("F10").style.backgroundColor="white";
       document.getElementById("G10").style.backgroundColor="white";
       document.getElementById("H10").style.backgroundColor="white";
       document.getElementById("I10").style.backgroundColor="white";
       document.getElementById("J10").style.backgroundColor="white";
    
       document.getElementById("A9").style.backgroundColor="white";
       document.getElementById("B9").style.backgroundColor="white";
    
       document.getElementById("C9").style.backgroundColor="white";
    
       document.getElementById("D9").style.backgroundColor="white";
       document.getElementById("E9").style.backgroundColor="white";
       document.getElementById("F9").style.backgroundColor="white";
       document.getElementById("G9").style.backgroundColor="white";
       document.getElementById("H9").style.backgroundColor="white";
       document.getElementById("I9").style.backgroundColor="white";
       document.getElementById("J9").style.backgroundColor="white";
    
       document.getElementById("A8").style.backgroundColor="white";
       document.getElementById("B8").style.backgroundColor="white";
    
       document.getElementById("C8").style.backgroundColor="white";
    
       document.getElementById("D8").style.backgroundColor="white";
       document.getElementById("E8").style.backgroundColor="white";
       document.getElementById("F8").style.backgroundColor="white";
       document.getElementById("G8").style.backgroundColor="white";
       document.getElementById("H8").style.backgroundColor="white";
       document.getElementById("I8").style.backgroundColor="white";
       document.getElementById("J8").style.backgroundColor="white";
    
    
       document.getElementById("A7").style.backgroundColor="white";
       document.getElementById("B7").style.backgroundColor="white";
    
       document.getElementById("C7").style.backgroundColor="white";
    
       document.getElementById("D7").style.backgroundColor="white";
       document.getElementById("E7").style.backgroundColor="white";
       document.getElementById("F7").style.backgroundColor="white";
       document.getElementById("G7").style.backgroundColor="white";
       document.getElementById("H7").style.backgroundColor="white";
       document.getElementById("I7").style.backgroundColor="white";
       document.getElementById("J7").style.backgroundColor="white";
    
    
       //localStorage.setItem("BrodoviPrvog",global);
       localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
    
        global.length=0;
        zabranjena.length=0;
        
        
        
       
      }
    return;
   }  
  //horizontalno
   if(znak1==znak2){
    let levo=znak1;
    let realBroj=parseInt(broj1);
    realBroj--;
    levo+=realBroj;
    
      zabranjena.push(levo);

    let desno=znak1;
    realBroj=parseInt(broj2);
    realBroj++;
    desno+=realBroj;

    zabranjena.push(desno);

    let nmb=arr[0].charCodeAt(0);
    let gl=parseInt(nmb);
    gl--;

    let gorelevi=String.fromCharCode(gl);
    
    gorelevi+=arr[0].charAt(1);
    zabranjena.push(gorelevi);

    let nmb1=arr[0].charCodeAt(0);
    let gl1=parseInt(nmb1);
    gl1++;
    
    let dolelevi=String.fromCharCode(gl1);
    dolelevi+=arr[0].charAt(1);

    zabranjena.push(dolelevi);

    let nmb2=arr[1].charCodeAt(0);
    let gl2=parseInt(nmb2);
    gl2++;
    
    let doledesni=String.fromCharCode(gl2);
    doledesni+=arr[1].charAt(1);

    zabranjena.push(doledesni);


    let nmb3=arr[01].charCodeAt(0);
    let gl3=parseInt(nmb3);
    gl3--;

    let goredesni=String.fromCharCode(gl3);
    
    goredesni+=arr[1].charAt(1);
    zabranjena.push(goredesni);


    brodovi();
    //provera
    if(kraj()){
      if(krajPodesavanja){
        //localStorage.setItem("BrodoviDrugog",global);
        localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
        window.location="battleship-game.html";
        return;
      }
      alert("Drugi igrac je na redu!");
      prepravi(); brodovi();
      drugi=true;
      ucitajImena();
     
      
     for (let i = 0; i < global.length; i++) {
      
      if (global[i]=="|") {
        //alert("crta");
        continue;
      }
      document.getElementById(global[i]).style.backgroundColor="white";     
     }
  
     //brisanje kolone 10
  
     document.getElementById("A10").style.backgroundColor="white";
     document.getElementById("B10").style.backgroundColor="white";
  
     document.getElementById("C10").style.backgroundColor="white";
  
     document.getElementById("D10").style.backgroundColor="white";
     document.getElementById("E10").style.backgroundColor="white";
     document.getElementById("F10").style.backgroundColor="white";
     document.getElementById("G10").style.backgroundColor="white";
     document.getElementById("H10").style.backgroundColor="white";
     document.getElementById("I10").style.backgroundColor="white";
     document.getElementById("J10").style.backgroundColor="white";
  
     document.getElementById("A9").style.backgroundColor="white";
     document.getElementById("B9").style.backgroundColor="white";
  
     document.getElementById("C9").style.backgroundColor="white";
  
     document.getElementById("D9").style.backgroundColor="white";
     document.getElementById("E9").style.backgroundColor="white";
     document.getElementById("F9").style.backgroundColor="white";
     document.getElementById("G9").style.backgroundColor="white";
     document.getElementById("H9").style.backgroundColor="white";
     document.getElementById("I9").style.backgroundColor="white";
     document.getElementById("J9").style.backgroundColor="white";
  
     document.getElementById("A8").style.backgroundColor="white";
     document.getElementById("B8").style.backgroundColor="white";
  
     document.getElementById("C8").style.backgroundColor="white";
  
     document.getElementById("D8").style.backgroundColor="white";
     document.getElementById("E8").style.backgroundColor="white";
     document.getElementById("F8").style.backgroundColor="white";
     document.getElementById("G8").style.backgroundColor="white";
     document.getElementById("H8").style.backgroundColor="white";
     document.getElementById("I8").style.backgroundColor="white";
     document.getElementById("J8").style.backgroundColor="white";
  
  
     document.getElementById("A7").style.backgroundColor="white";
     document.getElementById("B7").style.backgroundColor="white";
  
     document.getElementById("C7").style.backgroundColor="white";
  
     document.getElementById("D7").style.backgroundColor="white";
     document.getElementById("E7").style.backgroundColor="white";
     document.getElementById("F7").style.backgroundColor="white";
     document.getElementById("G7").style.backgroundColor="white";
     document.getElementById("H7").style.backgroundColor="white";
     document.getElementById("I7").style.backgroundColor="white";
     document.getElementById("J7").style.backgroundColor="white";
  
  
     //localStorage.setItem("BrodoviPrvog",global);
     localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
  
      global.length=0;
      zabranjena.length=0;
      
      
      
     
    }

   }
   //vertikalno
   if(broj1==broj2){
    /* if(arr[0].charAt(2)==0){//10

      alert("DESETKA");
      return;
     }*/
     let levo1;
     let nmbr=parseInt(broj1);
     nmbr--;
     levo1=znak1+nmbr;
     zabranjena.push(levo1);

     let levo2;
     let nmbr1=parseInt(broj2);
     nmbr1--;
     levo2=znak2+nmbr1;
     zabranjena.push(levo2);

     let desno1;
     let nmbr2=parseInt(broj1);
     nmbr2++;
     desno1=znak1+nmbr2;
     zabranjena.push(desno1);

     let desno2;
     let nmbr3=parseInt(broj2);
     nmbr3++;
     desno2=znak2+nmbr3;
     zabranjena.push(desno2);

     let gore;
     let znakk=znak1.charCodeAt(0);
     znakk=parseInt(znakk);
     znakk--;
     gore=String.fromCharCode(znakk);
     gore+=broj1;
     zabranjena.push(gore);


     let dole;
     let znakkk=znak2.charCodeAt(0);
     znakkk=parseInt(znakkk);
     znakkk++;
     dole=String.fromCharCode(znakkk);
     dole+=broj2;
     zabranjena.push(dole);

     brodovi();
     //provera
     if(kraj()){
      if(krajPodesavanja){
        //localStorage.setItem("BrodoviDrugog",global);
        localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
        window.location="battleship-game.html";
        return;
      }
      alert("Drugi igrac je na redu!");
      prepravi(); brodovi();
      drugi=true;
      ucitajImena();
     
      
     for (let i = 0; i < global.length; i++) {
      
      if (global[i]=="|") {
        //alert("crta");
        continue;
      }
      document.getElementById(global[i]).style.backgroundColor="white";     
     }
  
     //brisanje kolone 10
  
     document.getElementById("A10").style.backgroundColor="white";
     document.getElementById("B10").style.backgroundColor="white";
  
     document.getElementById("C10").style.backgroundColor="white";
  
     document.getElementById("D10").style.backgroundColor="white";
     document.getElementById("E10").style.backgroundColor="white";
     document.getElementById("F10").style.backgroundColor="white";
     document.getElementById("G10").style.backgroundColor="white";
     document.getElementById("H10").style.backgroundColor="white";
     document.getElementById("I10").style.backgroundColor="white";
     document.getElementById("J10").style.backgroundColor="white";
  
     document.getElementById("A9").style.backgroundColor="white";
     document.getElementById("B9").style.backgroundColor="white";
  
     document.getElementById("C9").style.backgroundColor="white";
  
     document.getElementById("D9").style.backgroundColor="white";
     document.getElementById("E9").style.backgroundColor="white";
     document.getElementById("F9").style.backgroundColor="white";
     document.getElementById("G9").style.backgroundColor="white";
     document.getElementById("H9").style.backgroundColor="white";
     document.getElementById("I9").style.backgroundColor="white";
     document.getElementById("J9").style.backgroundColor="white";
  
     document.getElementById("A8").style.backgroundColor="white";
     document.getElementById("B8").style.backgroundColor="white";
  
     document.getElementById("C8").style.backgroundColor="white";
  
     document.getElementById("D8").style.backgroundColor="white";
     document.getElementById("E8").style.backgroundColor="white";
     document.getElementById("F8").style.backgroundColor="white";
     document.getElementById("G8").style.backgroundColor="white";
     document.getElementById("H8").style.backgroundColor="white";
     document.getElementById("I8").style.backgroundColor="white";
     document.getElementById("J8").style.backgroundColor="white";
  
  
     document.getElementById("A7").style.backgroundColor="white";
     document.getElementById("B7").style.backgroundColor="white";
  
     document.getElementById("C7").style.backgroundColor="white";
  
     document.getElementById("D7").style.backgroundColor="white";
     document.getElementById("E7").style.backgroundColor="white";
     document.getElementById("F7").style.backgroundColor="white";
     document.getElementById("G7").style.backgroundColor="white";
     document.getElementById("H7").style.backgroundColor="white";
     document.getElementById("I7").style.backgroundColor="white";
     document.getElementById("J7").style.backgroundColor="white";
  
  
     //localStorage.setItem("BrodoviPrvog",global);
     localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
  
      global.length=0;
      zabranjena.length=0;
      
      
      
     
    }
   }

  }
 if(arr.length==3) {
   gtripolka--;
   let znak1=arr[0].charAt(0);
   let broj1=arr[0].charAt(1);

   let znak2=arr[1].charAt(0);
   let broj2=arr[1].charAt(1);

   let znak3=arr[2].charAt(0);
   let broj3=arr[2].charAt(1);

   if(arr[0].charAt(2)=="0" || arr[1].charAt(2)=="0"|| arr[1].charAt(2)=="0" ){//kolona 10

    if(arr[0].charAt(2)=="0" && arr[1].charAt(2)=="0" && arr[1].charAt(2)=="0" ){

      let gore=arr[0].charCodeAt(0);
      gore=parseInt(gore);
      gore--;
      gore=String.fromCharCode(gore);
      gore+=10;
      zabranjena.push(gore);

      let dole=arr[2].charCodeAt(0);
      dole=parseInt(dole);
      dole++;
      dole=String.fromCharCode(dole);
      dole+=10;
      zabranjena.push(dole);

      let levigore=arr[0].charAt(0);
      levigore+=9;
      zabranjena.push(levigore);

      let levidole=arr[1].charAt(0);
      levidole+=9;
      zabranjena.push(levidole);

      let leviposl=arr[2].charAt(0);
      leviposl+=9;
      zabranjena.push(leviposl);
      brodovi();
      //provera
      if(kraj()){
        if(krajPodesavanja){
          //localStorage.setItem("BrodoviDrugog",global);
          localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
          window.location="battleship-game.html";
          return;
        }
        alert("Drugi igrac je na redu!");
        prepravi(); brodovi();
        drugi=true;
        ucitajImena();
       
        
       for (let i = 0; i < global.length; i++) {
        
        if (global[i]=="|") {
          //alert("crta");
          continue;
        }
        document.getElementById(global[i]).style.backgroundColor="white";     
       }
    
       //brisanje kolone 10
    
       document.getElementById("A10").style.backgroundColor="white";
       document.getElementById("B10").style.backgroundColor="white";
    
       document.getElementById("C10").style.backgroundColor="white";
    
       document.getElementById("D10").style.backgroundColor="white";
       document.getElementById("E10").style.backgroundColor="white";
       document.getElementById("F10").style.backgroundColor="white";
       document.getElementById("G10").style.backgroundColor="white";
       document.getElementById("H10").style.backgroundColor="white";
       document.getElementById("I10").style.backgroundColor="white";
       document.getElementById("J10").style.backgroundColor="white";
    
       document.getElementById("A9").style.backgroundColor="white";
       document.getElementById("B9").style.backgroundColor="white";
    
       document.getElementById("C9").style.backgroundColor="white";
    
       document.getElementById("D9").style.backgroundColor="white";
       document.getElementById("E9").style.backgroundColor="white";
       document.getElementById("F9").style.backgroundColor="white";
       document.getElementById("G9").style.backgroundColor="white";
       document.getElementById("H9").style.backgroundColor="white";
       document.getElementById("I9").style.backgroundColor="white";
       document.getElementById("J9").style.backgroundColor="white";
    
       document.getElementById("A8").style.backgroundColor="white";
       document.getElementById("B8").style.backgroundColor="white";
    
       document.getElementById("C8").style.backgroundColor="white";
    
       document.getElementById("D8").style.backgroundColor="white";
       document.getElementById("E8").style.backgroundColor="white";
       document.getElementById("F8").style.backgroundColor="white";
       document.getElementById("G8").style.backgroundColor="white";
       document.getElementById("H8").style.backgroundColor="white";
       document.getElementById("I8").style.backgroundColor="white";
       document.getElementById("J8").style.backgroundColor="white";
    
    
       document.getElementById("A7").style.backgroundColor="white";
       document.getElementById("B7").style.backgroundColor="white";
    
       document.getElementById("C7").style.backgroundColor="white";
    
       document.getElementById("D7").style.backgroundColor="white";
       document.getElementById("E7").style.backgroundColor="white";
       document.getElementById("F7").style.backgroundColor="white";
       document.getElementById("G7").style.backgroundColor="white";
       document.getElementById("H7").style.backgroundColor="white";
       document.getElementById("I7").style.backgroundColor="white";
       document.getElementById("J7").style.backgroundColor="white";
    
    
       //localStorage.setItem("BrodoviPrvog",global);
       localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
    
        global.length=0;
        zabranjena.length=0;
        
        
        
       
      }
      return;
    }
    //horizontalno
    let krajnjelevo=arr[0].charAt(1);
      krajnjelevo=arr[0].charAt(0)+7;
      zabranjena.push(krajnjelevo);

      let levogore=arr[0].charCodeAt(0);
      levogore=parseInt(levogore);
      levogore--;
      levogore=String.fromCharCode(levogore);
      levogore+=8;
      zabranjena.push(levogore);

      let desnogore=arr[1].charCodeAt(0);
      desnogore=parseInt(desnogore);
      desnogore--;
      desnogore=String.fromCharCode(desnogore);
      desnogore+=9;
      zabranjena.push(desnogore);

      let desnogore1=arr[2].charCodeAt(0);
      desnogore1=parseInt(desnogore1);
      desnogore1--;
      desnogore1=String.fromCharCode(desnogore1);
      desnogore1+="10";
      zabranjena.push(desnogore1);


      let levodole=arr[0].charCodeAt(0);
      levodole=parseInt(levodole);
      levodole++;
      levodole=String.fromCharCode(levodole);
      levodole+=8;
      zabranjena.push(levodole);

      let desnodole=arr[1].charCodeAt(0);
      desnodole=parseInt(desnodole);
      desnodole++;
      desnodole=String.fromCharCode(desnodole);
      desnodole+=9;
      zabranjena.push(desnodole);

      let desnodole2=arr[2].charCodeAt(0);
      desnodole2=parseInt(desnodole2);
      desnodole2++;
      desnodole2=String.fromCharCode(desnodole2);
      desnodole2+="10";
      zabranjena.push(desnodole2);

      brodovi();
      //provera
      if(kraj()){
        if(krajPodesavanja){
          //localStorage.setItem("BrodoviDrugog",global);
          localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
          window.location="battleship-game.html";
          return;

        }
        alert("Drugi igrac je na redu!");
        prepravi(); brodovi();
        drugi=true;
        ucitajImena();
       
        
       for (let i = 0; i < global.length; i++) {
        
        if (global[i]=="|") {
          //alert("crta");
          continue;
        }
        document.getElementById(global[i]).style.backgroundColor="white";     
       }
    
       //brisanje kolone 10
    
       document.getElementById("A10").style.backgroundColor="white";
       document.getElementById("B10").style.backgroundColor="white";
    
       document.getElementById("C10").style.backgroundColor="white";
    
       document.getElementById("D10").style.backgroundColor="white";
       document.getElementById("E10").style.backgroundColor="white";
       document.getElementById("F10").style.backgroundColor="white";
       document.getElementById("G10").style.backgroundColor="white";
       document.getElementById("H10").style.backgroundColor="white";
       document.getElementById("I10").style.backgroundColor="white";
       document.getElementById("J10").style.backgroundColor="white";
    
       document.getElementById("A9").style.backgroundColor="white";
       document.getElementById("B9").style.backgroundColor="white";
    
       document.getElementById("C9").style.backgroundColor="white";
    
       document.getElementById("D9").style.backgroundColor="white";
       document.getElementById("E9").style.backgroundColor="white";
       document.getElementById("F9").style.backgroundColor="white";
       document.getElementById("G9").style.backgroundColor="white";
       document.getElementById("H9").style.backgroundColor="white";
       document.getElementById("I9").style.backgroundColor="white";
       document.getElementById("J9").style.backgroundColor="white";
    
       document.getElementById("A8").style.backgroundColor="white";
       document.getElementById("B8").style.backgroundColor="white";
    
       document.getElementById("C8").style.backgroundColor="white";
    
       document.getElementById("D8").style.backgroundColor="white";
       document.getElementById("E8").style.backgroundColor="white";
       document.getElementById("F8").style.backgroundColor="white";
       document.getElementById("G8").style.backgroundColor="white";
       document.getElementById("H8").style.backgroundColor="white";
       document.getElementById("I8").style.backgroundColor="white";
       document.getElementById("J8").style.backgroundColor="white";
    
    
       document.getElementById("A7").style.backgroundColor="white";
       document.getElementById("B7").style.backgroundColor="white";
    
       document.getElementById("C7").style.backgroundColor="white";
    
       document.getElementById("D7").style.backgroundColor="white";
       document.getElementById("E7").style.backgroundColor="white";
       document.getElementById("F7").style.backgroundColor="white";
       document.getElementById("G7").style.backgroundColor="white";
       document.getElementById("H7").style.backgroundColor="white";
       document.getElementById("I7").style.backgroundColor="white";
       document.getElementById("J7").style.backgroundColor="white";
    
    
       //localStorage.setItem("BrodoviPrvog",global);
       localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
    
        global.length=0;
        zabranjena.length=0;
        
        
        
       
      }
    return;
   }

  if((znak1==znak2)&&(znak1==znak3)&&(znak2==znak3)){ //horizontalno

    let levo=znak1;
    let realBroj=parseInt(broj1);
    realBroj--;
    levo+=realBroj;
    
      zabranjena.push(levo);

    let desno=znak1;
    realBroj=parseInt(broj3);
    realBroj++;
    desno+=realBroj;

    zabranjena.push(desno);

    let nmb3=arr[0].charCodeAt(0);
    let gl3=parseInt(nmb3);
    gl3--;

    let goredesni1=String.fromCharCode(gl3);
    
    goredesni1+=arr[0].charAt(1);
    zabranjena.push(goredesni1);

    let nmb4=arr[1].charCodeAt(0);
    let gl4=parseInt(nmb4);
    gl4--;

    let goredesni4=String.fromCharCode(gl4);
    
    goredesni4+=arr[1].charAt(1);
    zabranjena.push(goredesni4);


    let nmb5=arr[2].charCodeAt(0);
    let gl5=parseInt(nmb5);
    gl5--;

    let goredesni5=String.fromCharCode(gl5);
    
    goredesni5+=arr[2].charAt(1);
    zabranjena.push(goredesni5);

//apdejt
    let nmb6=arr[0].charCodeAt(0);
    let gl6=parseInt(nmb6);
    gl6++;
    
    let doledesni6=String.fromCharCode(gl6);
    doledesni6+=arr[0].charAt(1);

    zabranjena.push(doledesni6);

//sdadasd
let nmb7=arr[1].charCodeAt(0);
    let gl7=parseInt(nmb7);
    gl7++;
    
    let doledesni7=String.fromCharCode(gl7);
    doledesni7+=arr[1].charAt(1);

    zabranjena.push(doledesni7);
///dsad
let nmb8=arr[2].charCodeAt(0);
    let gl8=parseInt(nmb8);
    gl8++;
    
    let doledesni8=String.fromCharCode(gl8);
    doledesni8+=arr[2].charAt(1);

    zabranjena.push(doledesni8);
    brodovi();
    //provera
    if(kraj()){
      if(krajPodesavanja){
        //localStorage.setItem("BrodoviDrugog",global);
        localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
        window.location="battleship-game.html";
        return;

      }
      alert("Drugi igrac je na redu!");
      prepravi(); brodovi();
      drugi=true;
      ucitajImena();
     
      
     for (let i = 0; i < global.length; i++) {
      
      if (global[i]=="|") {
        //alert("crta");
        continue;
      }
      document.getElementById(global[i]).style.backgroundColor="white";     
     }
  
     //brisanje kolone 10
  
     document.getElementById("A10").style.backgroundColor="white";
     document.getElementById("B10").style.backgroundColor="white";
  
     document.getElementById("C10").style.backgroundColor="white";
  
     document.getElementById("D10").style.backgroundColor="white";
     document.getElementById("E10").style.backgroundColor="white";
     document.getElementById("F10").style.backgroundColor="white";
     document.getElementById("G10").style.backgroundColor="white";
     document.getElementById("H10").style.backgroundColor="white";
     document.getElementById("I10").style.backgroundColor="white";
     document.getElementById("J10").style.backgroundColor="white";
  
     document.getElementById("A9").style.backgroundColor="white";
     document.getElementById("B9").style.backgroundColor="white";
  
     document.getElementById("C9").style.backgroundColor="white";
  
     document.getElementById("D9").style.backgroundColor="white";
     document.getElementById("E9").style.backgroundColor="white";
     document.getElementById("F9").style.backgroundColor="white";
     document.getElementById("G9").style.backgroundColor="white";
     document.getElementById("H9").style.backgroundColor="white";
     document.getElementById("I9").style.backgroundColor="white";
     document.getElementById("J9").style.backgroundColor="white";
  
     document.getElementById("A8").style.backgroundColor="white";
     document.getElementById("B8").style.backgroundColor="white";
  
     document.getElementById("C8").style.backgroundColor="white";
  
     document.getElementById("D8").style.backgroundColor="white";
     document.getElementById("E8").style.backgroundColor="white";
     document.getElementById("F8").style.backgroundColor="white";
     document.getElementById("G8").style.backgroundColor="white";
     document.getElementById("H8").style.backgroundColor="white";
     document.getElementById("I8").style.backgroundColor="white";
     document.getElementById("J8").style.backgroundColor="white";
  
  
     document.getElementById("A7").style.backgroundColor="white";
     document.getElementById("B7").style.backgroundColor="white";
  
     document.getElementById("C7").style.backgroundColor="white";
  
     document.getElementById("D7").style.backgroundColor="white";
     document.getElementById("E7").style.backgroundColor="white";
     document.getElementById("F7").style.backgroundColor="white";
     document.getElementById("G7").style.backgroundColor="white";
     document.getElementById("H7").style.backgroundColor="white";
     document.getElementById("I7").style.backgroundColor="white";
     document.getElementById("J7").style.backgroundColor="white";
  
  
     //localStorage.setItem("BrodoviPrvog",global);
     localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
  
      global.length=0;
      zabranjena.length=0;
      
      
      
     
    }

  }
  else{//vertikalno

    let levo1;
     let nmbr=parseInt(broj1);
     nmbr--;
     levo1=znak1+nmbr;
     zabranjena.push(levo1);

     let levo2;
     let nmbr1=parseInt(broj2);
     nmbr1--;
     levo2=znak2+nmbr1;
     zabranjena.push(levo2);

     let levo3;
     let nmbr10=parseInt(broj3);
     nmbr10--;
     levo3=znak3+nmbr10;
     zabranjena.push(levo3);


     let desno1;
     let nmbr2=parseInt(broj1);
     nmbr2++;
     desno1=znak1+nmbr2;
     zabranjena.push(desno1);

     let desno2;
     let nmbr3=parseInt(broj2);
     nmbr3++;
     desno2=znak2+nmbr3;
     zabranjena.push(desno2);

     let desno3;
     let nmbr30=parseInt(broj3);
     nmbr30++;
     desno3=znak3+nmbr30;
     zabranjena.push(desno3);

     let gore;
     let znakk=znak1.charCodeAt(0);
     znakk=parseInt(znakk);
     znakk--;
     gore=String.fromCharCode(znakk);
     gore+=broj1;
     zabranjena.push(gore);


     let dole;
     let znakkk=znak3.charCodeAt(0);
     znakkk=parseInt(znakkk);
     znakkk++;
     dole=String.fromCharCode(znakkk);
     dole+=broj3;
     zabranjena.push(dole);



     brodovi();
     //provera
     if(kraj()){
      if(krajPodesavanja){
        //localStorage.setItem("BrodoviDrugog",global);
        localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
        window.location="battleship-game.html";
        return;

      }
      alert("Drugi igrac je na redu!");
      prepravi(); brodovi();
      drugi=true;
      ucitajImena();
     
      
     for (let i = 0; i < global.length; i++) {
      
      if (global[i]=="|") {
        //alert("crta");
        continue;
      }
      document.getElementById(global[i]).style.backgroundColor="white";     
     }
  
     //brisanje kolone 10
  
     document.getElementById("A10").style.backgroundColor="white";
     document.getElementById("B10").style.backgroundColor="white";
  
     document.getElementById("C10").style.backgroundColor="white";
  
     document.getElementById("D10").style.backgroundColor="white";
     document.getElementById("E10").style.backgroundColor="white";
     document.getElementById("F10").style.backgroundColor="white";
     document.getElementById("G10").style.backgroundColor="white";
     document.getElementById("H10").style.backgroundColor="white";
     document.getElementById("I10").style.backgroundColor="white";
     document.getElementById("J10").style.backgroundColor="white";
  
     document.getElementById("A9").style.backgroundColor="white";
     document.getElementById("B9").style.backgroundColor="white";
  
     document.getElementById("C9").style.backgroundColor="white";
  
     document.getElementById("D9").style.backgroundColor="white";
     document.getElementById("E9").style.backgroundColor="white";
     document.getElementById("F9").style.backgroundColor="white";
     document.getElementById("G9").style.backgroundColor="white";
     document.getElementById("H9").style.backgroundColor="white";
     document.getElementById("I9").style.backgroundColor="white";
     document.getElementById("J9").style.backgroundColor="white";
  
     document.getElementById("A8").style.backgroundColor="white";
     document.getElementById("B8").style.backgroundColor="white";
  
     document.getElementById("C8").style.backgroundColor="white";
  
     document.getElementById("D8").style.backgroundColor="white";
     document.getElementById("E8").style.backgroundColor="white";
     document.getElementById("F8").style.backgroundColor="white";
     document.getElementById("G8").style.backgroundColor="white";
     document.getElementById("H8").style.backgroundColor="white";
     document.getElementById("I8").style.backgroundColor="white";
     document.getElementById("J8").style.backgroundColor="white";
  
  
     document.getElementById("A7").style.backgroundColor="white";
     document.getElementById("B7").style.backgroundColor="white";
  
     document.getElementById("C7").style.backgroundColor="white";
  
     document.getElementById("D7").style.backgroundColor="white";
     document.getElementById("E7").style.backgroundColor="white";
     document.getElementById("F7").style.backgroundColor="white";
     document.getElementById("G7").style.backgroundColor="white";
     document.getElementById("H7").style.backgroundColor="white";
     document.getElementById("I7").style.backgroundColor="white";
     document.getElementById("J7").style.backgroundColor="white";
  
  
     //localStorage.setItem("BrodoviPrvog",global);
     localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
  
      global.length=0;
      zabranjena.length=0;
      
      
      
     
    }

  }
}
 if(arr.length==4) {
   gcetripolja=0;
   brodovi();

   let znak1=arr[0].charAt(0);
   let broj1=arr[0].charAt(1);

   let znak2=arr[1].charAt(0);
   let broj2=arr[1].charAt(1);

   let znak3=arr[2].charAt(0);
   let broj3=arr[2].charAt(1);

   let znak4=arr[3].charAt(0);
   let broj4=arr[3].charAt(1);

    if(arr[0].charAt(2)=="0" || arr[2].charAt(2)=="0"){//kolona 10
      if(arr[0].charAt(2)=="0" && arr[2].charAt(2)=="0"){//vertikala
          
      let gore=arr[0].charCodeAt(0);
      gore=parseInt(gore);
      gore--;
      gore=String.fromCharCode(gore);
      gore+=10;
      zabranjena.push(gore);

      let dole=arr[3].charCodeAt(0);
      dole=parseInt(dole);
      dole++;
      dole=String.fromCharCode(dole);
      dole+=10;
      zabranjena.push(dole);

      let levigore=arr[0].charAt(0);
      levigore+=9;
      zabranjena.push(levigore);

      let levidole=arr[1].charAt(0);
      levidole+=9;
      zabranjena.push(levidole);

      let leviposl=arr[2].charAt(0);
      leviposl+=9;
      zabranjena.push(leviposl);

      let leviposl1=arr[3].charAt(0);
      leviposl1+=9;
      zabranjena.push(leviposl1);

      brodovi();
      //provera
      if(kraj()){
        if(krajPodesavanja){
          //localStorage.setItem("BrodoviDrugog",global);
          localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
          window.location="battleship-game.html";
          return;
        }
        alert("Drugi igrac je na redu!");
        prepravi(); brodovi();
        drugi=true;
        ucitajImena();
       
        
       for (let i = 0; i < global.length; i++) {
        
        if (global[i]=="|") {
          //alert("crta");
          continue;
        }
        document.getElementById(global[i]).style.backgroundColor="white";     
       }
    
       //brisanje kolone 10
    
       document.getElementById("A10").style.backgroundColor="white";
       document.getElementById("B10").style.backgroundColor="white";
    
       document.getElementById("C10").style.backgroundColor="white";
    
       document.getElementById("D10").style.backgroundColor="white";
       document.getElementById("E10").style.backgroundColor="white";
       document.getElementById("F10").style.backgroundColor="white";
       document.getElementById("G10").style.backgroundColor="white";
       document.getElementById("H10").style.backgroundColor="white";
       document.getElementById("I10").style.backgroundColor="white";
       document.getElementById("J10").style.backgroundColor="white";
    
       document.getElementById("A9").style.backgroundColor="white";
       document.getElementById("B9").style.backgroundColor="white";
    
       document.getElementById("C9").style.backgroundColor="white";
    
       document.getElementById("D9").style.backgroundColor="white";
       document.getElementById("E9").style.backgroundColor="white";
       document.getElementById("F9").style.backgroundColor="white";
       document.getElementById("G9").style.backgroundColor="white";
       document.getElementById("H9").style.backgroundColor="white";
       document.getElementById("I9").style.backgroundColor="white";
       document.getElementById("J9").style.backgroundColor="white";
    
       document.getElementById("A8").style.backgroundColor="white";
       document.getElementById("B8").style.backgroundColor="white";
    
       document.getElementById("C8").style.backgroundColor="white";
    
       document.getElementById("D8").style.backgroundColor="white";
       document.getElementById("E8").style.backgroundColor="white";
       document.getElementById("F8").style.backgroundColor="white";
       document.getElementById("G8").style.backgroundColor="white";
       document.getElementById("H8").style.backgroundColor="white";
       document.getElementById("I8").style.backgroundColor="white";
       document.getElementById("J8").style.backgroundColor="white";
    
    
       document.getElementById("A7").style.backgroundColor="white";
       document.getElementById("B7").style.backgroundColor="white";
    
       document.getElementById("C7").style.backgroundColor="white";
    
       document.getElementById("D7").style.backgroundColor="white";
       document.getElementById("E7").style.backgroundColor="white";
       document.getElementById("F7").style.backgroundColor="white";
       document.getElementById("G7").style.backgroundColor="white";
       document.getElementById("H7").style.backgroundColor="white";
       document.getElementById("I7").style.backgroundColor="white";
       document.getElementById("J7").style.backgroundColor="white";
    
    
       //localStorage.setItem("BrodoviPrvog",global);
       localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
    
        global.length=0;
        zabranjena.length=0;
        
        
        
       
      }

      return;

      }
      //horizontalno
      let krajnjelevo=arr[0].charAt(1);
      krajnjelevo=arr[0].charAt(0)+6;
      zabranjena.push(krajnjelevo);

      let levogore=arr[0].charCodeAt(0);
      levogore=parseInt(levogore);
      levogore--;
      levogore=String.fromCharCode(levogore);
      levogore+=7;
      zabranjena.push(levogore);

      let desnogore=arr[1].charCodeAt(0);
      desnogore=parseInt(desnogore);
      desnogore--;
      desnogore=String.fromCharCode(desnogore);
      desnogore+=8;
      zabranjena.push(desnogore);

      let desnogore1=arr[2].charCodeAt(0);
      desnogore1=parseInt(desnogore1);
      desnogore1--;
      desnogore1=String.fromCharCode(desnogore1);
      desnogore1+=9;
      zabranjena.push(desnogore1);

      let desnogore12=arr[3].charCodeAt(0);
      desnogore12=parseInt(desnogore12);
      desnogore12--;
      desnogore12=String.fromCharCode(desnogore12);
      desnogore12+="10";
      zabranjena.push(desnogore12);


      let levodole=arr[0].charCodeAt(0);
      levodole=parseInt(levodole);
      levodole++;
      levodole=String.fromCharCode(levodole);
      levodole+=7;
      zabranjena.push(levodole);

      let desnodole=arr[1].charCodeAt(0);
      desnodole=parseInt(desnodole);
      desnodole++;
      desnodole=String.fromCharCode(desnodole);
      desnodole+=8;
      zabranjena.push(desnodole);

      let desnodole2=arr[2].charCodeAt(0);
      desnodole2=parseInt(desnodole2);
      desnodole2++;
      desnodole2=String.fromCharCode(desnodole2);
      desnodole2+=9;
      zabranjena.push(desnodole2);

      let desnodole21=arr[2].charCodeAt(0);
      desnodole21=parseInt(desnodole21);
      desnodole21++;
      desnodole21=String.fromCharCode(desnodole21);
      desnodole21+="10";
      zabranjena.push(desnodole21);
      brodovi();
      return;
      //provera
      if(kraj()){
        if(krajPodesavanja){
          //localStorage.setItem("BrodoviDrugog",global);
          localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
          window.location="battleship-game.html";
          return;
        }
        alert("Drugi igrac je na redu!");
        prepravi(); brodovi();
        drugi=true;
        ucitajImena();
       
        
       for (let i = 0; i < global.length; i++) {
        
        if (global[i]=="|") {
          //alert("crta");
          continue;
        }
        document.getElementById(global[i]).style.backgroundColor="white";     
       }
    
       //brisanje kolone 10
    
       document.getElementById("A10").style.backgroundColor="white";
       document.getElementById("B10").style.backgroundColor="white";
    
       document.getElementById("C10").style.backgroundColor="white";
    
       document.getElementById("D10").style.backgroundColor="white";
       document.getElementById("E10").style.backgroundColor="white";
       document.getElementById("F10").style.backgroundColor="white";
       document.getElementById("G10").style.backgroundColor="white";
       document.getElementById("H10").style.backgroundColor="white";
       document.getElementById("I10").style.backgroundColor="white";
       document.getElementById("J10").style.backgroundColor="white";
    
       document.getElementById("A9").style.backgroundColor="white";
       document.getElementById("B9").style.backgroundColor="white";
    
       document.getElementById("C9").style.backgroundColor="white";
    
       document.getElementById("D9").style.backgroundColor="white";
       document.getElementById("E9").style.backgroundColor="white";
       document.getElementById("F9").style.backgroundColor="white";
       document.getElementById("G9").style.backgroundColor="white";
       document.getElementById("H9").style.backgroundColor="white";
       document.getElementById("I9").style.backgroundColor="white";
       document.getElementById("J9").style.backgroundColor="white";
    
       document.getElementById("A8").style.backgroundColor="white";
       document.getElementById("B8").style.backgroundColor="white";
    
       document.getElementById("C8").style.backgroundColor="white";
    
       document.getElementById("D8").style.backgroundColor="white";
       document.getElementById("E8").style.backgroundColor="white";
       document.getElementById("F8").style.backgroundColor="white";
       document.getElementById("G8").style.backgroundColor="white";
       document.getElementById("H8").style.backgroundColor="white";
       document.getElementById("I8").style.backgroundColor="white";
       document.getElementById("J8").style.backgroundColor="white";
    
    
       document.getElementById("A7").style.backgroundColor="white";
       document.getElementById("B7").style.backgroundColor="white";
    
       document.getElementById("C7").style.backgroundColor="white";
    
       document.getElementById("D7").style.backgroundColor="white";
       document.getElementById("E7").style.backgroundColor="white";
       document.getElementById("F7").style.backgroundColor="white";
       document.getElementById("G7").style.backgroundColor="white";
       document.getElementById("H7").style.backgroundColor="white";
       document.getElementById("I7").style.backgroundColor="white";
       document.getElementById("J7").style.backgroundColor="white";
    
    
       //localStorage.setItem("BrodoviPrvog",global);
       localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
    
        global.length=0;
        zabranjena.length=0;
        
        
        
       
      }
   }

   if((znak1==znak2)&&(znak1==znak3)&&(znak1==znak4)&&(znak2==znak3)&&(znak3==znak4)&&(znak3==znak4)){ // horizontalno

    let levo=znak1;
    let realBroj=parseInt(broj1);
    realBroj--;
    levo+=realBroj;
    
      zabranjena.push(levo);

    let desno=znak1;
    realBroj=parseInt(broj4);
    realBroj++;
    desno+=realBroj;

    zabranjena.push(desno);

    let nmb3=arr[0].charCodeAt(0);
    let gl3=parseInt(nmb3);
    gl3--;

    let goredesni1=String.fromCharCode(gl3);
    
    goredesni1+=arr[0].charAt(1);
    zabranjena.push(goredesni1);

    let nmb4=arr[1].charCodeAt(0);
    let gl4=parseInt(nmb4);
    gl4--;

    let goredesni4=String.fromCharCode(gl4);
    
    goredesni4+=arr[1].charAt(1);
    zabranjena.push(goredesni4);


    let nmb5=arr[2].charCodeAt(0);
    let gl5=parseInt(nmb5);
    gl5--;

    let goredesni5=String.fromCharCode(gl5);
    
    goredesni5+=arr[2].charAt(1);
    zabranjena.push(goredesni5);

    let nmb6=arr[3].charCodeAt(0);
    let gl6=parseInt(nmb6);
    gl6--;

    let goredesni6=String.fromCharCode(gl6);
    
    goredesni6+=arr[3].charAt(1);
    zabranjena.push(goredesni6);



    let nmb67=arr[0].charCodeAt(0);
    let gl67=parseInt(nmb6);
    gl67++;
    
    let doledesni67=String.fromCharCode(gl67);
    doledesni67+=arr[0].charAt(1);

    zabranjena.push(doledesni67);


  let nmb7=arr[1].charCodeAt(0);
    let gl7=parseInt(nmb7);
    gl7++;
    
    let doledesni7=String.fromCharCode(gl7);
    doledesni7+=arr[1].charAt(1);

    zabranjena.push(doledesni7);
  ///dsad
  let nmb8=arr[2].charCodeAt(0);
    let gl8=parseInt(nmb8);
    gl8++;
    
    let doledesni8=String.fromCharCode(gl8);
    doledesni8+=arr[2].charAt(1);

    zabranjena.push(doledesni8);



    let nmb9=arr[3].charCodeAt(0);
    let gl9=parseInt(nmb9);
    gl9++;
    
    let doledesni9=String.fromCharCode(gl9);
    doledesni9+=arr[3].charAt(1);

    zabranjena.push(doledesni9);


   }
   else{  //vertikalno

    let levo1;
    let nmbr=parseInt(broj1);
    nmbr--;
    levo1=znak1+nmbr;
    zabranjena.push(levo1);

    let levo2;
    let nmbr1=parseInt(broj2);
    nmbr1--;
    levo2=znak2+nmbr1;
    zabranjena.push(levo2);

    let levo3;
    let nmbr10=parseInt(broj3);
    nmbr10--;
    levo3=znak3+nmbr10;
    zabranjena.push(levo3);

    let levo4;
    let nmbr100=parseInt(broj4);
    nmbr100--;
    levo4=znak4+nmbr100;
    zabranjena.push(levo4);


    let desno1;
    let nmbr2=parseInt(broj1);
    nmbr2++;
    desno1=znak1+nmbr2;
    zabranjena.push(desno1);

    let desno2;
    let nmbr3=parseInt(broj2);
    nmbr3++;
    desno2=znak2+nmbr3;
    zabranjena.push(desno2);

    let desno3;
    let nmbr30=parseInt(broj3);
    nmbr30++;
    desno3=znak3+nmbr30;
    zabranjena.push(desno3);

    let desno4;
    let nmbr300=parseInt(broj4);
    nmbr300++;
    desno4=znak4+nmbr300;
    zabranjena.push(desno4);


    let gore;
    let znakk=znak1.charCodeAt(0);
    znakk=parseInt(znakk);
    znakk--;
    gore=String.fromCharCode(znakk);
    gore+=broj1;
    zabranjena.push(gore);


    let dole;
    let znakkk=znak4.charCodeAt(0);
    znakkk=parseInt(znakkk);
    znakkk++;
    dole=String.fromCharCode(znakkk);
    dole+=broj4;
    zabranjena.push(dole);

    if(kraj()){
      if(krajPodesavanja){
        //localStorage.setItem("BrodoviDrugog",global);
        localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
        window.location="battleship-game.html";
        return;
      }
      alert("Drugi igrac je na redu!");
      prepravi(); brodovi();
      drugi=true;
      ucitajImena();
     
      
     for (let i = 0; i < global.length; i++) {
      
      if (global[i]=="|") {
        //alert("crta");
        continue;
      }
      document.getElementById(global[i]).style.backgroundColor="white";     
     }
  
     //brisanje kolone 10
  
     document.getElementById("A10").style.backgroundColor="white";
     document.getElementById("B10").style.backgroundColor="white";
  
     document.getElementById("C10").style.backgroundColor="white";
  
     document.getElementById("D10").style.backgroundColor="white";
     document.getElementById("E10").style.backgroundColor="white";
     document.getElementById("F10").style.backgroundColor="white";
     document.getElementById("G10").style.backgroundColor="white";
     document.getElementById("H10").style.backgroundColor="white";
     document.getElementById("I10").style.backgroundColor="white";
     document.getElementById("J10").style.backgroundColor="white";
  
     document.getElementById("A9").style.backgroundColor="white";
     document.getElementById("B9").style.backgroundColor="white";
  
     document.getElementById("C9").style.backgroundColor="white";
  
     document.getElementById("D9").style.backgroundColor="white";
     document.getElementById("E9").style.backgroundColor="white";
     document.getElementById("F9").style.backgroundColor="white";
     document.getElementById("G9").style.backgroundColor="white";
     document.getElementById("H9").style.backgroundColor="white";
     document.getElementById("I9").style.backgroundColor="white";
     document.getElementById("J9").style.backgroundColor="white";
  
     document.getElementById("A8").style.backgroundColor="white";
     document.getElementById("B8").style.backgroundColor="white";
  
     document.getElementById("C8").style.backgroundColor="white";
  
     document.getElementById("D8").style.backgroundColor="white";
     document.getElementById("E8").style.backgroundColor="white";
     document.getElementById("F8").style.backgroundColor="white";
     document.getElementById("G8").style.backgroundColor="white";
     document.getElementById("H8").style.backgroundColor="white";
     document.getElementById("I8").style.backgroundColor="white";
     document.getElementById("J8").style.backgroundColor="white";
  
  
     document.getElementById("A7").style.backgroundColor="white";
     document.getElementById("B7").style.backgroundColor="white";
  
     document.getElementById("C7").style.backgroundColor="white";
  
     document.getElementById("D7").style.backgroundColor="white";
     document.getElementById("E7").style.backgroundColor="white";
     document.getElementById("F7").style.backgroundColor="white";
     document.getElementById("G7").style.backgroundColor="white";
     document.getElementById("H7").style.backgroundColor="white";
     document.getElementById("I7").style.backgroundColor="white";
     document.getElementById("J7").style.backgroundColor="white";
  
  
     //localStorage.setItem("BrodoviPrvog",global);
     localStorage.setItem("BrodoviPrvog",JSON.stringify(global));
  
      global.length=0;
      zabranjena.length=0;
      
      
      
     
    }
   }



  }

 brodovi();




  for(let i=0;i<arr.length;i++){
    global.push(arr[i]);

  } 
  global.push("|");




  arr.length=0;
 
  
  if(kraj()){
    if(krajPodesavanja){
      //localStorage.setItem("BrodoviDrugog",global);
      localStorage.setItem("BrodoviDrugog",JSON.stringify(global));
      window.location="battleship-game.html";
      return;
    }
    alert("Drugi igrac je na redu!");
    prepravi(); brodovi();
    drugi=true;
    ucitajImena();
   
    
   for (let i = 0; i < global.length; i++) {
    
    if (global[i]=="|") {
      //alert("crta");
      continue;
    }
    document.getElementById(global[i]).style.backgroundColor="white";     
   }

   //brisanje kolone 10

   document.getElementById("A10").style.backgroundColor="white";
   document.getElementById("B10").style.backgroundColor="white";

   document.getElementById("C10").style.backgroundColor="white";

   document.getElementById("D10").style.backgroundColor="white";
   document.getElementById("E10").style.backgroundColor="white";
   document.getElementById("F10").style.backgroundColor="white";
   document.getElementById("G10").style.backgroundColor="white";
   document.getElementById("H10").style.backgroundColor="white";
   document.getElementById("I10").style.backgroundColor="white";
   document.getElementById("J10").style.backgroundColor="white";

   document.getElementById("A9").style.backgroundColor="white";
   document.getElementById("B9").style.backgroundColor="white";

   document.getElementById("C9").style.backgroundColor="white";

   document.getElementById("D9").style.backgroundColor="white";
   document.getElementById("E9").style.backgroundColor="white";
   document.getElementById("F9").style.backgroundColor="white";
   document.getElementById("G9").style.backgroundColor="white";
   document.getElementById("H9").style.backgroundColor="white";
   document.getElementById("I9").style.backgroundColor="white";
   document.getElementById("J9").style.backgroundColor="white";

   document.getElementById("A8").style.backgroundColor="white";
   document.getElementById("B8").style.backgroundColor="white";

   document.getElementById("C8").style.backgroundColor="white";

   document.getElementById("D8").style.backgroundColor="white";
   document.getElementById("E8").style.backgroundColor="white";
   document.getElementById("F8").style.backgroundColor="white";
   document.getElementById("G8").style.backgroundColor="white";
   document.getElementById("H8").style.backgroundColor="white";
   document.getElementById("I8").style.backgroundColor="white";
   document.getElementById("J8").style.backgroundColor="white";


   document.getElementById("A7").style.backgroundColor="white";
   document.getElementById("B7").style.backgroundColor="white";

   document.getElementById("C7").style.backgroundColor="white";

   document.getElementById("D7").style.backgroundColor="white";
   document.getElementById("E7").style.backgroundColor="white";
   document.getElementById("F7").style.backgroundColor="white";
   document.getElementById("G7").style.backgroundColor="white";
   document.getElementById("H7").style.backgroundColor="white";
   document.getElementById("I7").style.backgroundColor="white";
   document.getElementById("J7").style.backgroundColor="white";


   //localStorage.setItem("BrodoviPrvog",global);
   localStorage.setItem("BrodoviPrvog",JSON.stringify(global));

    global.length=0;
    zabranjena.length=0;
    
    
    
   
  }
}
 
function ispis() {
  alert(global);
}
function ispis2() {
  alert(arr);
}
function kraj() {
  if((gcetripolja+gtripolka+gdvapolja+gjednopolje)==0)
    return true;
    else
    return false;
}
var krajPodesavanja=false;
function prepravi(){
gjednopolje=4; 
gdvapolja=3;
gtripolka=2;
gcetripolja=1;
krajPodesavanja=true;
}

function ispis3() {
  alert(zabranjena);
}

//TRECA STRANICA

function potez() {
  if (drugiIgra==false) {
    let ime=localStorage.getItem("PrviIgrac");
  
    
    document.getElementById('potez').innerHTML = "Na potezu je :  " + " " + ime;
  }
  if(drugiIgra==true){
    let ime=localStorage.getItem("DrugiIgrac");
    
    
    document.getElementById("potez").innerHTML="Na potezu je : "+ime;
  }
}
function pocetak() {
    potez();
    
    ucitajTablu();
    
    
}
var promasaj1=[];
var promasaj2=[];

var pogodjeni1=[];
var pogodjeni2=[];


function ucitajTablu() {
  if(drugiIgra==false){//prvi na potezu


   
    let niz=JSON.parse(localStorage.getItem("BrodoviPrvog"));

  for(var i = 0; i < niz.length; i++) {
    if(niz[i]=="|") continue;
    document.getElementById(niz[i]).style.backgroundColor="darkorange";
    
    }
  }
  else{ //brodovi drugog
      
      let niz=JSON.parse(localStorage.getItem("BrodoviDrugog"));

      for(let i=0;i<niz.length;i++){
        if(niz[i]=="|") continue;
    document.getElementById(niz[i]).style.backgroundColor="darkorange";
      }

  }
} 
function pucaj(clickedElement) {
  
  element=clickedElement.id;

 // ucitajLevuTablu();
  if(drugiIgra==false){ //kad prvi igra

    let realElement=element.charAt(0)+element.charAt(1)+1;
    if(uNizu(realElement,pogodjeni1)){
      alert("Ovde ste vec pogodili!");
      return;
    }
    if(uNizu(realElement,promasaj1)){
      alert("Ovde ste vec promasili!");
      return;
    }
    realElement=element.charAt(0)+element.charAt(1);
    if(uNizu(realElement,DRUGIIGRAC)){
      document.getElementById(element).style.backgroundColor="red";
  
      pogodjeni1.push(element);
      return;
      
    }
    else{
      document.getElementById(element).style.backgroundColor="grey";
   
      promasaj1.push(element);
      
    }
    drugiIgra=true;
  }
  else{ //kad drugi igra

   
    let realElement=element.charAt(0)+element.charAt(1)+1;
    if(uNizu(realElement,pogodjeni2)){
      alert("Ovde ste vec pogodili!");
      return;
    }
    if(uNizu(realElement,promasaj2)){
      alert("Ovde ste vec promasili!");
      return;
    }
    realElement=element.charAt(0)+element.charAt(1);
    if(uNizu(realElement,PRVIIGRAC)){
      document.getElementById(element).style.backgroundColor="red";
    
      pogodjeni2.push(element);
      return;
      
    }
    else{
      document.getElementById(element).style.backgroundColor="grey";
      promasaj2.push(element);
      
    }
    drugiIgra=false;
  }
  
 
  potez();
  ucitajTablu();

  checkWinner();
 obrisilevutablu();
  ucitajLevuTablu();
  farbajDesnu();



  return;
  }
  function ucitajLevuTablu() { //iznad poteza?

   if(drugiIgra==false){//prvi igra

    for (let i = 0; i < pogodjeni1.length; i++) {
        document.getElementById(pogodjeni1[i]).style.backgroundColor="red";
      
    }
    for (let i = 0; i < promasaj1.length; i++) {
          document.getElementById(promasaj1[i]).style.backgroundColor="grey";
      
    }
   }

   if(drugiIgra==true){

    for (let i = 0; i < pogodjeni2.length; i++) {
          document.getElementById(pogodjeni2[i]).style.backgroundColor="red";
    }

    for (let i = 0; i < promasaj2.length; i++) {
          document.getElementById(promasaj2[i]).style.backgroundColor="grey";
    }
   }


    return;
  }
  function checkWinner() {
    if(drugiIgra==false){//prviIgra

      if(PRVIIGRAC.length==pogodjeni1) {
        let winner="Pobednik je ";
        let name=localStorage.getItem("PrviIgrac");

        winner+=name;
        alert(winner);

        return;

      }
      

    }
    else{//drugi igra

      if(DRUGIIGRAC.length==pogodjeni2) {
        let winner="Pobednik je ";
        let name=localStorage.getItem("DrugiIgrac");

        winner+=name;
        alert(winner);

        return;

      }

    }
  }
  function obrisilevutablu() {
    

    for (let i = 0; i < promasaj1.length; i++) {
    let el=promasaj1[i];
    
     document.getElementById(el).style.backgroundColor="white";
      
    }
    for (let i = 0; i < promasaj2.length; i++) {
      let el=promasaj2[i];
      document.getElementById(el).style.backgroundColor="white";
    }
    for (let index = 0; index < pogodjeni1.length; index++) {
      let el=pogodjeni1[index];
     document.getElementById(el).style.backgroundColor="white";
      
    }
    for (let index = 0; index < pogodjeni2.length; index++) {
      let el=pogodjeni2[index];
      document.getElementById(el).style.backgroundColor="white";
       
     }

    return;
  }
  function farbajDesnu() {

  if(drugiIgra==false){//igra prvi

    for (let i = 0; i < pogodjeni1.length; i++) {
        let novi=pogodjeni1[i].charAt(0)+pogodjeni1[i].charAt(1);

      document.getElementById(novi).style.backgroundColor="red";
      
    }

    for (let i = 0; i < promasaj1.length; i++) {
     let novi=promasaj1[i].charAt(0)+promasaj1[i].charAt(1);
     document.getElementById(novi).style.backgroundColor="grey";
    }

  }
  if(drugiIgra==true){

    for (let i = 0; i < pogodjeni2.length; i++) {
      let novi=pogodjeni2[i].charAt(0)+pogodjeni2[i].charAt(1);

    document.getElementById(novi).style.backgroundColor="red";
    
  }

  for (let i = 0; i < promasaj2.length; i++) {
   let novi=promasaj2[i].charAt(0)+promasaj2[i].charAt(1);
   document.getElementById(novi).style.backgroundColor="grey";
  }


  return;

  }
    


  return;
  }
  



var PRVIIGRAC=[];
var DRUGIIGRAC=[];
PRVIIGRAC=JSON.parse(localStorage.getItem("BrodoviPrvog"));
DRUGIIGRAC=JSON.parse(localStorage.getItem("BrodoviDrugog"));
var drugiIgra=false; //flag za redosled ko igra