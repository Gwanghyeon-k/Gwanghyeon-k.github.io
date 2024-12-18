class BackgroundManager {
    constructor(initialBackground) {
        this.backgroundElement = document.getElementById('backgroundImage');
        this.currentBackground = '';
        if (initialBackground) {
            this.setInitialBackground(initialBackground);
        }
    }

    setInitialBackground(imageUrl) {
        this.changeBackground(imageUrl);
    }

    changeBackground(imageUrl) {
        if (this.currentBackground === imageUrl) return;

        const newBackground = document.createElement('div');
        newBackground.className = 'background-image';
        newBackground.style.backgroundImage = `url(${imageUrl})`;
        newBackground.style.opacity = '0';
        newBackground.style.transform = 'scale(1.1) rotate(5deg)';
        newBackground.style.transition = 'opacity 1.2s ease-out, transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)';

        document.querySelector('.background-container').appendChild(newBackground);

        // Trigger reflow
        newBackground.offsetHeight;

        // Fade in and transform new background
        requestAnimationFrame(() => {
            newBackground.style.opacity = '1';
            newBackground.style.transform = 'scale(1) rotate(0deg)';
        });

        // Remove old background after transition
        if (this.backgroundElement) {
            this.backgroundElement.style.opacity = '0';
            this.backgroundElement.style.transform = 'scale(0.9) rotate(-5deg)';
            // setTimeout(() => {
            //     this.backgroundElement.remove();
            // }, 1200);
        }

        this.backgroundElement = newBackground;
        this.currentBackground = imageUrl;
    }
}