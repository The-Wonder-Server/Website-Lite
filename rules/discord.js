let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]

function dropDown() {
    navbarLinks.classList.toggle('open')
    toggleButton.classList.toggle('open')
}

function twitterRedirect(){
    location.href="https://twitter.com/@TheWonderServer"
}

let rule1 = document.getElementById('1')
let rule2 = document.getElementById('2')
let rule3 = document.getElementById('3')
let rule4 = document.getElementById('4')
let rule5 = document.getElementById('5')
let rule6 = document.getElementById('6')


function openRule1(){
    rule1.classList.toggle('open')
}

function openRule2(){
    rule2.classList.toggle('open')
}

function openRule3(){
    rule3.classList.toggle('open')
}

function openRule4(){
    rule4.classList.toggle('open')
}

function openRule5(){
    rule5.classList.toggle('open')
}
function openRule6(){
    rule6.classList.toggle('open')
}