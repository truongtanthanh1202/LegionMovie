import axios from "axios";

// endpoints
const baseAPI = process.env.EXPO_PUBLIC_API_URL;
const loginAPI = `${baseAPI}/users/login`;
const registerAPI = `${baseAPI}/users/`;
const changePasswordAPI = `${baseAPI}/users/changePass`;

export type LoginRequestBody = {
  email: string;
  password: string;
};

export type RegisterRequestBody = {
  email: string;
  password: string;
  name: string;
};

export type ChangePasswordRequestBody = {
  idUser: string;
  passCurrent: string;
  passNew: string;
};

export const apiLogin = async (body: LoginRequestBody) => {
  const options = {
    method: "POST",
    url: loginAPI,
    data: body,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const apiRegister = async (body: RegisterRequestBody) => {
  const options = {
    method: "POST",
    url: registerAPI,
    data: body,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const apiChangePassword = async (body: ChangePasswordRequestBody) => {
  const options = {
    method: "POST",
    url: changePasswordAPI,
    data: body,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
