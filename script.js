document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        {
            title: 'Devara: Part 1 (2024) Telugu  ',
            poster: 'dv2.jpg',
            watchLink: 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/836122?hash=AgADTx',
            downloadLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836122?hash=AgADTx',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836126?hash=AgADTh',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836134?hash=AgADVB'
            }
        },
         {
            title: 'Vettaiyan (2024) Telugu  ',
            poster: 'vtn.jpg',
            watchLink: 'https:https://tg-movies4u.tgmkvofcl.workers.dev/watch/836146?hash=AgADfB',
            downloadLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836142?hash=AgADgR',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836146?hash=AgADfB',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836152?hash=AgADdx'
            }
        },
         {
            title: 'ARM (2024) Telugu  ',
            poster: 'arm.avif',
            watchLink: 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/836102?hash=AgADYB',
            downloadLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836112?hash=AgADaB',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836102?hash=AgADYB',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/836108?hash=AgADYh'
            }
        },
        {
            title: 'Amaran (2024) Telugu  ',
            poster: 'AMARAN.jpg',
            watchLink: 'https://tg-movies4u.tgmkvofcl.workers.dev/watch/805060?hash=AgADwx',
            downloadLinks: {
                '1080p': 'https://tg-movies4u.tgmkvofcl.workers.dev/805064?hash=AgADyB',
                '720p': 'https://tg-movies4u.tgmkvofcl.workers.dev/805036?hash=AgADxx',
                '480p': 'https://tg-movies4u.tgmkvofcl.workers.dev/805060?hash=AgADwx'
            }
        },
         {
            title: 'Bhaje Vaayu Vegam (2024) Telugu  ',
            poster: 'poster13.jpg',
            watchLink: 'https://filetolink.mknbotz.workers.dev/watch/59312',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/216652?hash=AgADhx',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/216654?hash=AgADgB',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/216648?hash=AgADfR'
            }
        },
        {
            title: 'Gangs of Godavari (2024)Telugu ',
            poster: 'poster1.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/216632?hash=AgADJR',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/216636?hash=AgADKB',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/216632?hash=AgADJR',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/216634?hash=AgADKh'
            }
        },
        {
            title: 'Love Me if You Dare (2024) Telugu',
            poster: 'poster2.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314260?hash=AgADyh',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314262?hash=AgADOh',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314260?hash=AgADyh',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314258?hash=AgADwh'
            }

        },
        {

            title: 'Dear Nanna (2024) Telugu',
            poster: 'poster3.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314312?hash=AgADMh',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314312?hash=AgADMh',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314314?hash=AgADOx',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314310?hash=AgADwB'
            }
        },
        {
            title: 'Parijatha Parvam (2024) Telugu ',
            poster: 'poster4.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314334?hash=AgADbA',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314334?hash=AgADbA',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314332?hash=AgADaQ',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314330?hash=AgADZQ'
            }

        },
        {
            title: 'Star (2024) Telugu ',
            poster: 'poster5.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314344?hash=AgADmg',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314342?hash=AgADnQ',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314344?hash=AgADmg',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314340?hash=AgADmA'
            }

        },
        {
            title: 'Blackout (2024)[Tel+Hin+Kan+Tam] ',
            poster: 'poster6.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314374?hash=AgADBh',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314376?hash=AgADCR',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314374?hash=AgADBh',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314372?hash=AgADBx'
            }

        },
        {
            title: 'Tenant (2024) Telugu  ',
            poster: 'poster7.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314390?hash=AgADnw',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314390?hash=AgADnw',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314392?hash=AgADqA',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314388?hash=AgADqw'
            }

        },
        {
            title: 'Kalki (2024) Telugu',
            poster: 'poster8.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314409?hash=AgADbB',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314407?hash=AgAD0h',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314409?hash=AgADbB',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314405?hash=AgADUh'
            }

        },
        {
            title: 'Varshangalkku Shesham (2024)[Tel + Hin + Kan]   ',
            poster: 'poster9.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314415?hash=AgADYB',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314419?hash=AgADoR',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314415?hash=AgADYB',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314417?hash=AgADhR'
            }

        },
        {
            title: 'Bade Miyan Chote Miyan (2024)[Tel + Mal + Kan] ',
            poster: 'poster10.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314429?hash=AgADZx',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314427?hash=AgADtR',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314429?hash=AgADZx',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314425?hash=AgADVh'
            }

        },
        {
            title: 'Naadu (2023) [Tel + Mal]  ',
            poster: 'poster11.jpg',
            watchLink: 'https://tgmstreamm-cc23fd301808.herokuapp.com/watch/314471?hash=AgADGw',
            downloadLinks: {
                '1080p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314469?hash=AgADIA',
                '720p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314471?hash=AgADGw',
                '480p': 'https://tgmstreamm-cc23fd301808.herokuapp.com/314467?hash=AgADGA'
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
                    <a href="${movie.watchLink}" target="_blank" class="button">Watch Online</a>
                    <div class="download-options">
                        <a href="${movie.downloadLinks['1080p']}" download class="button">Download 1080p</a>
                        <a href="${movie.downloadLinks['720p']}" download class="button">Download 720p</a>
                        <a href="${movie.downloadLinks['480p']}" download class="button">Download 480p</a>
                    </div>
                </div>
            `;
            movieList.appendChild(movieElement);
        });
    }

    function searchMovies() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        displayMovies(filteredMovies);
    }

    displayMovies(movies);
    window.searchMovies = searchMovies;
});
