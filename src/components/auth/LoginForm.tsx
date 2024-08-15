"use client";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";

import authApi from "@/services/auth/auth.api";
import { AccesDeniedError } from "@/services/common/http.error";
import { useRouter } from "next/navigation";
import { LoginScheme } from "@/schemes/LoginScheme";

type FormData = {
  username: string;
  password: string;
};



export default function LoginForm() {
  // const {register,handleSubmit} = useForm <FormData>();
  const [serverError, setServerError] = useState<string | null >(null)
  const methods = useForm<FormData>({ resolver: yupResolver(LoginScheme) });

  const router=useRouter()
  
  const {handleSubmit} = methods;

  const onSubmit = async (data: FormData) => {

    setServerError(null);
    router.push('/')

    try {
      
      const loginResponse = await authApi.login(data.username,data.password)
      console.log(JSON.stringify(loginResponse));
    } catch (error) {
      if (error instanceof AccesDeniedError) {
        setServerError('tus credenciales son invalidas')
      }else{
        setServerError('ha ocurrido un error, intente nuevamente mas tarde mostri')
      }
    }

    router.refresh();
    return false;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <InputText
          label="Nombre de usuario"
          fieldName="username"
          styles="mt-4"
          placeholder="Tu usuario"
          type="text"
        />

        <InputText
          label="Contraseña bebe aca "
          fieldName="password"
          styles="mt-4"
          placeholder="Tu clave"
          type="password"
        />

        <SubmitButton
          label="inicia sesion"
          onSubmit={onSubmit}
          styles="mt-4"
        ></SubmitButton>
        { serverError !== null &&
        <div className="w-full h-[6rem] text-center  p-8 mt-4 text-white bg-red-800 font-bold ">
          {serverError}
        </div>

        }

      </form>
    </FormProvider>
  );
}
