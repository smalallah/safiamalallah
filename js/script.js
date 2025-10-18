const correctChoices = ['watermelon', 'apple'];
        let selectedFruits = [];

        function selectFruit(fruit) {
			
			 const fruitElement = document.getElementById(fruit);
             const index = selectedFruits.indexOf(fruit);

	
			
			
            if (selectedFruits.length >= 2) {
                document.getElementById('result').innerText = "You've already selected two fruits! Click Reset to try again.";
                return;
            }

            selectedFruits.push(fruit);
            document.getElementById(fruit).style.border = '3px solid #00b3b3';

            if (selectedFruits.length === 2) {
                evaluateChoices();
            }
        }

        function evaluateChoices() {
            const result = document.getElementById('result');
            if (selectedFruits.includes(correctChoices[0]) && selectedFruits.includes(correctChoices[1])) {
                result.innerText = "Great decision! You're a brilliant data scientist!";
            } else {
                result.innerText = "Think again! Look at the weather, sales trends, and spoilage rates.";
            }
        }

 function resetGame() {
    // Reset the selected fruits array
    selectedFruits = [];

    // Reset visual styles for all fruit options
    const fruitOptions = document.querySelectorAll('.fruit');
    fruitOptions.forEach((fruit) => {
        fruit.style.border = 'none';
    });

    // Clear the result message
    document.getElementById('result').innerText = '';
}
		


//publication
 // Unique JavaScript for this page
        const bibtexEntries = [
            {
                title: "Understanding AI",
                author: "John Doe",
                year: 2023,
                journal: "AI Journal",
                type: "Journal"
            },
            {
                title: "Advances in Machine Learning",
                author: "Jane Smith",
                year: 2022,
                conference: "ICML",
                type: "Conference"
            },
            {
                title: "Data Science in Action",
                author: "Alice Brown",
                year: 2021,
                publisher: "Springer",
                type: "Book"
            },
            {
                title: "AI in Healthcare",
                author: "Michael Lee",
                year: 2020,
                journal: "Healthcare AI",
                type: "Journal"
            }
        ];

        function bibtexRenderBibliography(filteredEntries) {
            const bibliographyList = document.getElementById("bibtex-bibliography");
            bibliographyList.innerHTML = ""; // Clear previous content

            const orderedList = document.createElement("ol");
            orderedList.className = "bibtex-list";
            filteredEntries.forEach(entry => {
                const listItem = document.createElement("li");
                listItem.className = "bibtex-item";
                listItem.innerHTML = `
                    <p>${entry.author}. "${entry.title}," 
                    ${entry.journal ? `<i>${entry.journal}</i>,` : ''}
                    ${entry.conference ? `<i>${entry.conference}</i>,` : ''}
                    ${entry.publisher ? `${entry.publisher},` : ''}
                    ${entry.year}.</p>
                `;
                orderedList.appendChild(listItem);
            });

            bibliographyList.appendChild(orderedList);
        }

        function bibtexApplyFilters() {
            const searchInput = document.getElementById("bibtex-search").value.toLowerCase();
            const filterType = document.getElementById("bibtex-filter-type").value;
            const sortOption = document.getElementById("bibtex-sort").value;

            let filteredEntries = bibtexEntries.filter(entry => {
                const matchesSearch = entry.title.toLowerCase().includes(searchInput) || 
                                      entry.author.toLowerCase().includes(searchInput);
                const matchesType = !filterType || entry.type === filterType;
                return matchesSearch && matchesType;
            });

            if (sortOption === "year-desc") {
                filteredEntries.sort((a, b) => b.year - a.year);
            } else if (sortOption === "year-asc") {
                filteredEntries.sort((a, b) => a.year - b.year);
            }

            bibtexRenderBibliography(filteredEntries);
        }

        // Initial render
        bibtexRenderBibliography(bibtexEntries);