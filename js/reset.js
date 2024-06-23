function closeForm() {
    document.querySelector('.reset-box').style.display = 'none';
}

function returnToLogin() {
    location.href="../html/login.html" 
}
document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    let userData = JSON.parse(localStorage.getItem('userData'));
    let sigupEmail = userData.email;

    if (email === sigupEmail){
      location.href='./reset_page.html'
    } 
    else {
        alert('No account found with this email.');
    }
});

