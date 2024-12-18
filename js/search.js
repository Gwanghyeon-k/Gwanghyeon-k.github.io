document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('.search-button');
  const searchOverlay = document.querySelector('.search-overlay');
  const closeSearch = document.querySelector('.close-search');
  const searchInput = document.querySelector('.search-input');

  // 검색 아이콘 클릭 시 검색창 표시
  searchButton.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      searchInput.focus(); // 검색창이 뜨면 자동으로 입력창에 포커스
  });

  // 닫기 버튼 클릭 시 검색창 숨기기
  closeSearch.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
  });

  // ESC 키로 검색창 닫기
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
          searchOverlay.classList.remove('active');
      }
  });

  // 검색창 외부 클릭 시 닫기
  searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
          searchOverlay.classList.remove('active');
      }
  });
});
