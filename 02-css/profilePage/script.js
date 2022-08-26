// console.log("hello!");

function changeName(name){
    // console.log();
    let h1Element = document.querySelector("#"+ name);
    h1Element.innerText = "Lance Agleron";
}

function acceptAsConnection(element){

    let removeThis = document.querySelector("#"+ element);
    removeThis.remove();
}

function rejectConnection(element){
    let removeThis = document.querySelector("#"+ element);
    removeThis.remove();

}

function subtractRequest(element){
    let spanElement = document.querySelector("#"+ element);
    let currentCount = spanElement.innerText;
    currentCount--;
    spanElement.innerText = currentCount;
}

function addConnection(element){
    let spanElement = document.querySelector("#"+ element);
    let currentCount = spanElement.innerText;
    currentCount++;
    spanElement.innerText = currentCount;
}
