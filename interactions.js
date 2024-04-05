let goldPieces = localStorage.getItem('goldPieces');

// If the value is null (doesn't exist), set it to 0
if (goldPieces === null) {
    goldPieces = 0;
}

const inventoryDisplayParagraph = document.getElementById('inventoryDisplayParagraph');
const inventoryDisplayText = "Gold Pieces: " + goldPieces.toString();
inventoryDisplayParagraph.textContent = displayText;
