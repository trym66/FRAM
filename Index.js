

// Side navigasjon
function openNav() {
   const sidenav = document.getElementById("mySidenav");
   const body = document.body;

   if (window.innerWidth <=600){
    sidenav.style.width = "100%";
    body.style.overflow = "hidden";
   }

   else{
    sidenav.style.width = "400px";
    body.style.overflow = "hidden";
   }

   document.querySelector('button').setAttribute('aria-expanded', 'true');

  }
  
  
  function closeNav() {
     const sidenav = document.getElementById("mySidenav");
    const body = document.body;

    sidenav.style.width = "0";
    body.style.overflow = "auto"; 

    document.querySelector('button').setAttribute('aria-expanded', 'false');
  }

  // function redirectHomePage(){
  //   window.location.href = "index.html";
  // }

//////////////////
//handlevogn
////////////////



let cartCount = 0;

// Oppdater handlekurven
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Legg til klikkhendelse for alle knapper med klassen "add-to-cart"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartCount();
    });
});










// document.getElementById().appendChild(document.createElement("div").className="123")




////////////////////
///////////////////
//Form
//////////////////
//////////////////

// Hentet skjema med Const
const form = document.getElementById('userForm')

// Skjema blir sendt inn hvis man trykker på ENTER tasten
form.addEventListener('keydown', function(event){
  if (event.key === 'enter'){
    event.preventDefault();
    form.requestSubmit();
  }
})

form.addEventListener("submit", function(event){
  // event.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;

if (!isValidEmail(emailInputValue)){
  emailInput.value = ''; // Fjerner det brukeren skrev
  emailInput.placeholder = 'Ugyldig e-post';
  emailInput.style.border = '3px solid red';
}

else {
  emailInput.style.border = ''; 
  alert('Skjemaet er sendt!');
  form.sumbit(); // Tømmer skjemaet for input
}


alert(`Navn: ${name}\nE-post: ${email}\nMelding: ${message}`);
form.reset();

});



  

       