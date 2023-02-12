import React from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Container,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Recipe 1",

    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
  },
  {
    id: 2,
    title: "Recipe 2",

    ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
  },
  {
    id: 3,
    title: "Recipe 3",

    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 1,
    title: "Recipe 1",

    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
  },
  {
    id: 2,
    title: "Recipe 2",

    ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
  },
  {
    id: 3,
    title: "Recipe 3",

    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 1,
    title: "Recipe 1",

    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
  },
  {
    id: 2,
    title: "Recipe 2",

    ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
  },
  {
    id: 3,
    title: "Recipe 3",

    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
];
const Recipes = () => {
  return (
    <>
      <Container
        sx={{
          my: 20,
        }}
        style={{
          width: "100vh",
        }}
      >
        {" "}
        <Grid container spacing={4}>
          {recipes.map((recipe) => (
            <Grid item xs={7} sm={6} md={6} key={recipe.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  component={RouterLink}
                  to={{ pathname: `/recipes/${recipe.id}` }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {recipe.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Recipes;
