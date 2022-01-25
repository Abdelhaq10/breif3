function rentcar(event)
{

     var button = event.target;
    var rentcar = button.parentElement.parentElement;
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
var nbjour=document.getElementById('nbjour').value;
var selectBv = document.getElementById('Bv');
var valueBv =selectBv.options[selectBv.selectedIndex].value;
var selectEngine = document.getElementById('Engine');
var valueEngine =selectEngine.options[selectEngine.selectedIndex].value;
if(nbjour>=0)
        {
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
    
   
    typeNbjour.innerText=nbjour;


typeNbjour.classList.add('reservation-nbjour');
   typeNbjour.classList.add('reservation-title');
   rentingCars.append(typeNbjour);
   //calcul total for each reservation
   var total=0;
    let parsePrice=parseFloat(price);
    let parseValueBv=parseFloat(valueBv);
    let parseValuEngine=parseFloat(valueEngine);
    
             total+=(parsePrice + ((parsePrice * parseValueBv) / 100) + ((parsePrice * parseValuEngine) / 100)) * nbjour;
     
//display resualt
   var typeTotal=document.createElement('span');
   typeTotal.innerText= total.toFixed(2) ;
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
    document.getElementById('tot').innerText=totals.toFixed(2) + "£" ;
}
   }
    else{
        alert('Something is wrong !!');
    }
   


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
          
            
                function disable()
                {
                    var selectgear = document.getElementById("Bv");
                    var textG =selectgear.options[selectgear.selectedIndex].text;
                    var selectFeul = document.getElementById("Engine");
                    var textF =selectFeul.options[selectFeul.selectedIndex].text;
                    console.log(textG);
                    console.log(textF);
                    if(textG=='Automatique' && textF=='Choose Fuel')
                    {
                      
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=true;
                        document.getElementById("compact").disabled=true;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                    }
                    else if(textG=='Manuelle' && textF=='Choose Fuel')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=false;
                        document.getElementById("utilitaire").disabled=false;
                        document.getElementById("enginCh").disabled=false;
                        document.getElementById("berline").disabled=true;
                        document.getElementById("camion").disabled=true;
                    }
                    if(textF=='Electrique' && textG=='Choose Gearbox')
                    {
                       
                        document.getElementById("moto").disabled=false;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=true;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                        document.getElementById("berline").disabled=true;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Hybrid' && textG=='Choose Gearbox')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=false;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                        document.getElementById("berline").disabled=false;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Essence' && textG=='Choose Gearbox')
                    {
                        
                        document.getElementById("moto").disabled=false;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=false;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=false;
                        document.getElementById("berline").disabled=false;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Diesel' && textG=='Choose Gearbox')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=false;
                        document.getElementById("utilitaire").disabled=false;
                        document.getElementById("enginCh").disabled=false;
                        document.getElementById("berline").disabled=false;
                        document.getElementById("camion").disabled=false;
                    }
                    else if(textF=='Electrique' && textG=='Manuelle')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=true;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                        document.getElementById("berline").disabled=true;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Hybrid' && textG=='Manuelle')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=false;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                        document.getElementById("berline").disabled=true;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Essence' && textG=='Manuelle')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=false;
                        document.getElementById("utilitaire").disabled=false;
                        document.getElementById("enginCh").disabled=false;
                        document.getElementById("berline").disabled=true;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Diesel' && textG=='Manuelle')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=false;
                        document.getElementById("compact").disabled=false;
                        document.getElementById("utilitaire").disabled=false;
                        document.getElementById("enginCh").disabled=false;
                        document.getElementById("berline").disabled=true;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Electrique' && textG=='Automatique')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=true;
                        document.getElementById("compact").disabled=true;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                        document.getElementById("berline").disabled=true;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Hybrid' && textG=='Automatique')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=true;
                        document.getElementById("compact").disabled=true;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                        document.getElementById("berline").disabled=false;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Essence' && textG=='Automatique')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=true;
                        document.getElementById("compact").disabled=true;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                        document.getElementById("berline").disabled=false;
                        document.getElementById("camion").disabled=true;
                    }
                    else if(textF=='Diesel' && textG=='Automatique')
                    {
                        
                        document.getElementById("moto").disabled=true;
                        document.getElementById("citadine").disabled=true;
                        document.getElementById("compact").disabled=true;
                        document.getElementById("utilitaire").disabled=true;
                        document.getElementById("enginCh").disabled=true;
                        document.getElementById("berline").disabled=false;
                        document.getElementById("camion").disabled=false;
                    }
                    else if(textF=='Choose Fuel' && textG=='Choose Gearbox'){
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
                document.querySelector(".rent-btn").addEventListener('click',function(){
                    alert("thanks for working with us");
                })

