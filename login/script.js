function realizarLogin () {
localStorage.setItem("email", 'email@email.com')
const user = {
    email:"email@email.com",
    nome:"teste"
}
}
const userJson = JSON.stringfly(user)
localStorage.setItem("user", userJson)
setTimeout(() => {
     window,location.href = "/" 
}, 3000);
function formLogin() {
 const form = document.querySelector("form")
 form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log('form submit')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')
    console.log(inputEmail.value, inputSenha.value)
    if (inputEmail.value == "admin@email.com" && inputSenha.value == "cyber") {
        localStorage.setItem("email", inputEmail.value)
        const user = {
            email:inputEmail.value,
            nome:inputSenha.value
        
        }
    }
     
                
})}


