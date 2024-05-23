const email=document.querySelector('#email')
const Name=document.querySelector('#name')
const CNIC=document.querySelector('#CNIC')
const password=document.querySelector('#password')
const form=document.querySelector('#myForm')
const age=document.querySelector('#age')

let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let CnicRegex=/^\d{5}-\d{7}-\d{1}$/
let nameRegex=/^[A-Za-z ]{4,}$/
let passwordRegex =/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
let ageRegex = /^(1[89]|[2-5][0-9]|60)$/


form.addEventListener('submit',function (event) {
    
    event.preventDefault()


    if (nameRegex.test (Name.value)) {
        console.log(Name.value)
    }else{
        alert('name sahi type kro')
    }


    if (emailRegex.test (email.value)) {
        console.log(email.value)  
    }else{
        console.log('email sahi type kro')
    }
    

    if (CnicRegex.test (CNIC.value)) {
        console.log(CNIC.value)     
    }else{
        alert('email sahi type kro  13 letters use kro')
    }

    
    if (age.value >=18 || age.value <=60  & ageRegex.test (age.value)) {
        console.log(age.value)     
    }else{
        alert('you are not eligble (Reqired 18+)')
    }
    
    if(passwordRegex.test (password.value)){
        console.log(password.value)
    }else{
        alert('password sahi type kro')
    }

     
})







    
