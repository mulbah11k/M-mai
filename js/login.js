document.querySelector('.login-button').addEventListener('click', e =>{
    console.log("hes");
    e.preventDefault();
    let loginEmail = document.getElementById('email').value;
    let loginPassword = document.getElementById('password').value;
    
    let userDataString = localStorage.getItem('userData');
    console.log(userDataString);
    
    if (userDataString){
        let userData = JSON.parse(userDataString);
        let sigupEmail = userData.email;
        let sigupassword = userData.password;
        if (loginEmail === sigupEmail && loginPassword === sigupassword){
            location.href = 'dashboard.html';
        }
        else{
            alert("can't login");
        }
    }
    else{
        alert("No account found");
    }
    
})
 