import { ADMIN, CLIENT, DIETICIAN, TRAINER } from "../helpers/UserRoles";
import useStateValues from "./useStateValues";

const useRole = () => {
  const { userData } = useStateValues();
  const role = userData ? userData.userRole : null;

  //getting role from state
  switch (role) {
    case ADMIN: {
      return ADMIN;
    }
    case CLIENT: {
      return CLIENT;
    }
    case DIETICIAN: {
      return DIETICIAN;
    }
    case TRAINER: {
      return TRAINER;
    }
    default: {
      return false;
    }
  }
};

export default useRole;
