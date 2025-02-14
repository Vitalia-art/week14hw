let grades = [];

function generateGrades() {
    grades = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);
    displayResults();
}

function displayResults() {
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    document.getElementById('average').textContent = average.toFixed(2);

    const max = Math.max(...grades);
    document.getElementById('max').textContent = max;

    const min = Math.min(...grades);
    document.getElementById('min').textContent = min;

    const positiveCount = grades.filter(grade => grade >= 60).length;
    document.getElementById('positiveCount').textContent = positiveCount;

    const negativeCount = grades.filter(grade => grade < 60).length;
    document.getElementById('negativeCount').textContent = negativeCount;

    const letterGrades = grades.map(grade => {
        if (grade >= 80) return 'A';
        if (grade >= 60) return 'B';
        if (grade >= 40) return 'C';
        if (grade >= 20) return 'D';
        return 'E';
    });

    const letterGradesList = document.getElementById('letterGrades');
    letterGradesList.innerHTML = '';
    letterGrades.forEach(letter => {
        const li = document.createElement('li');
        li.textContent = letter;
        letterGradesList.appendChild(li);
    });
}