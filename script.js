document.addEventListener('DOMContentLoaded', () => {
    const dayTitle = document.getElementById('day-title');
    const dayDescription = document.getElementById('day-description');
    const feedback = document.getElementById('feedback');

    const fruits = ['apple', 'banana', 'cherry'];
    const dayData = {
        1: ['apple', 'banana'], // Day 1: Selling apples and bananas
        2: ['banana'],          // Day 2: Selling bananas
        3: []                   // Day 3: Player decides
    };

    let currentDay = 1;

    const fruitImages = document.querySelectorAll('.fruit');
    fruitImages.forEach(image => {
        image.addEventListener('click', () => handleFruitClick(image.id));
    });

    function handleFruitClick(selectedFruit) {
        if (currentDay === 3) {
            const popularFruit = 'banana'; // Based on Day 1 and Day 2
            if (selectedFruit === popularFruit) {
                feedback.textContent = `Great choice! ${selectedFruit} is the most popular fruit!`;
                feedback.style.color = 'green';
            } else {
                feedback.textContent = `Hmm... ${selectedFruit} might not sell as well. Try again!`;
                feedback.style.color = 'red';
            }
        } else {
            feedback.textContent = `Today is Day ${currentDay}, and we are selling ${dayData[currentDay].join(' and ')}.`;
            feedback.style.color = '#333';
        }

        if (currentDay < 3) {
            currentDay++;
            updateDay();
        }
    }

    function updateDay() {
        dayTitle.textContent = `Day ${currentDay}`;
        if (currentDay === 2) {
            dayDescription.textContent = 'Today, the seller is selling one fruit.';
        } else if (currentDay === 3) {
            dayDescription.textContent = 'Help the seller decide what to sell today!';
        }
        feedback.textContent = '';
    }
});


