function realizarLogin(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("afterbegin", `
        <main>
  <form>
    <h1>Login</h1>
    <div> 

        <label for="email"> E-mail</label>
        <input type="email" id="email">

    </div>
  <div>
    <label for="senha"> Senha</label>
    <input type="password" id="senha">
  </div>
   <button type="submit">Login</button>
    <a href="../registro/index.html">Cadastre-se</a>
   </form>


</main>`)
}
realizarLogin()

function efetuarLogin(){
  const form = document.querySelector("form")
  form.addEventListener("submit", (event) => { 
    event.preventDefault()
  })
  const inputEmail = document.querySelector("#email")
  const inputSenha = document.querySelector("#senha")
  
  console.log(inputEmail.value, inputSenha.value)
 const user = JSON.parse(localStorage.getItem("user"))
  
 if (
   inputEmail.value === user.email &&
   inputSenha.value === user.senha
){
 location.href = "../index.html"
}
 
  
 
 


}