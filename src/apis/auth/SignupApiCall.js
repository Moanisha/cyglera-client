import axios from "axios";

const SignupApiCall = async (data) => {
  // data -> {email,password,name,userRole}
  try {
    const response = await axios.post(
      `http://localhost:8000/api/auth/signup`,
      data
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export default SignupApiCall;
