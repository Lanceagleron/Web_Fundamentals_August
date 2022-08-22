function logIn(btn){
    console.log('im clicked');

    if(btn.innerText == "Login"){
        btn.innerText = "Logout";
    }else{
        btn.innerText = "Login";
    }
}

function youLike(){
    alert("Ninja was liked.")
}

function removeButton(btn){
    btn.remove();
}

