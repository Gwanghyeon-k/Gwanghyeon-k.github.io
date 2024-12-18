// js/lp.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. 트랙 리스트 데이터
    const tracks = [
        { number: 1, title: "Starboy (feat. Daft Punk)", duration: "3:50" },
        { number: 2, title: "Party Monster", duration: "4:09" },
        { number: 3, title: "False Alarm", duration: "3:40" },
        { number: 4, title: "Reminder", duration: "3:38" },
        { number: 5, title: "Rockin'", duration: "3:52" },
        { number: 6, title: "Secrets", duration: "4:25" },
        { number: 7, title: "True Colors", duration: "3:26" },
        { number: 8, title: "Stargirl Interlude", duration: "1:51" },
        { number: 9, title: "Sidewalks", duration: "3:51" },
        { number: 10, title: "Six Feet Under", duration: "3:57" },
        { number: 11, title: "Love to Lay", duration: "3:43" },
        { number: 12, title: "A Lonely Night", duration: "3:40" },
        { number: 13, title: "Attention", duration: "3:17" },
        { number: 14, title: "Ordinary Life", duration: "3:41" },
        { number: 15, title: "Nothing Without You", duration: "3:18" },
        { number: 16, title: "All I Know", duration: "5:21" },
        { number: 17, title: "Die For You", duration: "4:20" },
        { number: 18, title: "I Feel It Coming", duration: "4:29" }
    ];

    // 2. 트랙 리스트 표시
    const trackList = document.getElementById('trackList');
    tracks.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.className = 'track';
        trackElement.innerHTML = `
            <span class="track-number">${track.number}</span>
            <div class="track-info">
                <h4>${track.title}</h4>
                <p>${track.duration}</p>
            </div>
        `;
        trackList.appendChild(trackElement);
    });

    // 3. 카드 호버 효과
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.boxShadow = '0 8px 32px rgba(100, 108, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // 4. 트랙 클릭 상호작용
    const trackElements = document.querySelectorAll('.track');
    trackElements.forEach(track => {
        track.addEventListener('click', () => {
            const title = track.querySelector('h4').textContent;
            console.log('Playing:', title);
            // 실제 재생 로직을 여기에 추가
        });
    });

    // 5. 비디오 썸네일 상호작용
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(video => {
        video.addEventListener('click', () => {
            const title = video.querySelector('h4').textContent;
            console.log('Playing video:', title);
            // 실제 비디오 재생 로직을 여기에 추가
        });
    });

    // 6. 메뉴 버튼 기능
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log('Menu clicked');
            // 실제 메뉴 토글 로직을 여기에 추가
        });
    }

    // 7. 검색 기능
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            console.log('Searching for:', e.target.value);
            // 실제 검색 로직을 여기에 추가
        });
    }

    // 8. 구매 버튼 상호작용 (장바구니 관련 코드 이동)
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const product = {
                id: button.dataset.id,
                title: button.dataset.title,
                price: parseFloat(button.dataset.price),
                format: button.dataset.format,
                image: button.dataset.image,
                quantity: 1
            };

            addToCart(product);
            updateCartCount();
            alert(`${product.title}이(가) 장바구니에 추가되었습니다!`);
        });
    });

    // 장바구니에 상품 추가 함수
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // 동일한 상품(포맷)이 이미 카트에 있는지 확인
        const existingProductIndex = cart.findIndex(item => item.id === product.id && item.format === product.format);

        if (existingProductIndex > -1) {
            // 이미 있는 경우 수량 증가
            cart[existingProductIndex].quantity += 1;
        } else {
            // 새로운 상품 추가
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // 장바구니 수량 배지 업데이트 함수는 cartCounter.js에서 관리
});
