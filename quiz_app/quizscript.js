const questionSets =[{
                    "Question": "1. India is a federal union comprising twenty-nine states and how many union territories?",
                    "a": "6",
                    "b": "7",
                    "c": "8",
                    "d": "9",
                    "ans": "answer4",
                }, {
                    "Question": "2. Which of the following is the capital of Arunachal Pradesh?",
                    "a": "Itanagar",
                    "b": "Dispur",
                    "c": "Imphal",
                    "d": "Panaji",
                    "ans": "answer1",
                },{
                    "Question": "3. What are the major languages spoken in Andhra Pradesh?",
                    "a": "English and Telugu",
                    "b": "Telugu and Urdu",
                    "c": "Telugu and Kannada",
                    "d": "All of the above languages",
                    "ans": "answer2",
                },{
                    "Question": "4. What is the state flower of Haryana?",
                    "a": "Lotus",
                    "b": "Rhododendron",
                    "c": "Golden Shower",
                    "d": "Not declared",
                    "ans": "answer1",
                }, {
                    "Question": "5. Which of the following states is not located in the North?",
                    "a": "Jharkhand",
                    "b": "Jammu and Kashmir",
                    "c": "Himachal Pradesh",
                    "d": "Haryana",
                    "ans": "answer1",
                }, {
                    "Question": "6. In which state is the main language Khasi?",
                    "a": "Mizoram",
                    "b": "Nagaland",
                    "c": "Meghalaya",
                    "d": "Tripura",
                    "ans": "answer3",
                }, {
                    "Question": "7. Which is the largest coffee producing state of India?",
                    "a": "Kerala",
                    "b": "Tamil Nadu",
                    "c": "Karnataka",
                    "d": "Arunachal Pradesh",
                    "ans": "answer3",
                }, {
                    "Question": "8. Which state has the largest area?",
                    "a": "Maharashtra",
                    "b": "Madhya Pradesh",
                    "c": "Uttar Pradesh",
                    "d": "Rajasthan",
                    "ans": "answer4",
                }, {
                    "Question": "9. Which state has the largest population?",
                    "a": "Uttar Pradesh",
                    "b": "Maharastra",
                    "c": "Bihar",
                    "d": "West Bengal",
                    "ans": "answer1",
                }, {
                    "Question": "10. In what state is the Elephant Falls located?",
                    "a": "Mizoram",
                    "b": "Orissa",
                    "c": "Manipur",
                    "d": "Meghalaya",
                    "ans": "answer4",
                }, ];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answers");

const showscore = document.querySelector("#showscore");

let questioncount = 0;
let score = 0;

const loadQuestion = () => {
    const questionlist = questionSets[questioncount]
    question.innerHTML = questionlist.Question;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}

loadQuestion();

const get_checked_answer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer
};

submit.addEventListener("click", () => {
    const checked_answer = get_checked_answer();
    console.log(checked_answer)
    if(checked_answer === questionSets[questioncount].ans){
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
