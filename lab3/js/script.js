let Points = 0;

shuffleQ1Choices();
function shuffleQ1Choices() {
    let q1choices = ["font-color", "color", "text-color"];

    for (let i of q1choices) {
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i;
        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(radioElement);
        console.log(radioElement);
        document.querySelector("#test").append(labelElement);
    }
}

function Question1() {
    let a = document.querySelector("input[name=q1]:checked").value;
    if (a == "font-color") {
        Points += 20;
        document.querySelector("#test2").style.color = "green";
    }
    else { 
        document.querySelector("#test2").style.color = "red";
    }
}




function Question2() {
    let textBox = document.querySelector("#textbox");
    if (textBox.value == "Paris") {
        Points += 20;
        document.querySelector("#q2").style.color = "green";
        return true;
    }
    document.querySelector("#q2").style.color = "red";
    return false;
}


function question4(){
    let numberElem = document.querySelector("#textSize");
    if (numberElem.value == 48)
    {
        Points += 20;
        document.querySelector("#q4").style.color = "green";
    }
    else document.querySelector("#q4").style.color = "red";
}



function question3(){
    let resp = document.querySelector("#dropdown").value;
    if(resp == "burjkhalifa") {
        Points += 20;
        document.querySelector("#q3").style.color = "green";
        return true;
    }
    document.querySelector("#q3").style.color = "red";
    return false;

}

document.querySelector("button").addEventListener("click", gradeQuiz)

function question5(){
    if(document.querySelector("#checkbox4").checked){
        Points += 20;
        document.querySelector("#q5").style.color = "green";
        return true;
    }
    document.querySelector("#q5").style.color = "red";
    return false;

}

function gradeQuiz() {
    Question1();
    Question2();
    question3();
    question4();
    console.log(Points);
    document.querySelector("button").disabled = true;
    if(Points == 100){
        document.querySelector("#congrats").textContent = "Congrats, You have " + Points + " Points !";
    }
    else{
        document.querySelector("#congrats").textContent = "You failed, You have " + Points + " Points !";

    }
    
    

}

