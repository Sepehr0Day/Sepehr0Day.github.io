function OnclickOpenMenu() {
  document.getElementById("header-nav").style.display = "block";
  document.getElementById("close-menu").style.display = "block";
  document.getElementById("open-menu").style.display = "none";
}

function OnclickCloseMenu() {
  document.getElementById("header-nav").style.display = "none";
  document.getElementById("close-menu").style.display = "none";
  document.getElementById("open-menu").style.display = "block";
}

(function () {
  console.log(localStorage.getItem("dark-mode"));
  if (localStorage.getItem("dark-mode") === "On") {
    document.documentElement.classList.add("dark");
  }
})();

function darkmode() {
  localStorage.setItem("dark-mode", "On");
  document.documentElement.classList.add("dark");
}

function lightmode() {
  localStorage.setItem("dark-mode", "Off");
  document.documentElement.classList.remove("dark");
}


function copyText(elementId) {
  var textToCopy = document.getElementById(elementId).innerText;
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); 
  document.execCommand("copy");

  document.body.removeChild(tempTextArea);

  alert("Text copied to clipboard: " + textToCopy);
}