class LocationCards {
    constructor(backgroundManager) {
        this.container = document.getElementById('locationCards');
        this.backgroundManager = backgroundManager;
        this.activeCard = null;
        this.currentIndex = 0;
        this.currentGenre = 'top';
        this.render();
        this.setupNavigation();
    }

    updateGenre(genreId) {
        this.currentGenre = genreId;
        this.currentIndex = 0;
        this.render();
        this.handleCardClick(albumsByGenre[this.currentGenre][0]);
    }

    createCard(album, lp) {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.dataset.id = album.id;

        card.innerHTML = `
            <img src="${album.image}" alt="${album.title}" class="card-image">
            <div class="card-overlay"></div>
            <button class="like-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <div class="card-content">
                <h3 class="card-title">${album.title}</h3>
                <div class="album-year">${album.year}</div>
                <div class="rating">
                    ${this.generateRatingStars(album.rating)}
                </div>
            </div>
        `;

        // 단일 클릭 이벤트: 카드 선택
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.like-button')) {
                this.handleCardClick(album);
            }
        });

        // 더블 클릭 이벤트: 상세 정보 페이지로 이동
        card.addEventListener('dblclick', (e) => {
            // 현재 클릭된 카드가 활성화된 카드인지 확인
            if (this.activeCard === card) {
                // 상세 정보 페이지로 이동 (앨범 ID를 쿼리 파라미터로 전달)
                window.location.href = `lp.html?id=${album.id}`;
            }
        });

        return card;
    }

    generateRatingStars(rating) {
        return Array.from({ length: 5 }, (_, i) => 
            `<span class="star ${i < rating ? 'filled' : 'empty'}">★</span>`
        ).join('');
    }

    handleCardClick(album) {
        if (this.activeCard) {
            this.activeCard.classList.remove('active');
        }

        const card = this.container.querySelector(`[data-id="${album.id}"]`);
        card.classList.add('active');
        this.activeCard = card;

        this.backgroundManager.changeBackground(album.backgroundImage);
        this.updatePageIndicator(albumsByGenre[this.currentGenre].findIndex(a => a.id === album.id) + 1);
        
        // 선택된 카드로 스크롤 (부드럽게 중앙에 위치)
        card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }

    setupNavigation() {
        const prevBtn = document.querySelector('.nav-btn.prev');
        const nextBtn = document.querySelector('.nav-btn.next');

        prevBtn.addEventListener('click', () => this.navigate('prev'));
        nextBtn.addEventListener('click', () => this.navigate('next'));

        // 키보드 네비게이션 활성화
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate('prev');
            if (e.key === 'ArrowRight') this.navigate('next');
        });

        // 마우스 휠로 수평 스크롤 활성화
        this.container.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                this.container.scrollLeft += e.deltaY;
            }
        });

        this.updatePageIndicator(1);
    }

    navigate(direction) {
        const totalAlbums = albumsByGenre[this.currentGenre].length;
        
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % totalAlbums;
        } else {
            this.currentIndex = (this.currentIndex - 1 + totalAlbums) % totalAlbums;
        }

        const currentAlbum = albumsByGenre[this.currentGenre][this.currentIndex];
        this.handleCardClick(currentAlbum);
    }

    updatePageIndicator(current) {
        const currentElement = document.querySelector('.page-indicator .current');
        const totalElement = document.querySelector('.page-indicator .total');
        currentElement.textContent = current.toString().padStart(2, '0');
        totalElement.textContent = albumsByGenre[this.currentGenre].length.toString().padStart(2, '0');
    }

    render() {
        this.container.innerHTML = '';
        const albums = albumsByGenre[this.currentGenre];
        
        albums.forEach((album, index) => {
            this.container.appendChild(this.createCard(album, index));
        });

        this.handleCardClick(albums[0]);
    }
}
