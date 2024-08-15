import * as yup from "yup";
 
   
export const RegisterScheme = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    photoUrl: yup.string().required(),
  })
  .required();
