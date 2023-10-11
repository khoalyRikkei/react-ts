import { I_UserEntity } from "../../../types/entities";
import { I_UserRegister } from "../../../types/registerType";
import RegisterRepository from "./register.repository";

export {};

const registerRepository = new RegisterRepository();
export default class RegisterServices {
  register(dataForm: I_UserRegister) {
    const users = registerRepository.getAllUser();
    const userExists = users.find((item) => item.email === dataForm.email);
    // Kiểm tra email tồn tại
    if (userExists) {
      return {
        status: "failure",
        message: {
          emailMsg:
            "Email đã tồn tại, vui lòng đăng nhập hoặc đăng ký bằng một tài khoản khác",
        },
        data: 0,
      };
    }

    const entity_user: I_UserEntity = {
      email: dataForm.email,
      password: dataForm.password,
      firstName: dataForm.firstName,
      lastName: dataForm.lastName,
      created_at: new Date().toISOString(),
      role: "customer",
      status: true,
    };
    const ret = registerRepository.insertUser(entity_user) as number;
    if (ret) {
      return {
        status: "success",
        data: ret,
        message: {},
      };
    }
    return {
      status: "success",
      data: ret,
      message: {},
    };
  }

  validator(dataForm: I_UserRegister) {
    return {
      status: "failure",
      data: 0,
      message: {
        emailMsg: "Email không đúng định dạng",
        password: "Password phải điền đủ",
      },
    };
  }
}
