function efetuarCadastro(){
    const body =document.querySelector("body")
    body.insertAdjacentHTML("beforeend",  `
      <main>
  <form>
    <h1>Cadastro</h1>
    <div> 

        <label for="email"> E-mail</label>
        <input type="email" id="email">

    </div>
  <div>
    <label for="senha"> Senha</label>
    <input type="password" id="senha">
  </div>
   
  <div>
    <label for="senha">Confirmar senha</label>
    <input type="password" id="ConfirmSenha">
  </div>
  <button type="submit">Efetuar cadastro</button>
  
    </form>
  
   </main>`   )
}
efetuarCadastro()

function fazerCadastro(){
  const form = document.querySelector("form")
  form.addEventListener("submit",(event) => {
    event.preventDefault()
  const inputEmail = document.querySelector("#email")
  const inputSenha = document.querySelector("#senha")
   
  const user = {
    email: inputEmail.value,
    senha: inputSenha.value 
  }
  localStorage.setItem("user", JSON.stringify(user))
  location.href = "../login/index.html"
})
}
fazerCadastro()