import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Divider,
  Container,
  Box,
} from "@mui/material";

const Recipe = () => {
  const ingredients = [
    "1 lb chicken breast",
    "1 onion, chopped",
    "2 cloves garlic, minced",
    "1 red bell pepper, sliced",
    "1 yellow bell pepper, sliced",
    "1 green bell pepper, sliced",
    "1 can diced tomatoes",
    "1 tsp cumin",
    "1 tsp paprika",
    "1 tsp chili powder",
    "1 tsp salt",
    "1/2 tsp black pepper",
  ];

  const instructions = [
    "In a large skillet, heat a bit of oil over medium heat.",
    "Add the chicken and cook for 5-7 minutes on each side or until cooked through.",
    "Remove the chicken from the skillet and set it aside.",
    "In the same skillet, add the onion and cook for 2-3 minutes or until soft.",
    "Add the garlic and cook for another minute.",
    "Add the red, yellow, and green bell peppers and cook for 5-7 minutes or until tender.",
    "Add the diced tomatoes, cumin, paprika, chili powder, salt, and black pepper to the skillet.",
    "Stir to combine and bring the mixture to a simmer.",
    "Return the chicken to the skillet and spoon the sauce over the chicken.",
    "Cover the skillet and let cook for 10-15 minutes or until heated through.",
    "Serve over rice or with crusty bread.",
  ];

  return (
    <Container
      sx={{
        my: 20,
      }}
    >
      <Paper>
        <Grid container>
          <Grid item xs>
            <Typography variant="h4" component="h3">
              Chicken and Pepper Skillet
            </Typography>
            <Divider sx={{ py: 2 }} orientation="horizontal" flexItem></Divider>
            <Typography component="h5" variant="h6">
              Ingredients:
            </Typography>
            <List component="ul">
              {ingredients.map((ingredient) => (
                <ListItem key={ingredient}>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Divider orientation="vertical" flexItem></Divider>
          <Grid item xs>
            <Box
              component="img"
              sx={{
                height: 600,
                width: 600,
              }}
              alt="Your logo."
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60"
            />
          </Grid>
        </Grid>
      </Paper>
      <Typography component="h5" variant="h6">
        Instructions:
      </Typography>
      <List component="ol">
        {instructions.map((instruction, index) => (
          <ListItem key={instruction}>
            <ListItemText primary={`${index + 1}. ${instruction}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Recipe;
