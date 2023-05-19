import MovieHome from "@/app/components/MovieHome";
import SerieSlider from "@/app/components/SerieSlider";

interface Props {
  params: {
    id: string;
  };
}

export default async function Serie({ params }: Props) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const serieDetailsUrl = `${process.env.NEXT_PUBLIC_SERIE_DETAILS}${params.id}?api_key=${apiKey}`;
  const seriesSimilarUrl = `${process.env.NEXT_PUBLIC_SERIE_DETAILS}${params.id}/similar?api_key=${apiKey}`;

  async function getSerieDetails(url: string) {
    const response = await fetch(serieDetailsUrl);
    const movieDetails = await response.json();
    return movieDetails;
  }

  async function getSilimarSeries(url: string) {
    const response = await fetch(url);
    const similarMovies = await response.json();
    return similarMovies.results;
  }

  const serieData = await getSerieDetails(serieDetailsUrl);
  const similarSerieData = await getSilimarSeries(seriesSimilarUrl);

  const serieInfos = {
    name: serieData.name,
    sinopse: serieData.overview,
    poster: serieData.poster,
    banner: serieData.backdrop_path,
    vote: serieData.vote_average,
    date: serieData.first_air_date,
    id: serieData.id
  };

  return (
    <>
      <MovieHome mainMovie={serieInfos} />
      <SerieSlider category="Mais series" trendingList={similarSerieData} />
    </>
  );
}
