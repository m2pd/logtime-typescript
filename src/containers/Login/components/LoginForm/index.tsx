import { Button, CircularProgress } from '@material-ui/core';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import LoadingIcon from '../../../../components/LoadingIcon';
import InputField from '../../../../custom-field/InputFiled';

export interface MyFormValues {
  username: string;
  password: string;
  ipLocal: string;
}

interface IProps{
  initialValues: MyFormValues;
  onSubmit:any;
}
// export type Props = MyFormValues | PropsOnSubmit;

const LoginForm: React.FC<IProps> = (props) => {
  const { initialValues, onSubmit }:IProps = props;
  return (
    <div>
      <Formik enableReinitialize  initialValues={initialValues} onSubmit={onSubmit}>
        {(formikProps) => {
          //do somthing here
          const { values, errors, touched, isSubmitting } = formikProps;
          // console.log({ values, errors, touched });
          return (
            <Form className='page-form'>
              <FastField
                name='username'
                component={InputField}
                label='Tài khoản'
                type='text'
                variant='outlined'
              />
              <FastField
                name='password'
                component={InputField}
                label='Mật khẩu'
                type='password'
                variant='outlined'
              />
              <Button type='submit' variant='outlined' color='primary'>
              {isSubmitting ? <LoadingIcon size={20} color="secondary" /> : ""}
                Đăng nhập
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
