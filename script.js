/* click the burger menu */
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})

/* switch light */
const toggleSwitch = document.querySelector('.toggleSwitch')
        toggleSwitch.addEventListener('click', function(){
            document.body.classList.toggle('switch');
        })
