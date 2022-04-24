import React from "react";
import Card from "@mui/material/Card";
import { CardMedia, CardContent, Tooltip, tooltipClasses } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

export default function Beer(props) {
  const { name, img, tag, desc, ings } = props;
  const ingsStr = filterIngredients(ings);
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      inlineSize: "min-content",
    },
  }));

  function filterIngredients(ings) {
    const mainIngs = Object.entries(ings).map(([k, v]) => k);
    return "ingredients: " + mainIngs.toString();
  }

  return (
    <Box component="container" className="card-wrapper">
      <Card className="card">
        <BootstrapTooltip title={ingsStr} placement="top-start" arrow>
          <CardMedia
            className="card-img"
            component="img"
            image={img}
            alt={img}
          />
        </BootstrapTooltip>
        <CardContent className="card-content">
          <h1 className="card-title">{name}</h1>
          <p className="subtitle">{tag}</p>
          <p className="desc">{desc}</p>
        </CardContent>
      </Card>
    </Box>
  );
}
