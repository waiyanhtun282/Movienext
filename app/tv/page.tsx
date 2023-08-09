"use client";

import TvSlide from "@/components/tv/TvSlide";
import { useEffect, useState } from "react";
import requests from "@/utils/request";
// import OnTheAir from "@/components/tv/OnTheAir";
import TvAir from "@/components/tv/TvAir";
import tvRequests from "@/utils/tvRequests";
import TvPopular from "@/components/tv/TvPopular";
import TvTopRated from "@/components/tv/TvTopRated";
import SecondTvSlide from "@/components/tv/SecondTvSlide";
import TvOnAir from "@/components/tv/TvOnAir";
import TvAction from "@/components/tv/TvAction";
import TvHorror from "@/components/tv/TvHorror";
type Props = {};
const TV = (): Props => {
  const [movie, setMovie] = useState({
    trendingNow: [],
    topRated: [],
    onTheAirTv: [],
    popularTv: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const [
        topRated,
        trendingNow,
        onTheAirTv,
        popularTv,
        actionMovies,
        comedyMovies,
        horrorMovies
      ] = await Promise.all([
       
        fetch(requests.fetchTrending).then((res) => res.json()),
        fetch(tvRequests.fetchTopRated).then((res) => res.json()),
        fetch(tvRequests.fetchOnTheAir).then((res) => res.json()),
        fetch(tvRequests.fetchPopular).then((res) => res.json()),
        fetch(requests.fetchActionMovies).then((res) => res.json()),
        fetch(requests.fetchComedyMovies).then((res) => res.json()),
        fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      ]);
      // console.log(onTheAirTv, popularTv);
      setMovie((prev) => ({
        ...prev,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        onTheAirTv: onTheAirTv.results,
        popularTv: popularTv.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
      }));
      // console.log(topRated)
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error: any) {
      console.log("🚀 ~ file: page.tsx:64 ~ fetchData ~ error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // console.log(tv)
  }, []);
  return (
    <>
      <TvSlide movie={movie.trendingNow} />

      {/* top rated */}
      <TvTopRated movie={movie.topRated} />
      {/* On The air */}
      <TvAir movie={movie.trendingNow} />
      {/* Popular TV */}
      <TvPopular movie={movie?.popularTv} />

      {/* SLide2 */}
      <SecondTvSlide
        movieOne={movie?.trendingNow}
        movieTwo={movie?.onTheAirTv}
      />
      {/* Action */}
      <TvAction movie={movie?.actionMovies} />

      {/* onThe Air */}

      <TvOnAir movie={movie?.onTheAirTv} />
      {/* Horror */}
      <TvHorror movie={movie?.horrorMovies}/>
    </>
  );
};

export default TV;
