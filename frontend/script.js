// Asynchronous function to fetch search results based on user input
async function fetchResults() {
    // Get the keyword entered by the user in the input field
    const keyword = document.getElementById('keyword').value;

    // If the keyword is empty, show an alert and exit the function
    if (!keyword) return alert('Please enter a keyword');
    
    // Fetch data from the backend API using the provided keyword
    const response = await fetch(`http://localhost:8080/api/scrape?keyword=${encodeURIComponent(keyword)}`, {
        method: 'GET', // Use the GET method to retrieve data
        headers: {
            'Content-Type': 'application/json' // Specify that the response is expected in JSON format
        }        
    });

    // Parse the response into JSON format
    const data = await response.json();

    // Get the div element where the results will be displayed
    const resultsDiv = document.getElementById('results');

    // Clear any previous search results
    resultsDiv.innerHTML = '';
    
    // If no results are found, display a message and exit the function
    if (data.results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found</p>';
        return;
    }
    
    // Filter out any results where the title is "No title" or the image is missing
    const validResults = data.results.filter(item => item.title !== "No title" && item.image);

    // Loop through the filtered results and create HTML elements for each result
    validResults.forEach(item => {
        // Create a div element to hold the result
        const div = document.createElement('div');
        div.className = 'item'; // Assign a CSS class for styling

        // Set the inner HTML of the div with the result details
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}"> <!-- Display the image -->
            <h3>${item.title}</h3> <!-- Display the title -->
            <p>Rating: ${item.rating}</p> <!-- Display the rating -->
            <p>Reviews: ${item.reviews}</p> <!-- Display the number of reviews -->
        `;

        // Append the newly created div to the results container
        resultsDiv.appendChild(div);
    });
}
