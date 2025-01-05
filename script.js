const  dataLowercase='qwertyuiopasdfghjklzxcvbnm';
const dataUppercase='qwertyuiopasdfghjklzxcvbnm.toLowercase()';
const number='0123456789';
const dataSymbole='!@#$%^&*()_+{}:"<>?/,.\/';
const rangeValue=document.getElementById('password-length')
const passwordOutput=document.getElementById('password-output')

function generatePassword(){
    let data=[];
    let password='';
    if(lowercase.checked){
        data.push(...dataLowercase)
    }
    if(uppercase.checked){
        data.push(...dataUppercase)
    }
    if(number.checked){
        data.push(...dataNumber)
    }
    if(symbole.checked){
        data.push(...dataSymbole)
    }
    if(data.length===0){
        alert("veuillz cocher les criteres");
        return;
    }
    for (i=0; i<rangeValue.value; i++){

        password +=(data[Math.floor(Math.random()*data.length)]);
    }
    passwordOutput.value= password;
    passwordOutput.select();
    console.log(password);
    document.execCommand("copy");
    generateButton.textContent='copié';
    setTimeout(()=>{
        generateButton.textContent='Generer mot de passe';
    },2000)
}

 generateButton.addEventListener('click', generatePassword)
   
