import axios from "axios";

const UpdatePwdApiCall = async (data, jwtToken) => {
  //data -> {oldPwd,newPwd}
  try {
    const response = await axios.put(
      `http://localhost:8000/api/client/changePwd`,
      data,
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

export default UpdatePwdApiCall;
