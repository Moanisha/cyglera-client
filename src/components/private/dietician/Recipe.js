import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../../../App.css";
// import {
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   Grid,
//   Divider,
//   Container,
//   Box,
// } from "@mui/material";

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

  const handlePrint = () => {
    window.print();
  };

  return (
    // <Container
    //   sx={{
    //     my: 20,
    //   }}
    // >
    //   <Paper>
    //     <Grid container>
    //       <Grid item xs>
    //         <Typography variant="h4" component="h3">
    //           Chicken and Pepper Skillet
    //         </Typography>
    //         <Divider sx={{ py: 2 }} orientation="horizontal" flexItem></Divider>
    //         <Typography component="h5" variant="h6">
    //           Ingredients:
    //         </Typography>
    //         <List component="ul">
    //           {ingredients.map((ingredient) => (
    //             <ListItem key={ingredient}>
    //               <ListItemText primary={ingredient} />
    //             </ListItem>
    //           ))}
    //         </List>
    //       </Grid>
    //       <Divider orientation="vertical" flexItem></Divider>
    //       <Grid item xs>
    //         <Box
    //           component="img"
    //           sx={{
    //             width: "100%",
    //           }}
    //           alt="Your logo."
    //           src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60"
    //         />
    //       </Grid>
    //     </Grid>
    //   </Paper>
    //   <Typography component="h5" variant="h6">
    //     Instructions:
    //   </Typography>
    //   <List component="ol">
    //     {instructions.map((instruction, index) => (
    //       <ListItem key={instruction}>
    //         <ListItemText primary={`${index + 1}. ${instruction}`} />
    //       </ListItem>
    //     ))}
    //   </List>
    // </Container>

    <div className="container">
      <div className="row mt-5 d-flex text-center">
        <div className="col mt-5">
           <h1>Recipe Name</h1>
        </div>
      </div>
      <div className="card">
        <div className="row mx-1">
          <div className="col">
              <div className="row mt-1 d-flex text-center">
                <div className="col">
                  <img src='' width='500' height='250'/>
                </div>
              </div>
              <div className="row">
                <div className="col mt-1 d-flex text-center">
                <Button onClick={handlePrint} className="bg-success" media="print">
                   Print Recipe
                </Button>
                </div>
              </div>
              <hr/>
                {/* <div className="row"> */}
                  <div className="col mt-3">
                    <b>NUTRITIONAL FACTS</b>
                    <div className="row my-2">
                      <div className="col-md-2">
                        Calories: 
                      </div>
                      <div className="col-md-2">
                        Carbohydrates: 
                      </div>
                      <div className="col-md-2">
                        Protein: 
                      </div>
                      <div className="col-md-2">
                        Fat: 
                      </div>
                    </div>
                  </div>
                  <hr/>
                {/* </div> */}
                   <div className="col">
                      <b className="hr-line">INGREDIENTS</b>
                      <ul>
                        <li>ingredients list</li>
                      </ul>
                   </div><hr/>
                   <div className="col">
                      <b>INSTRUCTIONS</b>
                      <ol>
                        <li>Instructions list</li>
                      </ol>
                   </div><hr/>
                   <div className="col">
                      <b>BREAK DOWN OF ESSENTIAL INGREDIENTS</b>
                      <p>esential ingredients benefits</p>
                   </div><hr/>
                    
                  

                
            </div>
          </div>
      </div>
    </div>

    // <Container>
    //   <Row mt-5 d-flex text-center>
    //     <h2>Nutrition Facts</h2>
    //   </Row>
    //   <Row>
    //     <Col>Calories</Col>
    //     <Col>Carbohydrates</Col>
    //     <Col>Protein</Col>
    //     <Col>Fat</Col>
    //   </Row>
    // </Container>
  );
};

export default Recipe;
