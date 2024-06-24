/*function closeForm() {
    document.getElementById('signup-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'none';
}

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const firstName = document.getElementById('signup-firstname').value;
    const lastName = document.getElementById('signup-lastname').value;

    if (email && password && firstName && lastName) {
        const user = {
            email,
            password,
            firstName,
            lastName
        };

        localStorage.setItem(email, JSON.stringify(user));
        alert('Signup successful! You can now log in.');
        closeForm();
        document.getElemeclassntById('login-box').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert(`Welcome back, ${user.firstName}!`);
    } else {
        alert('Invalid email or password.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signup-box').style.display = 'block';
});class
let email = document.getElementById('email');
let password = document.getElementById('password');
console.log(password, email);
let user_info {

}
document.addEventListener('click', () => {
    let email = document.getElementById('signup-box').style.display = 'block';
});
*/

document.querySelector('.signup-button').addEventListener('click', e =>{
    e.preventDefault();
    let sigupEmail = document.getElementById('email').value;
    let sigupassword = document.getElementById('password').value;
    let sigupFirstName = document.getElementById('firstName').value;
    let sigupLastName = document.getElementById('lastName').value;
    
    let userData = {
        email: sigupEmail,
        password: sigupassword,
        firstName: sigupFirstName,
        lastName: sigupLastName
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    location.href=`login.html`;
})