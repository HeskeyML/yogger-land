const goldPieces = localStorage.getItem('goldPieces');

if (!goldPieces > 0) {
      goldPieces = 0;
  }

localStorage.setItem('goldPieces', goldPieces);
