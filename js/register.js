"use strict";


let button = document.querySelector(".submit")

const numberPattern=/^(([0-9])*$)/;
const emailPattern = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

function validateForm() {
    let firstName =document.forms["myForm"]["firstName"];
    let lastName =document.forms["myForm"]["lastName"];
    let userName =document.forms["myForm"]["userName"];
    let password =document.forms["myForm"]["password"];
    let replacePassword =document.forms["myForm"]["replacePassword"];
    let email =document.forms["myForm"]["email"];
    let mobilePhone =document.forms["myForm"]["mobilePhone"];

    

    if(firstName.value == "" ||lastName.value == "" || userName.value == "" || password.value =="" || replacePassword.value == "" || email.value =="" || mobilePhone.value==""){
       firstName.style.border ="1px solid red";
       lastName.style.border ="1px solid red";
       userName.style.border ="1px solid red";
       password.style.border ="1px solid red";
       replacePassword.style.border ="1px solid red";
       email.style.border ="1px solid red";
       mobilePhone.style.border ="1px solid red";
       console.log(firstName.value);
       return false;
    }   

    if(!email.value.match(emailPattern)) {
        alert("Wrong email")
        email.style.border = "1px solid red"
        return false;
    }
    if(!isNaN(firstName.value)){
        firstName.style.border="1px solid red"
        return false;
    }
    if(!isNaN(lastName.value)){
        lastName.style.border="1px solid red"
        return false;
    }
    if(!isNaN(userName.value)){
        userName.style.border="1px solid red"
        return false;
    }
    if(!mobilePhone.value.match(numberPattern)){
        alert("only number")
        mobilePhone.style.border = "1px solid red";
        return false;
    }
    else{
        firstName.value="";
        lastName.value="";
        userName.value="";
        password.value="";
        replacePassword.value="";
        email.value="";
        mobilePhone.value="";
        alert("Ugurla qebul edildi!!!");
    }
    return false;
}
 