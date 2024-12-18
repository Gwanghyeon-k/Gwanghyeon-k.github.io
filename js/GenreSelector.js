class GenreSelector {
  constructor(locationCards) {
      this.locationCards = locationCards;
      this.currentGenreIndex = 0;
      this.setupGenreNavigation();
  }

  setupGenreNavigation() {
      const regionsDiv = document.querySelector('.regions');
      this.updateGenreDisplay();
      regionsDiv.addEventListener('click', () => this.cycleGenre());
  }

  cycleGenre() {
      this.currentGenreIndex = (this.currentGenreIndex + 1) % genres.length;
      this.updateGenreDisplay();
      this.locationCards.updateGenre(genres[this.currentGenreIndex].id);
  }

  updateGenreDisplay() {
      const prevIndex = (this.currentGenreIndex - 1 + genres.length) % genres.length;
      const nextIndex = (this.currentGenreIndex + 1) % genres.length;

      const regionsDiv = document.querySelector('.regions');
      regionsDiv.innerHTML = `
          <h2 class="region-fade">${genres[prevIndex].title}</h2>
          <h1>${genres[this.currentGenreIndex].title}</h1>
          <h2 class="region-fade">${genres[nextIndex].title}</h2>
      `;
  }
}