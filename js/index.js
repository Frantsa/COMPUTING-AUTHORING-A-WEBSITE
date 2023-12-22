(function () {
    const things = [
        {
            id: 1,
            image: 'img/index/things-to-do/horseriding.jpg',
            title: 'Horse Riding',
            price: '£4',
            description: 'Take a measured romantic horseback riding tour and enjoy our unforgettable picturesque surroundings.'
        },
        {
            id: 2,
            image: 'img/index/things-to-do/rockclimbing.jpg',
            title: 'Rock Climbing',
            price: '£2',
            description: 'Whether you are a professional mountaineer or it’s your first time, Tinto one of the best places for this kind of sport.'
        },
        {
            id: 3,
            image: 'img/index/things-to-do/biking.jpg',
            title: 'Biking',
            price: '£1',
            description: 'Rent a bike and go on a fun and easy two-wheeled journey through the Scottish countryside.'
        },
        {
            id: 4,
            image: 'img/index/things-to-do/rafting.jpg',
            title: 'Rafting',
            price: '£3',
            description: 'You have a perfect choice to combine your river rafting adventure with a visit to the park. Test our waters.'
        },
        {
            id: 5,
            image: 'img/index/things-to-do/fishing.jpg',
            title: 'Fishing',
            price: '£2',
            description: 'With a number of permanent streams and mountain lakes, we offer anglers of all levels a diverse variety of opportunities for fishing.'
        },
        {
            id: 6,
            image: 'img/index/things-to-do/zoo.jpg',
            title: 'Family Zoo',
            price: '£2',
            description: 'A petting zoo is a great way to spend time with our smaller friends.'
        }
    ];

    function renderBlock(things) {
        const thingsContainer = document.querySelector('.things-block');
        for (const thing of things) {
            thingsContainer.innerHTML += `
            <div class="things-card-blocks">
                <img src="${thing.image}" alt="${thing.title}">
                <h2>${thing.title}</h2>
                <h3>${thing.price}/hour</h3>
                <p>${thing.description}</p>
            </div>
            `
        }
    }
    renderBlock(things);
})();