import { HomeAction, HomeComodies, HomeHorror, HomeRomance, HomeTopRated } from "@/components/index.";
import { MovieSlide } from "@/components/movie";
import React from "react";

const Movie = () => {
  return (
    <>
      {/*MovieSlide  */}
      <MovieSlide />

      {/* TopRates */}
      <HomeTopRated />

      {/* Action */}
      <HomeAction />

      {/* Comdoies */}
      <HomeComodies />

      {/* Horrow */}
      <HomeHorror />

      {/*  Romance*/}
     <HomeRomance />
    </>
  );
};

export default Movie;
