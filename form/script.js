let singUp = document.querySelector(".singup");
let singUpBtn = document.querySelector("#singup");
let login = document.querySelector(".login");
let loginBtn = document.querySelector("#login");

loginBtn.onclick = function () {
    singUp.style.display = "none";
    login.style.display = "block";
}

singUpBtn.onclick = function () {
    singUp.style.display = "block";
    login.style.display = "none";
}

let sigBtn = document.querySelector("#btn");
sigBtn.onclick = function () {
    
    document.querySelector(".container").classList.add("showcontainer");
}

let cross = document.querySelector("#cross");
cross.addEventListener("click", closeModel);

function closeModel() {
  
   document.querySelector(".container").classList.remove("showcontainer");
   
}
