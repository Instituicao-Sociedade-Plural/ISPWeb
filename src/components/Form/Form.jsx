import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyles } from "./styles";

export const Form = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    message: yup.string().required("Mensagem obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-column">
        <label>Nome:</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>
      <div className="flex-column">
        <label>Email:</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>
      <div className="flex-column-label">
        <label>Mensagem:</label>
        <textarea {...register("message")} />
        <p>{errors.message?.message}</p>
      </div>
      <div>
        <Button type="submit"> Enviar </Button>
      </div>
    </FormStyles>
  );
};
