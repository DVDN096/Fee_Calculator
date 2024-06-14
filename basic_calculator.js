
const number= document.getElementsByClassName("Display")[0];

function appendDisplay(input){
    number.value += input;
}
function clearDisplay(){
    number.value = "";
}
function Calculate(){
    try {
        const result = eval(number.value); 
        number.value = result; 
    } catch (error) {
        console.error('Error during calculation:', error);
        number.value = 'Error'; 
    }
}
