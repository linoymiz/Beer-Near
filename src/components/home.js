import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import BeerList from "./beerList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {
  const LOAD_LIMIT = 10;
  const [data, setData] = useState({ isLoading: false, beers: [] });
  const [page, setPage] = useState({ pageNo: 1, isFirstView: true });

  useEffect(() => {
    async function fetchBeers() {
      setData((prevValue) => ({ ...prevValue, isLoading: true }));
      fetch(
        `https://api.punkapi.com/v2/beers?page=${page.pageNo}&per_page=${LOAD_LIMIT}`
      )
        .then((res) => res.json())
        .then((fetchedBeers) => {
          setData((prevValue) => ({
            ...prevValue,
            beers: [...prevValue.beers, ...fetchedBeers],
          }));
        })
        .catch((err) => console.log("Was not able to fetch data... ", err))
        .finally(() =>
          setData((prevValue) => ({ ...prevValue, isLoading: false }))
        );
    }
    fetchBeers();
  }, [page]);

  function loadMoreBeers() {
    if (page.isFirstView) {
      setData((prevVal) => ({ ...prevVal, beers: [] }));
      setPage((prevVal) => ({ ...prevVal, isFirstView: false }));
    } else setPage((prevVal) => ({ ...prevVal, pageNo: prevVal.pageNo + 1 }));
  }

  return (
    <Box component="container">
      <BeerList beerData={data} firstView={page.isFirstView} />
      <Button
        sx={{ fontFamily: "Lato", fontSize: "0.7rem", textTransform: "none" }}
        className="Button"
        onClick={loadMoreBeers}
      >
        {data.isLoading ? (
          "Loading..."
        ) : (
          <span>
            Load More
            <ExpandMoreIcon id="svgBtn" />
          </span>
        )}
      </Button>
    </Box>
  );
}
