const form = document.querySelector('form');
const distance = document.getElementById('distance');
const mpg = document.getElementById('mpg');
const gasPrice = document.getElementById('gas-price');
const gasNeeded = document.getElementById('gas-needed');
const tripCost = document.getElementById('trip-cost');
const errorMessage = document.getElementById('error-msg');

form.addEventListener('submit',(event)=>{
   event.preventDefault(); 
   const distanceEntered = Number(distance.value);
   const vehicleMpg = Number(mpg.value);
   const priceEntered = Number(gasPrice.value);
    if(distanceEntered <= 0){
      errorMessage.textContent = 'Please Enter Valid Distance.';
      gasNeeded.textContent = '';
      tripCost.textContent = '';
      return;
   } else if(vehicleMpg <= 0 ){
      errorMessage.textContent = 'Please Enter Valid Miles Per Gallon.';
      gasNeeded.textContent = '';
      tripCost.textContent = '';
      return;
   } else if(priceEntered <= 0 ){
      errorMessage.textContent = 'Please Enter Valid Gas Price.';
      gasNeeded.textContent = '';
      tripCost.textContent = '';
      return;
   };
   errorMessage.textContent = '';
   const gallonsNeeded = distanceEntered / vehicleMpg;
   const totalTripCost = gallonsNeeded * priceEntered;
   gasNeeded.textContent = `Gallons Needed: ${gallonsNeeded.toFixed(2)}`;
   tripCost.textContent = `Trip Cost: $${totalTripCost.toFixed(2)}`;
  
});






