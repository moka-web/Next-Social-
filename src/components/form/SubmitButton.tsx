import { FieldValues, useFormContext } from "react-hook-form";



type SubmitButtonProps<T> = {
    styles?: string;
    label :string ; 
    onSubmit : (data: T) => void;
}



export default function SubmitButton <T extends FieldValues,>({ label ,styles,onSubmit}:SubmitButtonProps<T>){

    const {handleSubmit} = useFormContext<T>();




    return (
        <div className={`${styles ?? ""}`} >
        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className="  mt-4 uppercase font-semibold  button-primary   hover:bg-blue-400 "
        >
         {label} 
        </button>
      </div>
    )
}