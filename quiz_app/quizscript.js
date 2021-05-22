const questionNumber = document.querySelector(".question-number")
const questionText = document.querySelector(".question-text")
const optioncontainer = document.querySelector(".option-container")

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

function setAvailableQuestions(){
    const totalQuestion = question_set.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(question_set[i])
    }
}

function getNewQuestion(){
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + question_set.length
    const questionIndex = availableQuestions[Math.floor(Math.random()*availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;
    const index1= availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1,1);
    const optionLen = currentQuestion.options.length
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }
    optioncontainer.innerHTML = " ";
    let animationDelay = 0.15;
    for(let i=0; i<optionLen; i++){
        const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optonIndex);
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.style.animationDelay = animationDelay + "s";
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optioncontainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)");
    } 
    questionCounter++
}

function getResult(element){
    const id = parseInt(element.id);
    if(id === 0){
        element.classList.add("correct");
    }else{
        element.classList.add("wrong");
        const optionLen = optioncontainer.children.length;
        for(let i=0 ; i<optionLen; i++){
            if(parseInt(optioncontainer.children[i].id) === 0){
                optioncontainer.children[i].classList.add("correct");
            }
        }
    }
    unclickableOptions();
}

function unclickableOptions(){
    const optionLen = optioncontainer.children.length;
    for(let i=0 ; i<optionLen; i++){
        optioncontainer.children[i].classList.add("already-answered");
    }
}

submit.addEventListener("click", () => {
    const id = parseInt(element.id);
    if(id === 0){
        element.classList.add("correct");
        score++;
    };
    questioncount++;
    if(questioncount < questionSets.length){
        loadQuestion();
    }else{
        showscore.innerHTML = `
        <h3> you scored is ${score} out of ${questionSets.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again? </button>
        `;
        showscore.classList.remove("scorearea")
    }
});

window.onload = function(){
    setAvailableQuestions();
    getNewQuestion();
}
