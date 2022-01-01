function rentcar(event)
{

     var button = event.target;
     console.log("event : "+ button);
    var rentcar = button.parentElement.parentElement;
    console.log(rentcar);
    var typePrice = rentcar.getElementsByClassName('type');
    var arr=Array.from(typePrice);
    var types=rentcar.getElementsByClassName('label');

for(let i=0;i<arr.length;i++)
{
    if(arr[i].checked)
    {
       var price=arr[i].value; 
       var type=types[i].innerText;
    }
}
// get the values of element
var selectBv = document.getElementById('Bv');
var valueBv =selectBv.options[selectBv.selectedIndex].value;
var selectEngine = document.getElementById('Engine');
var valueEngine =selectEngine.options[selectEngine.selectedIndex].value;
//create element to display results
var typeName=document.createElement('span');
var rentingCars=document.querySelector('.cars-list');
typeName.innerText=type;
   typeName.classList.add('reservation-type');
   typeName.classList.add('reservation-title');
   rentingCars.append(typeName);
var typePrice=document.createElement('span');
    typePrice.innerText=price;
    typePrice.classList.add('reservation-price');
   typePrice.classList.add('reservation-title');
   rentingCars.append(typePrice);
     var typeNbjour=document.createElement('span');
    var nbjour=document.getElementById('nbjour').value;
    typeNbjour.innerText=nbjour;
    typeNbjour.classList.add('reservation-nbjour');
   typeNbjour.classList.add('reservation-title');
   rentingCars.append(typeNbjour);
   //calcul total for each reservation
   var total=0;
    let parsePrice=parseFloat(price);
    let parseValueBv=parseFloat(valueBv);
    let parseValuEngine=parseFloat(valueEngine);
    
   total+=Math.round((parsePrice + ((parsePrice * parseValueBv) / 100) + ((parsePrice * parseValuEngine) / 100)) * nbjour);
//display resualt
   var typeTotal=document.createElement('span');
   typeTotal.innerText="£ " + total ;
   typeTotal.classList.add('reservation-totals');
  typeTotal.classList.add('reservation-title');
  rentingCars.append(typeTotal);
  //calcual total for all reservations
     var totals=0;
    var selectedTotal=document.getElementsByClassName("reservation-totals");
    var arrT=Array.from(selectedTotal);
    for(let i=0;i<arrT.length;i++)
{
    var priceC=parseFloat(arrT[i].innerText.replace('£', ''));
    totals+=priceC;
}

   document.getElementById('tot').innerText=totals + "£" ;
   console.log("totals : "+totals);
    console.log( "boite vitese: " + valueBv);
    console.log("engine: " + valueEngine);
    console.log("price: " + price);
    console.log("type: " + type);

console.log("total : " +total);
}
      var clo=document.getElementById("close");
      var menu=document.getElementById("menu");
            clo.addEventListener("click",function(){
                menu.style.display="block";
                document.querySelector(".list").style.display="none";
            });
            var menu=document.getElementById("menu");
            menu.addEventListener("click",function(){
                menu.style.display="none";
                document.querySelector(".list").style.display="flex";
            });
          
            
                function disableGear()
                {
                    var selectgear = document.getElementById("Bv");
                    var text =selectgear.options[selectgear.selectedIndex].text;
                    console.log(text);
                    if(text=='Automatique')
                    {
                        console.log(text);
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=true;
                        document.getElementById("compact").disabled=true;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                    }
                    else if(text=='Manuelle')
                    {
                        console.log( "m"+text);
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=false;
                        document.getElementById("utilitaire").disabled=false;
                        document.getElementById("enginCh").disabled=false;
                        document.getElementById("berline").disabled=true;
                        document.getElementById("camion").disabled=true;
                    }
                    else{
                        document.getElementById("moto").disabled=false;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=false;
                        document.getElementById("utilitaire").disabled=false;
                        document.getElementById("enginCh").disabled=false;
                        document.getElementById("berline").disabled=false;
                        document.getElementById("camion").disabled=false;
                    }
                }
                document.getElementById("btn").addEventListener('click',rentcar);

