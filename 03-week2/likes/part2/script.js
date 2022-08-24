function iLike(num){

    let spanElement = document.querySelector("#"+num);
    console.log(spanElement.innerText)

    let currentCount = spanElement.innerText;

    currentCount++;

    spanElement.innerText = currentCount;
    console.log("you now have " +currentCount +" likes")
}