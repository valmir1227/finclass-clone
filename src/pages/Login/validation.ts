import * as yup from "yup";

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    password: yup
      .string()
      .required("Senha é obrigatório")
      .min(6, "E pelo menos 6 caracteres"),
  })
  .required();
