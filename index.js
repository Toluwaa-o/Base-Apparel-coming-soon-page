let form = document.getElementById("form")
let errorMessage = document.getElementById("error")
let pic = document.getElementById("error-pic")
let button = document.getElementById("email-btn")

button.addEventListener("click", function(e) {
    e.preventDefault()
    let input = document.getElementById("email-input")
    let valid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[hotmail||yahoo||outlook||gmail||icloud]+(?:\.[com]+)*$/;
    
      if (input.value.match(valid)) {
       
        input.value = '';
      } else {
        errorMessage.textContent = "Please provide a valid email"
        errorMessage.style.visibility = "visible"
        pic.style.visibility = "visible"
        input.style.border = "2px solid hsl(0, 93%, 68%)"
        setTimeout(function() {
            errorMessage.style.visibility = "hidden"
            pic.style.visibility = "hidden"
            input.style.border = "1px solid hsl(0, 36%, 70%)"
        }, 3000)
  
      }
    
    })
