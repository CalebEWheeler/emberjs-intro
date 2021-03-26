import Route from '@ember/routing/route';

export default class TrendingRoute extends Route {
  model() {
    const getTrendingGifs = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=5bWPQlkq27JXBNM2Z3gyF85EG5XK0iLt&limit=25&rating=r`)
    .then(result => result.json())
    .then(trendingGifs => {
      console.log(trendingGifs.data)
      return trendingGifs.data;
    })
    .catch(error => {console.log(error)})

    return getTrendingGifs;
  }
}
