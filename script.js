// Define the template for the stats
const statsTemplate = `
    <div class="stat">Gold Coins: <span id="gold-coins">...</span></div>
    <div class="stat">Mana: <span id="mana">...</span></div>
    <div class="stat">Days Exploring: <span id="days-exploring">...</span></div>
`;

// Get the stats container
const statsContainer = document.getElementById('stats-container');

// Populate the stats container with the template
statsContainer.innerHTML = statsTemplate;
