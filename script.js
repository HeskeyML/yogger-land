document.addEventListener('DOMContentLoaded', function() {
    // Get popup elements
    var inventoryStatsPopup = document.getElementById('inventoryStatsPopup');
    var questsInteractionsPopup = document.getElementById('questsInteractionsPopup');
    var settingsPopup = document.getElementById('settingsPopup');

    // Get close buttons for popups
    var closeButtons = document.querySelectorAll('.popup .close');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.parentNode.style.display = 'none';
        });
    });

    // Get menu items
    var inventoryStatsLink = document.getElementById('inventoryStats');
    var questsInteractionsLink = document.getElementById('questsInteractions');
    var settingsLink = document.getElementById('settings');

    // Add click event listeners to menu items
    inventoryStatsLink.addEventListener('click', function() {
        inventoryStatsPopup.style.display = 'block';
        populateInventoryStats(); // Call function to populate content
    });

    questsInteractionsLink.addEventListener('click', function() {
        questsInteractionsPopup.style.display = 'block';
        populateQuestsInteractions(); // Call function to populate content
    });

    settingsLink.addEventListener('click', function() {
        settingsPopup.style.display = 'block';
        populateSettings(); // Call function to populate content
    });

    // Function to populate Inventory & Stats content (placeholder)
    function populateInventoryStats() {
        // Retrieve values from browser memory and populate content
        var gold = localStorage.getItem('gold') || '0';
        var items = localStorage.getItem('items') || 'None';
        var content = 'Gold: ' + gold + '<br>Items: ' + items;
        document.getElementById('inventoryStatsContent').innerHTML = content;
    }

    // Function to populate Quests & Interactions content (placeholder)
    function populateQuestsInteractions() {
        // Retrieve values from browser memory and populate content
        var questsCompleted = localStorage.getItem('questsCompleted') || '0';
        var interactions = localStorage.getItem('interactions') || 'None';
        var content = 'Quests Completed: ' + questsCompleted + '<br>Interactions: ' + interactions;
        document.getElementById('questsInteractionsContent').innerHTML = content;
    }

    // Function to populate Settings content (placeholder)
    function populateSettings() {
        // Retrieve values from browser memory and populate content
        var theme = localStorage.getItem('theme') || 'Default';
        var language = localStorage.getItem('language') || 'English';
        var content = 'Theme: ' + theme + '<br>Language: ' + language;
        document.getElementById('settingsContent').innerHTML = content;
    }
});
