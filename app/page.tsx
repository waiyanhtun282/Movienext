"use client";
import HomeDocummetries from "@/components/home/HomeDocummetries";
import HomeSLide from "@/components/home/HomeSLide";
import { HomeAction, HomeComodies, HomeHorror, HomePopular, HomeRomance, HomeTopRated, HomeTrending, SecondHomeSlide } from "@/components/index.";
import requests from "@/utils/request";
import Image from "next/image";
import { useEffect, useState } from "react";

export default  function Home() {

  const [movie, setMovie] = useState({
    netflixOriginals: [],
    trendingNow: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  // console.log(res.results)
  const fetchData = async () => {
    try {
      setIsLoading(true);

      const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
        
      ] = await Promise.all([
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
        fetch(requests.fetchTrending).then((res) => res.json()),
        fetch(requests.fetchTopRated).then((res) => res.json()),
        fetch(requests.fetchActionMovies).then((res) => res.json()),
        fetch(requests.fetchComedyMovies).then((res) => res.json()),
        fetch(requests.fetchHorrorMovies).then((res) => res.json()),
        fetch(requests.fetchRomanceMovies).then((res) => res.json()),
        fetch(requests.fetchDocumentaries).then((res) => res.json()),
      
      ]);
      // console.log(topRated,onTheAirTv,popularTv)
      setMovie((prev) => ({
        ...prev,
        netflixOriginals: netflixOriginals.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
        romanceMovies: romanceMovies.results,
        documentaries: documentaries.results,

      }));
      // console.log(netflixOriginals)
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error: any) {
      console.log("🚀 ~ file: page.tsx:64 ~ fetchData ~ error:", error);
    }
  };
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <main>
      {/* slide */}
    
        <HomeSLide   movie={movie?.netflixOriginals}/>
  
      {/* Popular this week */}
      
      <HomePopular />
      {/* trending now */}
      {/* <HomeTrending  /> */}
      <HomeTrending  movie={movie?.trendingNow}/>

      {/* top rated */}
      <HomeTopRated movie={movie?.topRated}/>

      {/* action */}
      <HomeAction  movie={movie?.actionMovies} />

      {/* slidder */}
      <SecondHomeSlide  movieOne={movie?.horrorMovies} movieTwo={movie?.comedyMovies}/>

      {/* Comodies */}
      <HomeComodies  movie={movie?.comedyMovies}/>

      {/* romance */}
      <HomeRomance  movie={movie?.romanceMovies}/>

      {/* Horror */}
      <HomeHorror  movie={movie?.horrorMovies}/>

      {/* docummetries */}
      <HomeDocummetries movie={movie?.documentaries}/>
    </main>
  );
}
