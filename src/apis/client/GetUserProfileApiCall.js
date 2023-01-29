import axios from "axios";

const GetUserProfileApiCall = async (userId, jwtToken) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/client/profile/${userId}`,
      {
        headers: {
          authorization: `BEARER ${jwtToken}`,
        },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export default GetUserProfileApiCall;
