document.getElementById('loveCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        return;
    }

    const lovePercentage = calculateLovePercentage(name1, name2);
    document.getElementById('percentage').textContent = `${lovePercentage}%`;
    document.getElementById('loyaltyCheck').style.display = 'block';
});

document.getElementById('loyaltyCheck').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answers = [
        document.getElementById('q1').value,
        document.getElementById('q2').value,
        document.getElementById('q3').value,
        document.getElementById('q4').value,
        document.getElementById('q5').value
    ];

    const loyaltyPercentage = calculateLoyaltyPercentage(answers);
    document.getElementById('loyaltyResult').textContent = `Loyalty Percentage: ${loyaltyPercentage}%`;
});

function calculateLovePercentage(name1, name2) {
    // Combine the names and calculate a hash value
    const combinedNames = name1 + name2;
    let hash = 0;
    for (let i = 0; i < combinedNames.length; i++) {
        hash = combinedNames.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Ensure the percentage is between 50 and 95
    const percentage = Math.abs(hash % 46) + 50;
    return percentage;
}

function calculateLoyaltyPercentage(answers) {
    const positiveAnswers = answers.filter(answer => answer === 'yes').length;
    return (positiveAnswers / answers.length) * 100;
}
