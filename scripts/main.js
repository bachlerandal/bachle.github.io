var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/crom.jpg') {
      myImage.setAttribute ('src','images/conan.png');
    } else {
      myImage.setAttribute ('src','images/crom.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my Resume page, ' + myName;
}
setUserName();
//if(!localStorage.getItem('name')) {
//  setUserName();
//} else {
//  var storedName = localStorage.getItem('name');
//  myHeading.textContent = 'Welcome to the Test Page ' + storedName;
//}
myButton.onclick = function() {
  setUserName();
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

