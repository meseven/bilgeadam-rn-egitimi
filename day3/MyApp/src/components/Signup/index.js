import React from 'react';
import {Header, Body, Title} from 'native-base';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <>
      <Header>
        <Body>
          <Title>Signup</Title>
        </Body>
      </Header>

      <SignupForm />
    </>
  );
};

export default Signup;
