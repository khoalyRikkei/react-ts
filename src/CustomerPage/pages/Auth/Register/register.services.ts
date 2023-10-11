import { I_UserEntity } from "../../../types/entities";
import { I_UserRegister } from "../../../types/registerType";
import RegisterRepository from "./register.repository";

export {};

const registerRepository = new RegisterRepository();
export default class RegisterServices {
  register(dataForm: I_UserRegister) {
    const entity_user: I_UserEntity = {
      email: dataForm.email,
      password: dataForm.password,
      firstName: dataForm.firstName,
      lastName: dataForm.lastName,
      created_at: new Date().toUTCString(),
    };

    const users = registerRepository.getAllUser();
    const userExists = users.find((item) => item.email === entity_user.email);

    if (!userExists) {
      const ret = registerRepository.insertUser(entity_user);

      if (ret) {
        return {
          status: "success",
          data: ret,
          message: "Đăng ký thành công",
        };
      }
      return {
        status: "failure",
        data: ret,
        message: "Đăng ký thất bại",
      };
    }

    return {
      status: "failure",
      message:
        "Email đã tồn tại, vui lòng đăng nhập hoặc đăng ký bằng một tài khoản khác",
    };
  }

  validator(dataForm: I_UserRegister) {
    return {
      isError: true,
      emailMsg: "",
      passwordMsg:"",
      
    };
  }
}
