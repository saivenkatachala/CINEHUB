document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        {
            title: 'Devara: Part 1 (2024) Telugu',
            poster: 'dv2.jpg',
            watchLinks: {
                '1080p': '',
                '720p': '',
                '480p': ''
            },
            downloadLinks: {
                '1080p': '',
                '720p': '',
                '480p': ''
            }
        },
         {
            title: 'Gangs of Godavari (2024) Telugu',
            poster: 'poster1.jpg',
            watchLinks: {
                '1080p': '',
                '720p': '',
                '480p': ''
            },
            downloadLinks: {
                '1080p': '',
                '720p': '',
                '480p': ''
            }
        },
        {
            title: 'Dear Nana (2024) Telugu',
            poster: 'poster3.jpg',
            watchLinks: {
                '1080p': '',
                '720p': '',
                '480p': ''
            },
            downloadLinks: {
                '1080p': '',
                '720p': '',
                '480p': ''
            }
        },
        {
            title: 'Dear Nana (2024) Telugu',
            poster: 'poster4.jpg',
            watchLinks: {
                '1080p': '',
                '720p': '',
                '480p': ''
            },
            downloadLinks: {
                '1080p': '',
                '720p': '',
                '480p': ''
            }
        },
        
        }:

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
