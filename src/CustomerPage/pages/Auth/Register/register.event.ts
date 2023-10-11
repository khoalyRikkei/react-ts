// Các event trong trang register

import { I_UserRegister } from "../../../types/registerType";
import RegisterServices from "./register.services";

const registerServices = new RegisterServices();
class RegisterEvent {
  onRegister(dataForm: I_UserRegister) {
    // validator form --> status
    const errorResponse = registerServices.validator(dataForm);

    if (errorResponse.isError) {
      // thông báo người dùng

      return;
    }

    // --> đăng ký --> status, data, message
    const registerResponse = registerServices.register(dataForm);

    if (registerResponse.status === "success") {
      // Điều hướng
    }
  }
}

export default RegisterEvent;
