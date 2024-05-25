import { fetchTrending } from "@actions/movieData";
import HeroCard from "./HeroCard";

export const Hero = async () => {
  const trending = await fetchTrending();
  const randomNumber = Math.floor(Math.random() * 20);
  const trendingMovie = trending[randomNumber];

  return (
    <div>
      <HeroCard trendingMovie={trendingMovie} />
    </div>
  );
};
