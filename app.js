// logic to display current year
document.querySelector(".year").innerHTML = new Date().getFullYear()

// logic to show nav
// target the menu btn
const menu_btn = document.querySelector(".menu-btn")
// add click event listener to it
menu_btn.addEventListener("click", show_nav)

// define the show_nav function
function show_nav(){
     
    //    target the nav
  const nav_bar =  document.querySelector("nav")
    //  toggle a class name to it
    nav_bar.classList.toggle("show-nav")

    // toggle a class name to the menu-btn
    menu_btn.classList.toggle("change-menu-bg")

}

// logic to display qr code generated

let api_link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
// target the qr form
const qr_form = document.querySelector("form")

// add submit event to the form
qr_form.addEventListener("submit", generate_qr)

function generate_qr(event){

      event.preventDefault() // prevents the page from reloading
      //  grab the user input
      let user_input = document.querySelector(".user-input").value
      let qr_link = api_link + user_input

      // target the image that will display the qr code generated
      document.querySelector(".qr-image").src = qr_link

      // display the result
      document.querySelector(".result").classList.add("show-result")


}