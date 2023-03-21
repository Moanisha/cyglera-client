import React, { useState } from 'react';


import useRole from "../../../hooks/useRole";


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
  const userRole = useRole();
    return (

    <div className="container">
      <div className='row mt-5 d-flex text-right'>
        <div className='col mt-5 '>
        {userRole!="DIETICIAN" ? (
              <>
              </>
            ) : (
              <> 
              <a href='/addrecipes' className='btn btn-primary'>Add Recipe</a>
               </>
            )}
        </div>     
      </div> 
        <div className="row">
      {recipe.map((item) => (
        <div className="col-md-4 my-4" key={item.id}>
          <div className="card">
            <div className="card-image">
             <img width='100%' src={item.imageUrl} alt={item.title}/>
             <div className="card-title">
              <a href="/recipes/:recipe_id" style={{ color: 'black', textDecoration: 'none' }}><b>{item.title}</b></a>
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