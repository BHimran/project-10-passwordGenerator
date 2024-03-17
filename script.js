let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");


//  sliderValue.textContent=inputSlider.value;
 inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
 })
 genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
 })
 let lowerChase="abcdefghijklmnopqrstuvwxyz";
 let upperChase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 let number="0123456789";
 let sym="~!@#$%^&*";

 function generatePassword(){
    let genPassword="";
    let allChars="";

    allChars+=lowercase.checked ? lowerChase :"";
    allChars+=uppercase.checked ? upperChase :"";
    allChars+=numbers.checked ? number :"";
    allChars+=symbols.checked ? sym :"";
    if(allChars=="" || allChars.length== 0){
        return genPassword;
    }
    let i=1;
    while(i<=inputSlider.value){
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;
 }