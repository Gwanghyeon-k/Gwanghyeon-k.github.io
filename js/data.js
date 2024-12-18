const albumsByGenre = {
    top: [
        // NewJeans
        {
            id: 1,
            title: "New Jeans - New Jeans",
            image: "js/image/뉴진스2.jpg",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/7/73/New_Jeans_-_New_Jeans.png",
            year: 2022
        },
        {
            id: 2,
            title: "NewJeans - OMG",
            image: "https://upload.wikimedia.org/wikipedia/en/4/44/New_Jeans_-_OMG.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/4/44/New_Jeans_-_OMG.png",
            year: 2023
        },
        // Charlie Puth
        {
            id: 3,
            title: "Charlie Puth - Voicenotes",
            image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Charlie_Puth_-_Voicenotes.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/Charlie_Puth_-_Voicenotes.png",
            year: 2018
        },
        {
            id: 4,
            title: "Charlie Puth - Nine Track Mind",
            image: "https://upload.wikimedia.org/wikipedia/en/9/96/Charlie_Puth_-_Nine_Track_Mind.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/9/96/Charlie_Puth_-_Nine_Track_Mind.png",
            year: 2016
        },
        // Bruno Mars
        {
            id: 5,
            title: "Bruno Mars - 24K Magic",
            image: "https://upload.wikimedia.org/wikipedia/en/f/f1/Bruno_Mars_-_24K_Magic.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/f/f1/Bruno_Mars_-_24K_Magic.png",
            year: 2016
        },
        {
            id: 6,
            title: "Bruno Mars - Unorthodox Jukebox",
            image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Bruno_Mars_-_Unorthodox_Jukebox.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/5/5d/Bruno_Mars_-_Unorthodox_Jukebox.png",
            year: 2012
        },
        // The Beatles
        {
            id: 7,
            title: "The Beatles - Abbey Road",
            image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
            year: 1969
        },
        {
            id: 8,
            title: "The Beatles - Let It Be",
            image: "https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg",
            year: 1970
        },
        // Billie Eilish
        {
            id: 9,
            title: "Billie Eilish - When We All Fall Asleep, Where Do We Go?",
            image: "https://upload.wikimedia.org/wikipedia/en/5/56/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/5/56/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png",
            year: 2019
        },
        {
            id: 10,
            title: "Billie Eilish - Happier Than Ever",
            image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Happier_Than_Ever_%28Billie_Eilish_album_-_cover_art%29.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/Happier_Than_Ever_%28Billie_Eilish_album_-_cover_art%29.png",
            year: 2021
        }
    ],
    // 다른 장르에 대한 10앨범 배열도 유사하게 추가하세요.
    // 예를 들어, kpop, pop, hiphop 장르에 대해 10앨범씩 추가
    kpop: [
        {
            id: 11,
            title: "BTS - Map of the Soul: 7",
            image: "https://upload.wikimedia.org/wikipedia/en/9/99/BTS_-_Map_of_the_Soul%3A_7.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/9/99/BTS_-_Map_of_the_Soul%3A_7.png",
            year: 2020
        },
        {
            id: 12,
            title: "BLACKPINK - The Album",
            image: "https://upload.wikimedia.org/wikipedia/en/4/44/BLACKPINK_-_The_Album.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/4/44/BLACKPINK_-_The_Album.png",
            year: 2020
        },
        // 추가 K-pop 앨범 정보...
    ],
    pop: [
        {
            id: 21,
            title: "Adele - 30",
            image: "https://upload.wikimedia.org/wikipedia/en/e/e8/Adele_-_30.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/e/e8/Adele_-_30.png",
            year: 2021
        },
        {
            id: 22,
            title: "Taylor Swift - Evermore",
            image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Taylor_Swift_-_Evermore.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/5/5f/Taylor_Swift_-_Evermore.png",
            year: 2020
        },
        // 추가 팝 앨범 정보...
    ],
    hiphop: [
        {
            id: 31,
            title: "Kendrick Lamar - DAMN.",
            image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_DAMN.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_DAMN.png",
            year: 2017
        },
        {
            id: 32,
            title: "Drake - Scorpion",
            image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Drake_-_Scorpion.png",
            rating: 5,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/f/fb/Drake_-_Scorpion.png",
            year: 2018
        },
        // 추가 힙합 앨범 정보...
    ]
};
