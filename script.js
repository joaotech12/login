function conferirLogin(){
    const user = localStorage.getItem('user')
    if (!email) {
        setTimeout(() => {
            window.location = "/login"
        }, 3000);
    }
}