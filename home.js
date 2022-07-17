let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]
let headerBg = document.getElementsByClassName('bg1')[0]

function dropDown() {
    navbarLinks.classList.toggle('open')
    toggleButton.classList.toggle('open')
    headerBg.classList.toggle('padding-null')
}

function rulesRedirect() {
    location.href="https://thewonderserver.com/rules"
}

function storeRedirect() {
    location.href="https://store.thewonderserver.com/"
}

function twitterRedirect(){
    location.href="https://twitter.com/@TheWonderServer"
}
