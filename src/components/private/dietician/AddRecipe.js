import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddRecipeForm =() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [essentialIngrediants, setEssentialIngrediants] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtien] = useState('');
  const [fat, setFat] = useState('');
  const [courses, setCourses] = useState('');
  const [cuisine, setCuisine] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // handle form submission here
  };

  return (
    <div className='container my-5'>
    <Form onSubmit={handleSubmit}>
        <h3>Submit Your Own Recipe</h3><br/>
      <Form.Group controlId="name">
        <Form.Label className="font-weight-bold">Name<span style={{color:"red"}}>*</span></Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group><br/>

      <Form.Group controlId="email">
        <Form.Label className="font-weight-bold">Email<span style={{color:"red"}}>*</span></Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group><br/>
      <h4>Recipe Essentials</h4><br/>

      <Form.Group controlId="recipeName">
        <Form.Label className="font-weight-bold">Recipe Name<span style={{color:"red"}}>*</span></Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter recipe name"
          value={recipeName}
          onChange={(event) => setRecipeName(event.target.value)}
        />
      </Form.Group><br/>

        <Form.Group controlId="summary">
        <Form.Label className="font-weight-bold">Summary</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter recipe summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          />
          </Form.Group><br/>

          <Form.Group controlId="image">
           <Form.Label className="font-weight-bold">Image<span style={{color:"red"}}>*</span></Form.Label><br/>
           <input type="file"
            id="custom-file" 
            label="Choose file"
            onChange={(event) => setImage(event.target.files[0])}
            custom
          />
        </Form.Group><br/>
      
        <Form.Group controlId="ingredients">
          <Form.Label className="font-weight-bold">Ingredients<span style={{color:"red"}}>*</span></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter recipe ingredients"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
          />
        </Form.Group><br/>
      
        <Form.Group controlId="instructions">
          <Form.Label className="font-weight-bold">Instructions<span style={{color:"red"}}>*</span></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter recipe instructions"
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
          />
        </Form.Group><br/>
            <Form.Group controlId="essentialIngrediants">
            <Form.Label className="font-weight-bold">Breakdown of Essential Ingrediants</Form.Label>
            <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter recipe Essential Ingrediants"
            value={essentialIngrediants}
            onChange={(event) => setEssentialIngrediants(event.target.value)}
            />
            </Form.Group><br/>
        <h4>Recipe Details</h4><br/>
        <Form.Group controlId="prepTime">
          <Form.Label className="font-weight-bold">Prep time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe prep time"
            value={prepTime}
            onChange={(event) => setCookTime(event.target.value)}
          />
        </Form.Group><br/>
        <Form.Group controlId="cookTime">
          <Form.Label className="font-weight-bold">Cook time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe cook time"
            value={cookTime}
            onChange={(event) => setCookTime(event.target.value)}
          />
        </Form.Group><br/>
      
        <Form.Group controlId="totalTime">
          <Form.Label className="font-weight-bold">Total time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe Total cook time"
            value={totalTime}
            onChange={(event) => setTotalTime(event.target.value)}
          />
        </Form.Group><br/>
        <h4>Nutritional Facts</h4><br/>
        <div className='row'> 
             <div className='col-md-6'>
                <Form.Group controlId="carbohydrates">
                <Form.Label className="font-weight-bold">Carbohydrates</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="10g"
                    value={carbohydrates}
                    onChange={(event) => setCarbohydrates(event.target.value)}
                 />
                </Form.Group><br/>
            </div>
            <div className='col-md-6'>
                <Form.Group controlId="calories">
                <Form.Label className="font-weight-bold">Calories</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="100cal"
                    value={calories}
                    onChange={(event) => setCalories(event.target.value)}
                />
                </Form.Group><br/>
            </div>
            <div className='col-md-6'>
                    <Form.Group controlId="protein">
                    <Form.Label className="font-weight-bold">Protein</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="20g"
                        value={protein}
                        onChange={(event) => setProtien(event.target.value)}
                    />
                    </Form.Group><br/>
            </div>
            <div className='col-md-6'>
                <Form.Group controlId="fat">
                <Form.Label className="font-weight-bold">Fat</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="5g"
                    value={fat}
                    onChange={(event) => setFat(event.target.value)}
                />
                </Form.Group><br/>
            </div>
        </div>
        
          
        
        
        <Form.Group controlId="courses">
          <Form.Label className="font-weight-bold">Courses</Form.Label>
          <Form.Control
            type="text"
            value={courses}
            onChange={(event) => setCourses(event.target.value)}
          />
        </Form.Group><br/>
        <Form.Group controlId="cuisines">
          <Form.Label className="font-weight-bold">Cuisines</Form.Label>
          <Form.Control
            type="text"
            value={cuisine}
            onChange={(event) => setCuisine(event.target.value)}
          />
        </Form.Group><br/>
        <br/>
        <Button variant="primary" type="submit">
          Submit Recipe
        </Button>
        {/* <a
                        href="/recipes"
                        className="btn btn-sm btn-primary"
                        style={{ borderRadius: "0 30px 30px 0" }}
                      >
                        Book Now
                      </a> */}
      </Form>
      </div>
      );
    }
    
    export default AddRecipeForm;      