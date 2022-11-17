function randomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function roll(){

    let nSides = parseInt(document.querySelector('input[type="radio"][name="nSides"]:checked').value); 

    document.getElementById("secondDice").style.visibility = "hidden";
    document.getElementById("thirdDice").style.visibility = "hidden";

    switch(document.querySelector('input[type="radio"][name="nDice"]:checked').value){
        case "3":
            document.getElementById("thirdDice").style.visibility = "visible";
            document.getElementById("thirdDice").value = randomInt(1,nSides);
        case "2":
            document.getElementById("secondDice").style.visibility = "visible";
            document.getElementById("secondDice").value = randomInt(1,nSides);
        default:
            document.getElementById("firstDice").style.visibility = "visible";
            document.getElementById("firstDice").value = randomInt(1,nSides);
    }
}