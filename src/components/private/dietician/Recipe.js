import {React, useEffect} from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../../../App.css";

const Recipe = () => {

  // useEffect(() => {
  //   axios.post('http://localhost:8000/api/auth/fetchprofile', fetchInfo)
  //     .then(res => {
  //       const { userFound, userInfo } = res.data;
  //       setUserDetails({ ...userFound, ...userInfo });
  //     }
  //     )
  //     .catch(err => console.log(err));
  //   }, []);

  const handlePrint = () => {
    window.print();
  };

  return (

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
                        <li></li>
                      </ul>
                   </div><hr/>
                   <div className="col">
                      <b>INSTRUCTIONS</b>
                      <ol>
                        <li></li>
                      </ol>
                   </div><hr/>
                   <div className="col">
                      <b>BREAK DOWN OF ESSENTIAL INGREDIENTS</b>
                      <p></p>
                   </div><hr/>
                    
                  

                
            </div>
          </div>
      </div>
    </div>
  );
};

export default Recipe;
