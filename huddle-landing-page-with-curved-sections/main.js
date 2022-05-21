const email_form = document.getElementById("email_form")

email_form.addEventListener("submit",e=>{
    e.preventDefault()
    const email = e.target.input.value.trim();
    const error_text = email_form.querySelector(".error-text")
    if (email === "") {
        error_text.textContent  = "Email is required!"
        return false
    }
    if (!isValidEmail(email)) {
        error_text.textContent = "Email is not valid!"
    } else {
        error_text.textContent = ""
    }
})

function isValidEmail(email){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 
    return regex.test(email.toLowerCase());
}