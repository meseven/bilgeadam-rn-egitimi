import React from 'react';
import {Text, Input, Content, Item, Button} from 'native-base';

import {useFormik} from 'formik';
import validationSchema from './validations';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Content>
      <Item regular error={formik.errors.email && formik.touched.email}>
        <Input
          placeholder="email"
          keyboardType="email-address"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={() => formik.setFieldTouched('email')}
          autoCapitalize="none"
        />
        {formik.errors.email && formik.touched.email && (
          <Text style={{color: 'red'}}>{formik.errors.email}</Text>
        )}
      </Item>
      <Item regular error={formik.errors.password && formik.touched.password}>
        <Input
          placeholder="password"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={() => formik.setFieldTouched('password')}
        />
        {formik.errors.password && formik.touched.password && (
          <Text style={{color: 'red'}}>{formik.errors.password}</Text>
        )}
      </Item>
      <Item
        regular
        error={formik.errors.passwordConfirm && formik.touched.passwordConfirm}>
        <Input
          placeholder="password confirm"
          secureTextEntry
          value={formik.values.passwordConfirm}
          onChangeText={formik.handleChange('passwordConfirm')}
          onBlur={() => formik.setFieldTouched('passwordConfirm')}
        />
        {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
          <Text style={{color: 'red'}}>{formik.errors.passwordConfirm}</Text>
        )}
      </Item>

      <Button
        block
        style={{margin: 10}}
        onPress={formik.handleSubmit}
        disabled={!formik.isValid}>
        <Text>Signup</Text>
      </Button>
    </Content>
  );
};

export default SignupForm;
