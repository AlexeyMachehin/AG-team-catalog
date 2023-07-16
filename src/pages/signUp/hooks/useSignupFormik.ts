import * as yup from 'yup';
import { useFormik } from 'formik';

interface IFormValue {
  firstName: string;
  email: string | null;
  password: string;
  passwordAgain: string;
}

interface IParams {
  onSubmit(values: IFormValue): void;
}

const initialValues = {
  firstName: '',
  email: '',
  password: '',
  passwordAgain: '',
};

export type ISignupFormValues = typeof initialValues;

export const useSignupFormik = ({ onSubmit }: IParams) => {
  const validationSchema = yup.object({
    firstName: yup.string(),
    email: yup
      .string()
      .required('Требуется электронная почта')
      .email('Введите валидный адрес электронной почты в формате : "user@mail.ru"'),
    password: yup
      .string()
      .min(8, 'Длина пароля должна составлять не менее 8 символов')
      .required('Требуется пароль'),
    passwordAgain: yup
      .string()
      .required('Требуется пароль')
      .min(8, 'Длина пароля должна составлять не менее 8 символов')
      .oneOf([yup.ref('password'), ''], 'Пароли не совпадают'),
  });

  return useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });
};
