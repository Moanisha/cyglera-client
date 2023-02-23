// import React from "react";
// import {
//   Grid,
//   Typography,
//   CardContent,
//   Container,
//   CardMedia,
//   CardActionArea,
// } from "@mui/material";
// import Card from 'react-bootstrap/Card';
// import { Link as RouterLink } from "react-router-dom";

// const recipes = [
//   {
//     id: 1,
//     title: "Recipe 1",

//     ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
//   },
//   {
//     id: 2,
//     title: "Recipe 2",

//     ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
//   },
//   {
//     id: 3,
//     title: "Recipe 3",

//     ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
//   },
//   {
//     id: 1,
//     title: "Recipe 1",

//     ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
//   },
//   {
//     id: 2,
//     title: "Recipe 2",

//     ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
//   },
//   {
//     id: 3,
//     title: "Recipe 3",

//     ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
//   },
//   {
//     id: 1,
//     title: "Recipe 1",

//     ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
//   },
//   {
//     id: 2,
//     title: "Recipe 2",

//     ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
//   },
//   {
//     id: 3,
//     title: "Recipe 3",

//     ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
//   },
// ];
// const Recipes = () => {
//   return (
//     <>
//       <Container
//         sx={{
//           my: 20,
//         }}
//         style={{
//           width: "100vh",
//         }}
//       >
//         {" "}
//         <Grid container spacing={4}>
//           {recipes.map((recipe) => (
//             <Grid item xs={7} sm={6} md={6} key={recipe.id}>
//               <Card sx={{ maxWidth: 345 }}>
//                 <CardActionArea
//                   component={RouterLink}
//                   to={{ pathname: `/recipes/${recipe.id}` }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="194"
//                     image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60"
//                     alt="green iguana"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {recipe.title}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default Recipes;

import React, { useState } from 'react';

import BakedSalmon from '../dietician/assets/Baked-Salmon.png';
import LemonCouscous from '../dietician/assets/Lemon-Couscous-with-Broccoli-and-Tuna.png';
import GingerSmoothie from '../dietician/assets/Ginger-Smoothie.png';
import GarlicRoastedChicken from '../dietician/assets/Garlic-Roasted-Chicken.png';
import BroccoliSalad from '../dietician/assets/Broccoli-Salad.png';
import BeetSmoothie from '../dietician/assets/Beet-Smoothie.png';
import Vegetablebowl from '../dietician/assets/Vegetable-and-Quinoa-Bowl.png';
import CucumberSalad from '../dietician/assets/Cucumber-Tomato-and-Avocado-Salad.png';
import PumpkinOatmeal from '../dietician/assets/Pumpkin-Overnight-Oatmeal.png';
import SpaghettiSquash from '../dietician/assets/Spaghetti-Squash-and-Tomato-Sauce.png';
import Chickpea from '../dietician/assets/Chickpea-and-Quinoa-Bowl.png';
import MangoPeach from '../dietician/assets/Mango-Peach-Smoothie.png';
import GrilledFishTacos from '../dietician/assets/Grilled-Fish-Tacos.jpg';
import ShrimpBowl from '../dietician/assets/Shrimp-Bowl.jpg';
import MangoRaspberrySmothie from '../dietician/assets/Mango-Raspberry-Smoothie.jpg';

const recipe = [
    {
      id: 1,
      title: "Baked Salmon",
      imageUrl: BakedSalmon,
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
    },
    {
      id: 2,
      title: "Lemon Couscous with brocoli and Tuna",
      imageUrl: LemonCouscous,
      ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
    },
    {
      id: 3,
      title: "Ginger Smoothie",
      imageUrl: GingerSmoothie,
      ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
    },
    {
      id: 1,
      title: "Garlic Roasted Chicken",
      imageUrl: GarlicRoastedChicken,
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
    },
    {
      id: 2,
      title: "Broccoli Salad",
      imageUrl: BroccoliSalad,
      ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
    },
    {
      id: 3,
      title: "Beet Smoothie",
      imageUrl: BeetSmoothie,
      ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
    },
    {
      id: 1,
      title: "Vegetable Quinoa Bowl",
      imageUrl: Vegetablebowl,
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
    },
    {
      id: 2,
      title: "Cucumber, Tomato and Avocado Salad",
      imageUrl: CucumberSalad,
      ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
    },
    {
      id: 3,
      title: "Pumpkin Overnight Oatmeal",
      imageUrl: PumpkinOatmeal,
      ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
    },
    {
        id: 3,
        title: "Spaghetti-Squash-and-Tomato-Sauce",
        imageUrl: SpaghettiSquash,
        ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
      },
      {
        id: 3,
        title: "Chickpea-and-Quinoa-Bowl.png",
        imageUrl: Chickpea,
        ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
      },
      {
        id: 3,
        title: "Mango-Peach-Smoothie",
        imageUrl: MangoPeach,
        ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
      },
      {
        id: 3,
        title: "Grilled-Fish-Tacos",
        imageUrl: GrilledFishTacos,
        ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
      },
      {
        id: 3,
        title: "Shrimp-Bowl",
        imageUrl: ShrimpBowl,
        ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
      },
      {
        id: 3,
        title: "Mango-Raspberry-Smoothie",
        imageUrl: MangoRaspberrySmothie,
        ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
      },
  ];
const Recipes = () => {
    return (

    <div className="container">
      <div className='row mt-5 d-flex text-right'>
        <div className='col mt-5 '>
        <a href='/addrecipes' className='btn btn-primary'>Add Recipe</a>
        </div>     
      </div>
        <div className="row">
      {recipe.map((item) => (
        <div className="col-md-4 my-4" key={item.id}>
          <div className="card">
            <div className="card-image">
             <img width='100%' src={item.imageUrl} alt={item.title}/>
             <div className="card-title">
              <a href="" style={{ color: 'black', textDecoration: 'none' }}><b>{item.title}</b></a>
          {/* <Card>
            <CardImg top width="100%" src={item.imageUrl} alt={item.title} />
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
            </CardBody>
          </Card> */}
          </div>
          </div>
        </div>
        </div>
        ))}
        </div>
        </div>
       
    )
}
export default Recipes;