const myModel = document.querySelectorAll('.modal')


async function signup(e) {
    e.preventDefault()
    const email = document.querySelector('#signupEmail')
    const password = document.querySelector('#signupPassword')

    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        await result.user.updateProfile({
            displayName: "User"
        })

        document.getElementById("login_m").innerHTML = "";
        document.getElementById("signup_m").innerHTML = "";

        document.getElementById("loggedin").innerHTML = email.value;
        document.getElementById("log out").innerHTML = "Log out";
        localStorage.setItem("email", email.value)
        console.log(result)

    } catch (err) {
        console.log(err)

    }
    email.value = ""
    password.value = ""

}


async function login(e) {
    e.preventDefault()
    const email = document.querySelector('#loginEmail')
    const password = document.querySelector('#loginPassword')

    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)

        document.getElementById("login_m").innerHTML = "";
        document.getElementById("signup_m").innerHTML = "";

        document.getElementById("loggedin").innerHTML = email.value;
        document.getElementById("log out").innerHTML = "Log out";
        localStorage.setItem("email", email.value)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
    email.value = ""
    password.value = ""
}

function logout() {
    firebase.auth().signOut()
    document.getElementById("loggedin").innerHTML = ""
    document.getElementById("log out").innerHTML = ""
    document.getElementById("login_m").innerHTML = "Login"
    document.getElementById("signup_m").innerHTML = "Register"
    localStorage.removeItem("email");
}


function modify() {
    var a1 = document.getElementById("loggedin").innerHTML
    var a2 = document.getElementById("login_m").innerHTML
    var res = localStorage.getItem("email")
    console.log(a1, a2)

    console.log(res)
    if (res) {

        document.getElementById("login_m").innerHTML = "";
        document.getElementById("signup_m").innerHTML = "";
        document.getElementById("loggedin").innerHTML = res;
        document.getElementById("log out").innerHTML = "Log out";

    } else {
        document.getElementById("login_m").click()

    }
}