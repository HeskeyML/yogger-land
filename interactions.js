const gP = localStorage.getItem('goldPieces');

if (!gP > 0) {
      gP = 0;
  }

localStorage.setItem('goldPieces', gP);



const inventoryDisplayParagraph = document.getElementById('inventoryDisplayParagraph');
const inventoryDisplayText = "Gold Pieces: " + goldPieces.toString();
inventoryDisplayParagraph.textContent = displayText;
