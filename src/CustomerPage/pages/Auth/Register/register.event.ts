// Các event trong trang register

import { getItemsByConditions } from "../../../../utils/DB.util";
import { I_UserRegister } from "../../../types/registerType";
import RegisterServices from "./register.services";

const registerServices = new RegisterServices();

class RegisterEvent {
  onRegister(dataForm: I_UserRegister, navigate: Function) {
    // validator form --> status
    const errorResponse = registerServices.validator(dataForm);

    if (errorResponse) {
      // thông báo người dùng
      return errorResponse;
    }
    // --> đăng ký --> status, data, message
    const registerResponse = registerServices.register(dataForm);

    if (registerResponse.status === "success") {
      return registerResponse;
    } else {
      return registerResponse;
    }
  }

  // filter(conditions: any[]) {
  //   const data = getItemsByConditions("accounts", conditions);
  //   console.log("Kiểm tra data", data);
  // }
}

export default RegisterEvent;
