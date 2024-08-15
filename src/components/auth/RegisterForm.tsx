"use client";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";
import { RegisterScheme } from "@/schemes/RegisterScheme";
import authApi from "@/services/auth/auth.api";
import { ConflictError } from "@/services/common/http.error";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  username: string;
  password: string;
  name: string;
  photoUrl: string;
};



export default function RegisterForm() {

  const [serverError,setServerError] = useState<string | null >(null)
  const methods = useForm<FormData>({ resolver: yupResolver(RegisterScheme) });
  const router=useRouter()
  const {handleSubmit} = methods;

  const onSubmit = async (data: FormData) => {
    router.push('/')

    try {
      
      const registerResponse = await authApi.register(data.username,data.password,data.name,data.photoUrl)
      console.log(JSON.stringify(registerResponse));
    } catch (error) {
      if (error instanceof ConflictError) {
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

        <InputText
          label="Nombre "
          fieldName="name"
          styles="mt-4"
          placeholder="Tu nombre"
          type="text"
        />

        <InputText
          label="Foto de perfil "
          fieldName="photoUrl"
          styles=" mb-4 "
          placeholder="photo"
          type="text"
        />

        <div className="mt-4">
          <SubmitButton label="Crear cuenta" onSubmit={onSubmit} />
        </div>
        { serverError !== null &&
        <div className="w-full h-[6rem] text-center  p-8 mt-4 text-white bg-red-800 font-bold ">
          {serverError}
        </div>

        }
      </form>
    </FormProvider>
  );
}
