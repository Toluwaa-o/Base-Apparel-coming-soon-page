let form = document.getElementById("form")
let errorMessage = document.getElementById("error")
let pic = document.getElementById("error-pic")
let emailInput = document.getElementById("email-input")
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let input = document.getElementById("email-input").value
    let border = document.getElementById("email-input")
    if(input === '') {
        errorMessage.textContent = "Please provide a valid email"
        errorMessage.style.visibility = "visible"
        pic.style.visibility = "visible"
        border.style.border = "2px solid hsl(0, 93%, 68%)"
        setTimeout(function() {
            errorMessage.style.visibility = "hidden"
            pic.style.visibility = "hidden"
            border.style.border = "1px solid hsl(0, 36%, 70%)"
        }, 4000)
        
    } else if(!emailRegex.test(input)) {
        errorMessage.textContent = "Please provide a valid email"
        errorMessage.style.visibility = "visible"
        pic.style.visibility = "visible"
        border.style.border = "2px solid hsl(0, 93%, 68%)"
        setTimeout(function() {
            errorMessage.style.visibility = "hidden"
            pic.style.visibility = "hidden"
            border.style.border = "1px solid hsl(0, 36%, 70%)"
        }, 4000)
        
    }else {
        emailInput.value = '';
        
    }
})
