const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const fetchData = async () => {
  try {
    const data = await fetch(endpoint);
    const citiesJSON = await data.json();
    cities.push(...citiesJSON);
  } catch (e) {
    console.log(e);
  }
};
fetchData();

const searchField = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const findMatches = (matchWord) => {
  return cities.filter((region) => {
    const regex = new RegExp(matchWord, 'gi');
    return region.city.match(regex) || region.state.match(regex);
  });
};

const parsePopulation = (population) => {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const displayCityState = (event) => {
  const value = event.target.value;
  const foundMatches = findMatches(value);

  const html = foundMatches
    .map((match) => {
      const regex = new RegExp(value, 'gi');
      const city = match.city.replace(
        regex,
        `<span class="hl">${value}</span>`
      );
      const state = match.state.replace(
        regex,
        `<span class="hl">${value}</span>`
      );

      return `
        <li>
            <span class="name">${city}, ${state}</span>
            <span class="population">${parsePopulation(match.population)}</span>
        </li>
    `;
    })
    .join('');

  suggestions.innerHTML = html;
};

searchField.addEventListener('change', displayCityState);
searchField.addEventListener('keyup', displayCityState);
