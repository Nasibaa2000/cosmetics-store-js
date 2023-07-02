function toRegistrate () {
    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('userEmail').value;
    let userPass = document.getElementById('userPass').value;
    
    localStorage.setItem('name', userName)
    localStorage.setItem('email', userEmail)
    localStorage.setItem('password', userPass)

    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('password'));
}
 
function toEnter(e) {
    event = e || window.event;
    event.preventDefault()
    
    user_name = localStorage.getItem('name');
    user_email = localStorage.getItem('email');
    user_pass = localStorage.getItem('password');
    let admin_name = "admin";
    let admin_email = "admin";
    let admin_pass = "admin";

    //для пользователя
    let userNameEnter = document.getElementById('userNameEnter').value;
    let userEmailEnter = document.getElementById('userEmailEnter').value;
    let userPassEnter = document.getElementById('userPassEnter').value;

    //для админа
    let adminName = document.getElementById('userNameEnter').value;
    let adminEmail = document.getElementById('userEmailEnter').value;
    let adminPass = document.getElementById('userPassEnter').value;

     if ( userNameEnter == user_name && userEmailEnter == user_email && userPassEnter == user_pass) {
        console.log("до изменения", auth);
       // auth = true;
        console.log("после изменения", auth);
        window.location.href = './index.html';
        closeForm();
        console.log("я зашел!");
    } 

     else if ( adminName == admin_name && adminEmail == admin_email && adminPass == admin_pass ) {
        window.location.href = '../admin/main.html';
        console.log("Админ зашел");
        return false;
    }
     

    else {
        alert("Неверный логин или пароль!");
        console.log("я не зашел");
    }



}
