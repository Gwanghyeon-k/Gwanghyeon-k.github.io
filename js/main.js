document.addEventListener('DOMContentLoaded', () => {
  const initialBackground = albumsByGenre.top[0].backgroundImage;
  const backgroundManager = new BackgroundManager(initialBackground);
  const locationCards = new LocationCards(backgroundManager);
  const genreSelector = new GenreSelector(locationCards);
});