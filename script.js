let totalPoints = 0;
let answeredQuestions = 0;
const totalQuestions = 10; // Total number of questions
let answered = new Set(); // Set to track answered question indices

function selectAnswer(button, points, questionIndex) {
    // Highlight selected answer
    const buttons = button.parentNode.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    button.classList.add('selected');

    // Check if the question has already been answered
    if (!answered.has(questionIndex)) {
        totalPoints += points; // Add points only if the question hasn't been answered
        answered.add(questionIndex); // Add question to answered set
        answeredQuestions++;
        updateProgressBar(); // Update the progress bar
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const percentage = (answeredQuestions / totalQuestions) * 100; // Calculate percentage
    progressBar.style.width = percentage + "%"; // Update width of progress bar
}

function calculateResult() {
    if (answeredQuestions < totalQuestions) {
        alert("Please answer all questions before seeing your result!");
        return;
    }

    let resultMessage = "";

    if (totalPoints <= 20) {
        resultMessage = 
            "<strong>Analytical Fields:</strong> You might find your passion in roles that involve research, data analysis, or finance. " +
            "Consider careers like data scientist, financial analyst, or academic researcher, where critical thinking and problem-solving skills are essential.";
    } else if (totalPoints <= 35) {
        resultMessage = 
            "<strong>Creative Paths:</strong> Consider exploring careers in design, marketing, or content creation. " +
            "You thrive in environments that encourage creativity and innovation. Potential roles include graphic designer, digital marketer, or creative director.";
    } else if (totalPoints <= 50) {
        resultMessage = 
            "<strong>Leadership and Social Impact:</strong> You may be suited for roles that involve management, community service, or education. " +
            "Look into careers such as project manager, social worker, or educator, where your ability to inspire and lead can shine.";
    } else {
        resultMessage = 
            "<strong>Innovative Sectors:</strong> Your passion may lie in fields that focus on technology, entrepreneurship, or invention. " +
            "Consider roles such as software developer, entrepreneur, or product manager, where you can drive change and innovate.";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultMessage;
    resultDiv.style.display = "block"; // Show result
}
