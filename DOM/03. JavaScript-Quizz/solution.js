function solve() {
    let correctAnswers = 0;
    let tempIndex = 0;

    Array.from(document
        .querySelectorAll('.quiz-answer'))
        .map(x => x.addEventListener('click', function nextQuestion(e) {

            if (e.target.textContent === "onclick"
                || e.target.textContent === "JSON.stringify()"
                || e.target.textContent === "A programming API for HTML and XML documents") {
                correctAnswers++;
            }
            let currentSections = document.querySelectorAll('section')[tempIndex];
            currentSections.style.display = 'none';
            currentSections.classList.add('hidden');

            let nextSection = document.querySelectorAll('section')[tempIndex + 1];

            if (nextSection) {
                nextSection.classList.remove("hidden");
            } else {
                showResult(correctAnswers);
            }
            nextSection.style.display = "block";
            tempIndex++;

        }));

    function showResult(correctAnswers) {
        document.querySelector("#results").style.display = "block";
        if (correctAnswers === 3) {
            document.querySelector("#results > li > h1").textContent = "You are recognized as top JavaScript fan!";
        } else {
            document.querySelector("#results > li > h1").textContent = `You have ${correctAnswers} right answers`;
        }
    }
}
// function solve() {
//     function solve() {
//         let point = 0;
//         let result = document.getElementById('results');
//         let answers = document.getElementsByTagName('p');
//
//         let section = document.getElementsByTagName('section');
//         section[0].style.display = 'block';
//
//         document.body.addEventListener('click', (e) => {
//
//             if (section[0].style.display === 'block') {
//                 if (e.target === answers[0]) {
//                     point++;
//                 }
//
//                 section[0].style.display = 'none';
//                 section[1].style.display = 'block';
//             } else if (section[1].style.display === 'block') {
//                 if (e.target === answers[3]) {
//                     point++;
//                 }
//
//                 section[1].style.display = 'none';
//                 section[2].style.display = 'block';
//             } else if (section[2].style.display === 'block') {
//                 if (e.target === answers[4]) {
//                     point++;
//                 }
//
//                 section[2].style.display = 'none';
//
//                 (point === 3)
//                     ? result.children[0].children[0].textContent = 'You are recognized as top JavaScript fan!'
//                     : result.children[0].children[0].textContent = `You have ${point} right answers`;
//
//                 result.style.display = 'block';
//             }
//         });
//     }
// }
