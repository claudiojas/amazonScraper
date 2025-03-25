async function fetchResults() {
    const keyword = document.getElementById('keyword').value;
    if (!keyword) return alert('Please enter a keyword');
    
    const response = await fetch(`http://localhost:8080/api/scrape?keyword=${encodeURIComponent(keyword)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }        
    });
    const data = await response.json();

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    if (data.results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found</p>';
        return;
    }
    
    const validResults = data.results.filter(item => item.title !== "No title" && item.image);

    validResults.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>Rating: ${item.rating}</p>
            <p>Reviews: ${item.reviews}</p>
        `;
        resultsDiv.appendChild(div);
    });
}


