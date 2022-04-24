import React from "react";
import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import Beer from "./beer";
export default function BeerList(props) {
  const sliceLimit = 3;
  const beers = props.beers;

  return (
    <Box width="50%" margin="auto">
      <Box className="title-category">
        <p>Beers</p>
      </Box>
      <List>
        {(props.firstView ? beers.slice(0, sliceLimit) : beers).map(
          (beerItem) => {
            return (
              <ListItem key={beerItem.id}>
                <Beer
                  name={beerItem.name}
                  img={beerItem.image_url}
                  tag={beerItem.tagline}
                  desc={beerItem.description}
                  ings={beerItem.ingredients}
                />
              </ListItem>
            );
          }
        )}
      </List>
    </Box>
  );
}
