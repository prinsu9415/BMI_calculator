const box = document.querySelector(".item");
const button = document.querySelector("button")

button.addEventListener('click', function(evnt) { 
   
//    evnt.defaultPrevented()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const show = document.querySelector('#show');
  

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please Enter a valid Height';
    
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please Enter a valid Weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi <18.5){
         show.innerHTML="Underweight"
        }
        else if(bmi >=18.5 && bmi <25){
            show.innerHTML="Normal"
        }
        else{
            show.innerHTML="Overweight"
        }
    }
});
