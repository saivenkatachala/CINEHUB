document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        {
            title: 'Devara: Part 1 (2024) Telugu',
            poster: 'dv2.jpg',
            watchLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847060?hash=AgADMh',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847064?hash=AgADTx',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847068?hash=AgADVR'
            },
            downloadLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836122?hash=AgADTx',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836126?hash=AgADTh',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836134?hash=AgADVB'
            }
        },
        {
            title: 'Lucky Baskhar (2024) Telugu  ',
            poster: 'l1.jpg',
            watchLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847005?hash=AgADOR',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847009?hash=AgADKB',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/846999?hash=AgADJB'
            },
            downloadLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/837503?hash=AgADOR',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/837497?hash=AgADKB',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/837507?hash=AgADJB'
            }
        },
        {
            title: 'Vettaiyan (2024) Telugu  ',
            poster: 'vtn.jpg',
            watchLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847072?hash=AgADOx',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847076?hash=AgADgR',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847080?hash=AgADfB'
            },
            downloadLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836142?hash=AgADgR',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836146?hash=AgADfB',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836152?hash=AgADdx'
            }
        },
        {
            title: 'ARM (2024) Telugu  ',
            poster: 'arm.avif',
            watchLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847052?hash=AgADMx',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847058?hash=AgADYB',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847054?hash=AgADYh'
            },
            downloadLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836112?hash=AgADaB',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836102?hash=AgADYB',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836108?hash=AgADYh'
            }
        },
        {
            title: 'Amaran (2024) Telugu  ',
            poster: 'AMARAN.jpg',
            watchLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847036?hash=AgADyB',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847040?hash=AgADxx',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/847044?hash=AgADwx'
            },
            downloadLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/805064?hash=AgADyB',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/805036?hash=AgADxx',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/805060?hash=AgADwx'
            }
        }
        // Add more movies here
    ];

    const movieList = document.getElementById('movie-list');

    function displayMovies(movieArray) {
        movieList.innerHTML = '';
        movieArray.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';

            movieElement.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="movie-content">
                    <h2>${movie.title}</h2>
                    <div class="watch-online">
                        <button class="button" onclick="toggleDropdown('watch-options-${movie.title.replace(/\s/g, '-')}', 'download-options-${movie.title.replace(/\s/g, '-')}')">Watch Online</button>
                        <div class="dropdown-options" id="watch-options-${movie.title.replace(/\s/g, '-')}">
                            <a href="${movie.watchLinks['1080p']}" target="_blank" class="button">Watch 1080p</a>
                            <a href="${movie.watchLinks['720p']}" target="_blank" class="button">Watch 720p</a>
                            <a href="${movie.watchLinks['480p']}" target="_blank" class="button">Watch 480p</a>
                        </div>
                    </div>
                    <div class="download">
                        <button class="button" onclick="toggleDropdown('download-options-${movie.title.replace(/\s/g, '-')}', 'watch-options-${movie.title.replace(/\s/g, '-')}')">Download</button>
                        <div class="dropdown-options" id="download-options-${movie.title.replace(/\s/g, '-')}">
                            <a href="${movie.downloadLinks['1080p']}" download class="button">Download 1080p</a>
                            <a href="${movie.downloadLinks['720p']}" download class="button">Download 720p</a>
                            <a href="${movie.downloadLinks['480p']}" download class="button">Download 480p</a>
                        </div>
                    </div>
                </div>
            `;
            movieList.appendChild(movieElement);
        });
    }

    function toggleDropdown(showId, hideId) {
        const showDropdown = document.getElementById(showId);
        const hideDropdown = document.getElementById(hideId);
        
        // Hide the other dropdown if open
        if (hideDropdown) hideDropdown.style.display = 'none';
        
        // Toggle the current dropdown
        showDropdown.style.display = showDropdown.style.display === 'block' ? 'none' : 'block';
    }

    function searchMovies() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        displayMovies(filteredMovies);
    }

    displayMovies(movies);
    window.searchMovies = searchMovies;
    window.toggleDropdown = toggleDropdown;
});
