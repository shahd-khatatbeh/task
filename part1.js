let phone=document.getElementById('user-phone')
let password=document.getElementById('user-pass')
let DOB=document.getElementById('user-dob')
let register=document.getElementById('register-user')
let genPass=document.getElementById('gen-pass')
let isPhoneValid=false
let isPassValid=false
let isDateValid=false
let Alert=document.querySelectorAll('.error-msg')

// validation of phone number
phone.addEventListener("keyup",function(){
    let pattern=/^(059|056)[0-9]{7,7}$/
    if(pattern.test(phone.value)){
        isPhoneValid=true
        if(phone.classList.contains('is-invalid')){
            phone.classList.replace('is-invalid','is-valid')
        }
        else{
        phone.classList.add('is-valid')
        }
        Alert[0].innerHTML=''
    }
    else{
        isPhoneValid=false
        if(phone.classList.contains('is-valid')){
            phone.classList.replace('is-valid','is-invalid')
        }
        else{
        phone.classList.add('is-invalid')
        }
        Alert[0].innerHTML='Invalid phone number'
    }
    if(phone.value==''){
    Alert[0].innerHTML=''
    phone.classList.remove('is-invalid')
    }
    checkInputs()
}) 

//validation of password
password.addEventListener("keyup", function(){
    let pattern1=/^.{8,16}$/
    let pattern2=/[a-z]/
    let pattern3=/[A-Z]/
    let pattern4=/_/
    let pattern5=/[0-9]/
    if(pattern1.test(password.value)&&pattern2.test(password.value)&&pattern3.test(password.value)&&pattern4.test(password.value)&&pattern5.test(password.value)){
        isPassValid=true
        if(password.classList.contains('is-invalid')){
            password.classList.replace('is-invalid','is-valid')
        }
        else{
        password.classList.add('is-valid')
        }
        Alert[1].innerHTML=''
    }
    else{
        isPassValid=false
        if(password.classList.contains('is-valid')){
            password.classList.replace('is-valid','is-invalid')
        }
        else{
        password.classList.add('is-invalid')
        }
        Alert[1].innerHTML= 'Password must contain capital letters, small letters, numbers, and underscore ` _ ` and length between 8 and 16 digits'
    }
    if(password.value==''){
        if(password.classList.contains('is-invalid')){
        password.classList.remove('is-invalid')
        Alert[1].innerHTML=''
    }
        else if(password.classList.contains('is-valid')){
        password.classList.remove('is-valid')
        Alert[1].innerHTML=''
    }
        }
        checkInputs()
        })

//generate random password
function generateRandomPassword(){
    const length = 14;
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    let password = "";
    for(let i=0;i<length;i++){
        const index = Math.floor(Math.random() * charset.length);
        password += charset.charAt(index);
    }
    return password;
}

function validationOfPassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasUnderscore = /_/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber && hasUnderscore;
}

genPass.addEventListener("click",function(){
    let pass;
do {
    pass = generateRandomPassword();
} while (!validationOfPassword(pass))

if(password.classList.contains('is-invalid')){
    password.classList.remove('is-invalid')
    Alert[1].innerHTML=''
}
password.value=pass;
isPassValid=true
password.classList.add('is-valid')
checkInputs()
})

//age>18
if(DOB.value=='2000-01-01'){
    isDateValid=true
    if(DOB.classList.contains('is-invalid')){
        DOB.classList.replace('is-invalid','is-valid')
    }
    else{
    DOB.classList.add('is-valid')
    }
    Alert[2].innerHTML=''
    checkInputs()
}
DOB.addEventListener("keyup",function(){
    const date=new Date(DOB.value)
    const dateNow=new Date()
    let age=dateNow.getFullYear()-date.getFullYear()
    let month=dateNow.getMonth()-date.getMonth()
    console.log(month)
    if (month < 0 ) {
        age--; //  the user hasn't had their birthday yet this year
    }
    if(month === 0 && dateNow.getDate() < date.getDate()){
        age--; //  the user hasn't had their birthday yet this year
    }
    console.log(age)
    if(age>=18){
        isDateValid=true
        if(DOB.classList.contains('is-invalid')){
            DOB.classList.replace('is-invalid','is-valid')
        }
        else{
        DOB.classList.add('is-valid')
        }
        Alert[2].innerHTML=''
    }
    else{
        isDateValid=false
        if(DOB.classList.contains('is-valid')){
            DOB.classList.replace('is-valid','is-invalid')
        }
        else{
        DOB.classList.add('is-invalid')
        }
        Alert[2].innerHTML= 'You must be 18 years old or older to sign-up'
    }
    checkInputs()
}) 

//registration
register.addEventListener("click",function(){
if(isDateValid&&isPassValid&&isPhoneValid){
    clear()
    alert("Successful")
}
})
function clear(){
    password.value=''
    phone.value=''
    DOB.value='2000-01-01'
    isPassValid=false
    isPhoneValid=false 
    password.classList.remove('is-valid')
    phone.classList.remove('is-valid')
    register.setAttribute('disabled','disabled')
}

function checkInputs(){
    if(isDateValid&&isPassValid&&isPhoneValid){
        register.removeAttribute('disabled')
    }
    else{
        register.setAttribute('disabled','disabled')
    }
}




