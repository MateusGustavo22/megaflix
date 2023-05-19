import MovieHome from "@/app/components/MovieHome";
import SerieSlider from "@/app/components/SerieSlider";

async function fetchMovie(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export default async function Series() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const trendingSerieUrl = `${process.env.NEXT_PUBLIC_SERIE_TRENDING}?api_key=${apiKey}`;
  const actionSerieUrl = `${
    process.env.NEXT_PUBLIC_SERIE_GENRE
  }?api_key=${apiKey}&with_genres=${10759}`;
  const crimeSerieUrl = `${
    process.env.NEXT_PUBLIC_SERIE_GENRE
  }?api_key=${apiKey}&with_genres=${80}`;
  const latestUrl = `${process.env.NEXT_PUBLIC_SERIE_RATED}?api_key=${apiKey}`;

  const getTrendingSerie = await fetchMovie(trendingSerieUrl);
  const getActionSerie = await fetchMovie(actionSerieUrl);
  const getCrimeSerie = await fetchMovie(crimeSerieUrl);
  const getLatestSerie = await fetchMovie(latestUrl);

  const mainMovie = {
    name: getTrendingSerie[0].original_name,
    sinopse: getTrendingSerie[0].overview,
    poster: getTrendingSerie[0].poster,
    banner: getTrendingSerie[0].backdrop_path,
    vote: getTrendingSerie[0].vote_average,
    date: getTrendingSerie[0].first_air_date,
    id: getTrendingSerie[0].id
  };

  return (
    <>
      <MovieHome mainMovie={mainMovie} />
      <SerieSlider category="Em alta" trendingList={getTrendingSerie} />
      <SerieSlider category="Ação" trendingList={getActionSerie} />
      <SerieSlider category="Crime" trendingList={getCrimeSerie} />
      <SerieSlider
        category="Mais bem avaliadas"
        trendingList={getLatestSerie}
      />
    </>
  );
}
