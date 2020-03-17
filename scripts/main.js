let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/green-cheek.jpg') {
      myImage.setAttribute ('src','images/green-cheek2.jpg');
    } else {
      myImage.setAttribute ('src','images/green-cheek.jpg');
    }
}
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Conure City ' + myName + '!';
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Conure City ' + storedName + '!';
}
myButton.onclick = function() {
    setUserName();
}
