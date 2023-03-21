import React from "react";
import useRole from "../../hooks/useRole";
import { ADMIN, CLIENT, DIETICIAN } from "../../helpers/UserRoles";
import { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import axios from 'axios';
import useStateValues from "../../hooks/useStateValues";

function Profile() {
  const userRole = useRole();
  const { userData } = useStateValues();
 
  const [fetchInfo, setFetchInfo] = useState(
    {
      userRole: userRole,
      email: userData.email,
    }
    );
 
  const [userdetails, setUserDetails] = useState([]);
  const [formData, setFormData] = useState({userRole: userRole});
  const [successMessage, setSuccessMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  console.log(editMode);
  useEffect(() => {
    axios.post('http://localhost:8000/api/auth/fetchprofile', fetchInfo)
      .then(res => {
        const { userFound, userInfo } = res.data;
        setUserDetails({ ...userFound, ...userInfo });
      }
      )
      .catch(err => console.log(err));
    }, [editMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post(
      `http://localhost:8000/api/auth/profile`,
      formData
    )
    .then(res => {    
    if(res.data===true)
            {
              setEditMode(false);
                setSuccessMessage("Profile Updated successfully!");
                setIsOpen(true);
            }
            else{
                setSuccessMessage("Form Submission Failed: Invalid data entered. Please check the information you have entered and try again.");
                setIsOpen(true);
            }
            console.log(res.data);
    })
    .catch(error => {
      console.log(error);
      // handle the error, e.g. show an error message
    });
    };
      // creating function for any changes in form fields
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  return (
    <div className="container my-5">
      <div className="main-body p-5">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Client"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>{userdetails.firstName}</h4>
                    <p className="text-secondary mb-1">{userRole}</p>
                    {/* <p className="text-muted font-size-sm">
                      Delmonte Crescent, CA
                    </p> */}
                    {/* <button className="btn btn-primary">Follow</button>
                    <button className="btn btn-outline-primary">Message</button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-globe mr-2 icon-inline"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Website
                  </h6>
                  <span className="text-secondary">https://cyglera.com</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-github mr-2 icon-inline"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Github
                  </h6>
                  <span className="text-secondary">cyglera</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-twitter mr-2 icon-inline text-info"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    Twitter
                  </h6>
                  <span className="text-secondary">@cyglera</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-instagram mr-2 icon-inline text-danger"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </h6>
                  <span className="text-secondary">cyglera</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </h6>
                  <span className="text-secondary">cyglera</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Title</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='title' onChange={handleChange} placeholder='Mr/Mrs' defaultValue={userdetails.title} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary ' name='firstName' onChange={handleChange} placeholder='First Name' defaultValue={userdetails.firstName} disabled={!editMode}/>
                  
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Middle Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='middleName' onChange={handleChange} placeholder='Middle Name' defaultValue={userdetails.middleName} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Names</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='lastName' onChange={handleChange} placeholder='Last Name' defaultValue={userdetails.lastName} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='gender' onChange={handleChange} placeholder='Gender' defaultValue={userdetails.gender} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Date of Birth</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="date" className='form-control col-sm-9 text-secondary' name='dateofbirth' placeholder='Date of Birth'/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Martial Status</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='martialStatus' onChange={handleChange} placeholder='Martial Status' defaultValue={userdetails.martialStatus} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Family Physician</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='familyPhysician' onChange={handleChange} placeholder='Family Physician' defaultValue={userdetails.familyPhysician} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="email" className='form-control col-sm-9 text-secondary' name='email' onChange={handleChange} placeholder='Email Address' defaultValue={userdetails.email} disabled={!editMode}/>
                  </div>
                </div>
                {userRole !== CLIENT && (
                  <div>
                <div>
                  <hr/>
                  <div className="row">
                    
                    <div className="col-sm-3">
                      <h6 className="mb-0">Area of Focus</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className='form-control col-sm-9 text-secondary' name='areaOfFocus' onChange={handleChange} placeholder='Area of Focus' defaultValue={userdetails.areaOfFocus} disabled={!editMode}/>
                    </div>
                  </div>
                </div>

            <div>
            <hr/>
            <div className="row">
              
              <div className="col-sm-3">
                <h6 className="mb-0">Professional Summary</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className='form-control col-sm-9 text-secondary' name='professionalSummary' onChange={handleChange} placeholder='professional summary' defaultValue={userdetails.professionalSummary} disabled={!editMode}/>
              </div>
            </div>
            </div>

            <div>
                  <hr/>
                  <div className="row">
                    
                    <div className="col-sm-3">
                      <h6 className="mb-0">Professional Approach</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className='form-control col-sm-9 text-secondary' name='professionalApproach' onChange={handleChange} placeholder='professional approach' defaultValue={userdetails.professionalApproach} disabled={!editMode}/>
                    </div>
                  </div>
                </div>
                <div>
                  <hr/>
                  <div className="row">
                    
                    <div className="col-sm-3">
                      <h6 className="mb-0">Years Of Experience</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className='form-control col-sm-9 text-secondary' name='yearsOfExperience' onChange={handleChange} placeholder='Years of Experience' defaultValue={userdetails.yearsOfExperience} disabled={!editMode}/>
                    </div>
                  </div>
                </div>
                </div>
                
                )}
                <hr />                
              </div>
            </div>
          </div>
        </div>
        
        <div className="row gutters-sm">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card-body">
              <h3>Primary Address</h3>
              <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 1</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control col-sm-9 text-secondary" name="address" onChange={handleChange} placeholder="Address Line 1" defaultValue={userdetails.address} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 2</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='addressLine2' onChange={handleChange} placeholder='Address Line 2' defaultValue={userdetails.addressLine2} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='city' onChange={handleChange} placeholder='City' defaultValue={userdetails.city} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Province/State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='province' onChange={handleChange} placeholder='Province/State' defaultValue={userdetails.province} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Postal Code/Zip Code</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='postalCode' onChange={handleChange} placeholder='Postal Code/Zip Code' defaultValue={userdetails.postalCode} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Country</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='country' onChange={handleChange} placeholder='Country' defaultValue={userdetails.country} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='phone' onChange={handleChange} placeholder='Mobile' defaultValue={userdetails.phone} disabled={!editMode}/>
                  </div>
                </div>


                <hr />
                <h3>Billing Address</h3>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 1</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control col-sm-9 text-secondary" name="billingAddressLine1" onChange={handleChange} placeholder="" defaultValue={userdetails.billingAddressLine1} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 2</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='billingAddressLine2' onChange={handleChange} placeholder='Address Line 2' defaultValue={userdetails.billingAddressLine2} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='billingCity' onChange={handleChange} placeholder='City' defaultValue={userdetails.billingCity} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Province/State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='billingProvince' onChange={handleChange} placeholder='Province/State' defaultValue={userdetails.billingProvince} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Postal Code/Zip Code</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='billingPostalCode' onChange={handleChange} placeholder='Postal Code/Zip Code' defaultValue={userdetails.billingPostalCode} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Country</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='billingCountry' onChange={handleChange} placeholder='Country' defaultValue={userdetails.billingCountry} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='billingPhone' onChange={handleChange} placeholder='Mobile' defaultValue={userdetails.billingPhone} disabled={!editMode}/>
                  </div>
                </div>



                <hr />
                <h3>Shipping Address</h3>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 1</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control col-sm-9 text-secondary" name="shippingAddressLine1" onChange={handleChange} placeholder="" defaultValue={userdetails.shippingAddressLine1} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 2</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='shippingAddressLine2' onChange={handleChange} placeholder='Address Line 2' defaultValue={userdetails.shippingAddressLine2} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='shippingCity' onChange={handleChange} placeholder='City' defaultValue={userdetails.shippingCity} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Province/State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='shippingProvince' onChange={handleChange}  placeholder='Province/State' defaultValue={userdetails.shippingProvince} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Postal Code/Zip Code</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='shippingPostalCode' onChange={handleChange} placeholder='Postal Code/Zip Code' defaultValue={userdetails.shippingPostalCode} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Country</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='shippingCountry' onChange={handleChange} placeholder='Country' defaultValue={userdetails.shippingCountry} disabled={!editMode}/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className='form-control col-sm-9 text-secondary' name='shippingPhone' onChange={handleChange} placeholder='Mobile' defaultValue={userdetails.shippingPhone} disabled={!editMode}/>
                  </div>
                </div>


                <hr />
                {!editMode ?(
                  <>
                  <div className="row ">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <a
                      className="btn btn-info"
                      target="__blank"
                      onClick={() => setEditMode(true)}
                    >
                      Edit
                    </a>
                  </div>
                </div>
                  </>
                ):(
                  <>
                  <div className="row ">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <a
                      className="btn btn-info"
                      target="__blank"
                      onClick={handleSubmit}
                    >
                      Update
                    </a>
                  </div>
                </div>
                  </>
                )}
                {/* <div className="row ">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <a
                      className="btn btn-info"
                      target="__blank"
                      href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      onClick={handleSubmit}
                    >
                      Update
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
        <Alert color="success" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
            {successMessage}
        </Alert> 
        </div>
      </div>
    </div>
  );
}

export default Profile;
