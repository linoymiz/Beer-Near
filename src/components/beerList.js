import React from 'react'
import { List, ListItem } from '@mui/material'
import { Box } from '@mui/system'
import Beer from './beer'
export default function BeerList(props){
    const sliceLimit = props.firstView ? 2 : (props.beerData.length - 1) 

    return <Box width="50%" margin="auto">
    <Box className="title-category">
    <p>Beers</p>
    </Box>
    <List>
     {props.beerData.beers?.map((beerItem, ind) => {
         //avoiding working with slice AFTER mapping all the data
        if(ind > sliceLimit) return
        //else
        return <ListItem key={beerItem.id}>
                    <Beer name={beerItem.name}
                     img={beerItem.image_url}
                     tag={beerItem.tagline}
                     desc={beerItem.description}
                     ings = {beerItem.ingredients}
                    />
            </ListItem>
         

    })}
    </List>
    </Box>
}