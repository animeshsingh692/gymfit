export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '33b06b7932msh8e71a2054cdeae4p160e74jsn544c9931d50a'
        ,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const ytSearchOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '33b06b7932msh8e71a2054cdeae4p160e74jsn544c9931d50a',
        'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}