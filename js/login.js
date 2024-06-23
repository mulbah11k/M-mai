document.getElementById('login-button').addEventListener('submit', e =>{
    e.preventDefault();
    let loginEmail = document.getElementById('email').value;
    let loginPassword = document.getElementById('password').value;
    
    let userData = JSON.parse(localStorage.getItem('userData'));
    let sigupEmail = userData.email;
    let sigupassword = userData.password;
    if (loginEmail === sigupEmail && loginPassword === sigupassword){
        location.href = '/html/dashboard.html'
    }
    else{
        alert("can't login")
    }
})
