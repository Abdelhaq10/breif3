// function rent(){
// var bookingList = document.getElementsByClassName('cars-list')[0]
// while(bookingList.hasChildNodes()){
//     bookingList.removeChild(bookingList.firstChild)
// }
// updateTotal();
// }
// var type1;
// function deleteResrvation(event)
// {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//     updateTotal();
// }
// function numberJourRent(event)
// {
//     var nbjour=event.target;
//     if(isNaN(nbjour.value) || nbjour.value<=0)
//     {
//         nbjour.value=1;
//     }
//     updateTotal();
// }
// function BookingCars(event)
// {
//     var button = event.target;
//     var rentcar = button.parentElement.parentElement;
//     var typePrice = rentcar.getElementsByClassName('type');
// var arr=Array.from(typePrice);
// var type=rentcar.getElementsByClassName('label');

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i].checked)
//     {
//        var price=arr[i].value; 
//        var type1=type[i].innerText;
//     }
    
// }
 
//     // reserveCar(type, price);
//     // updateTotal();
//     console.log(type1);
//     console.log(price);
// }
// function reserveCar(event)
// {


//     var button = event.target;
//     console.log(button);

//     var rentcar = button.parentElement.parentElement;
//     console.log(rentcar);
//     var typePrice = rentcar.getElementsByClassName('type');
// var arr=Array.from(typePrice);
// var type=rentcar.getElementsByClassName('label');

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i].checked)
//     {
//        var price=arr[i].value; 
//        var type1=type[i].innerText;
//     }
    
// }

// console.log(type1);
// console.log(price);

//     var listCars=document.createElement('div');
//     listCars.classList.add('reservation-block');
//     var rentingCars=document.getElementsByClassName('cars-list')[0];
//     var rentingCarsType=rentingCars.getElementsByClassName('label');
//     // for(let i=0;i<rentingCarsType.length;i++)
//     // {
//     //     if(rentingCarsType[i].innerText==type)
//     //     {
//     //         alert('this item is already booked');
//     //         return;
//     //     }

//     // }
//     var diver=document.createElement('div');
//     diver.innerText=price;
//     diver.classList.add('reservation-title');
    
//     // var listCarsContent = '<div class="reservation-title reservation-type"><span class="reservation-title reservation-type">"/type1"</span></div> <span class="reservation-title reservation-price">${price}</span><div class="reservation-title reservation-nbjour"><input class="nbj" type="number" value="1"><button class="remove" type="button">Remove</button></div>';
//     listCars.appendChild(diver);
//     // listCars.innerHTML=listCarsContent;
//     rentingCars.append(listCars);
//     var total=0;






//     // console.log(price.length);
  
//     // var total=0;
//     var totalContainer=document.getElementsByClassName('cars-list')[0];
//     var carsBooks=totalContainer.getElementsByClassName('reservation-block');
//     for(var i=0;i<carsBooks.length;i++)
//     {
//         var carBook=carsBooks[i];
//         var carPrice=carBook.getElementsByClassName('reservation-title')[0];
//     var priceC=parseFloat(carPrice.innerText.replace('£', ''));
//     total=total+priceC;
//     }
//     total=Math.round(total*100)/100;
//     document.getElementById('tot').innerText=total;
// }





function rentcar(event)
{
      var button = event.target;
    console.log(button);

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
var selectBv = document.getElementById('Bv');
var valueBv =selectBv.options[selectBv.selectedIndex].value;
var selectEngine = document.getElementById('Engine');
var valueEngine =selectEngine.options[selectEngine.selectedIndex].value;
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
//    var nbjourInput=document.createElement('input');
//    nbjourInput.setAttribute("type","number");
//    nbjourInput.setAttribute("value",1);
//    typeNbjour.appendChild(nbjourInput);
var nbjour=document.getElementById('nbjour').value;
    typeNbjour.innerText=nbjour;
    typeNbjour.classList.add('reservation-nbjour');
   typeNbjour.classList.add('reservation-title');
   rentingCars.append(typeNbjour);
   var total=0;
    let parsePrice=parseFloat(price);
    let parseValueBv=parseFloat(valueBv);
    let parseValuEngine=parseFloat(valueEngine);
    
   total+=Math.round((parsePrice + ((parsePrice * parseValueBv) / 100) + ((parsePrice * parseValuEngine) / 100)) * nbjour);
   document.getElementById('tot').innerText=total;
console.log( "boite vitese: " + valueBv);
console.log("engine: " + valueEngine);
console.log("price: " + price);
console.log("type: " + type);

console.log("total : " +total);
}







document.getElementById("btn").addEventListener('click',rentcar);

