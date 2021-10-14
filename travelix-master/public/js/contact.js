function fillup() {
    document.getElementById('contact_form_email').value = document.getElementById("loggedin").innerHTML;
}

var addbtn = document.getElementById("form_submit_button")
var i = 0;
addbtn.addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.setItem("counter", i)

    var name = document.getElementById("contact_form_name").value
    var email = document.getElementById('contact_form_email').value
    var subject = document.getElementById('contact_form_subject').value
    var message = document.getElementById('contact_form_message').value
    var a = localStorage.getItem("counter")
    console.log(localStorage.getItem("counter"))
    console.log(name, email, subject, message)
    firebase.database().ref('users/' + a).set({
        "name": name,
        "email": email,
        "subject": subject,
        "message": message
    });
    i += 1
    localStorage.setItem("counter", i)
    console.log(localStorage.getItem("counter"))
})