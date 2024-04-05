const goldPieces = localStorage.getItem('goldPieces');

if (!goldPieces > 0) {
      goldPieces = 0;
  }

localStorage.setItem('goldPieces', goldPieces);



const inventoryDisplayParagraph = document.getElementById('inventoryDisplayParagraph');
const inventoryDisplayText = "Gold Pieces: " + goldPieces.toString();
inventoryDisplayParagraph.textContent = displayText;
