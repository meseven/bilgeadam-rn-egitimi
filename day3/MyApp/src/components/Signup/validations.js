import * as Yup from 'yup';

const validations = Yup.object().shape({
  email: Yup.string().email('Geçersiz e-mail.').required('Bir e-email girin.'),
  password: Yup.string().min(3, 'En az üç karakter girin.').required(),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Parolalar eşleşmiyor.')
    .required(),
});

module.exports = validations;
