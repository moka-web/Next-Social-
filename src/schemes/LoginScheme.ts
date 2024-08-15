import * as yup from "yup";
 
   
export const LoginScheme = yup
.object({
  username: yup.string().required(),
  password: yup.string().required(),
})
.required();
