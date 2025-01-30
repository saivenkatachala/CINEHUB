const seriesData = [
    {
        title: "Mirzapur (2018) S01 EP (01-09)",
        image: "series10.jpg",
        description: "Language:Telugu,Hindi,English",
        seasons: [
            {
                season: "Season 1",
                episodes: [
                    { title: "Episode 1", watchLink: "", downloadLink: "" },
                    { title: "Episode 2", watchLink: "", downloadLink: "" }
                ]
            },
            
        ]
    },
    };
function createEpisodeElement(episode) {
    return `
        <h4>${episode.title}</h4>
        <a href="${episode.watchLink}" class="button">Watch Online</a>
        <a href="${episode.downloadLink}" class="button">Download</a>
    `;
}

function createSeasonElement(season) {
    return `
        <div class="season">
            <h3>${season.season}</h3>
            <div class="episode-list">
                ${season.episodes.map(createEpisodeElement).join('')}
            </div>
        </div>
    `;
}

function createSeriesElement(series) {
    const seriesElement = document.createElement("div");
    seriesElement.classList.add("series");

    seriesElement.innerHTML = `
        <img src="${series.image}" alt="${series.title}">
        <div class="series-content">
            <h2>${series.title}</h2>
            <p>${series.description}</p>
            ${series.seasons.map(createSeasonElement).join('')}
        </div>
    `;

    return seriesElement;
}

function displaySeries() {
    const seriesList = document.getElementById("series-list");
    seriesList.innerHTML = "";
    seriesData.forEach(series => {
        const seriesElement = createSeriesElement(series);
        seriesList.appendChild(seriesElement);
    });
}

function searchSeries() {
    const query = document.getElementById("search-input-series").value.toLowerCase();
    const filteredSeries = seriesData.filter(series => series.title.toLowerCase().includes(query));
    
    const seriesList = document.getElementById("series-list");
    seriesList.innerHTML = "";
    filteredSeries.forEach(series => {
        const seriesElement = createSeriesElement(series);
        seriesList.appendChild(seriesElement);
    });
}

// Display series on page load
window.onload = displaySeries;
