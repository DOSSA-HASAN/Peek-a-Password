let password = document.querySelector('#password');
// let passwordDisplayButton = document.querySelector('#showHidebutton');

let toggleButton = document.querySelector('#showPassword')
// let hidePass = document.querySelector('#hidePassword')

//check input field type password or text:
//before the question make the condition is tested, if its password then the next value after ? is chosen if the value is false the value after : is chosen
function toggleVisibility(){
    password.type = password.type === 'password' ? 'text' : 'password';
    toggleButton.textContent = password.type === 'password'? 'Show' : 'Hide'
}


//longer method
// function displayPassword(){
//     if(password.type = 'password'){
//         password.type = "text";
//     }
//     showPass.style.display = 'none'
//     hidePass.style.display = 'inline-block'
// }

// function hidePassword(){
//     if(password.type = 'text'){
//         password.type = "password";
//         hidePass.style.display = 'none'
//         showPass.style.display = 'inline-block'

//     }
// }