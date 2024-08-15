
import { FieldValues, useFormContext } from "react-hook-form";



type InputTextProps = {
    styles?: string;
    label :string ; 
    placeholder?:string;
    fieldName:string;
   type : "text" | "password"
}


export default function InputText ({styles,label,placeholder, fieldName,type}:InputTextProps){


    const {register,formState:{errors}} = useFormContext();

    return(
        <div className={` mt-4 flex flex-col ${styles ?? ""} `}>
        <label className="mb-2" >{label}</label>
        <input {...register(fieldName)} className="   mb-4 rounded bg-gray-50 border border-gray-200" type={type} placeholder={placeholder ?? ""}/> 

        {errors && errors[fieldName] &&  <div className="text-red-600 mt-2"> este campo es obligatorio ! </div> }
       
    </div>

    )

}