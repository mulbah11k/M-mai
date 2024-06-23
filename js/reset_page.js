function closeForm() {
    document.querySelector('.reset-box').style.display = 'none';
}

function returnToLogin() {
    location.href="../html/login.html" 
}
document.getElementById('reset-forms').addEventListener('submit', function(event) {
    event.preventDefault();
    let password = document.getElementById('password');
    let coPassword = document.getElementById('coPassword');
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (password === coPassword){
        userData.password.value = password
    }
    else{

        alert("Password don't match");
    }
});