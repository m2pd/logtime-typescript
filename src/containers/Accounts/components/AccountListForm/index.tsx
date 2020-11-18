import { Button } from '@material-ui/core';
import { Formik, Form, FastField } from 'formik';
import React from 'react'
import CheckBoxField from '../../../../custom-field/CheckBoxFiled';
import InputField from '../../../../custom-field/InputFiled';
import './AccountListForm.scss';

interface IProps {
  onSubmit: any
}


const AccountListForm:React.FC<IProps> = props =>{
  const {onSubmit} = props;
  const initialValues = {
    password: '',
    fullName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    team: '',
    roles : [],
    active:true,
  };

  return(
    <div>
      <Formik enableReinitialize initialValues = {initialValues} onSubmit={onSubmit}>
        {(formikProps) =>{
            return(
              <Form className="page-form register-page-form">
                <FastField
                  name="userName"
                  label="Tên đăng nhập"
                  type="text"
                  component={InputField}
                  size="norman"
                />
                <FastField
                  name="password"
                  label="Đổi mật khẩu"
                  type="password"
                  component={InputField}
                  size="norman"
                />
                <FastField
                  name="email"
                  label="Email"
                  type="email"
                  component={InputField}
                  size="norman"
                />
                <FastField
                  name="phoneNumber"
                  label="Số điện thoại"
                  type="text"
                  component={InputField}
                  size="norman"
                />
                <FastField
                  name="fullName"
                  label="Họ và tên"
                  type="text"
                  component={InputField}
                  size="norman"
                />
                <FastField
                  name="roles"
                  label="Vai trò"
                  type="checkbox"
                  component={CheckBoxField}
                  size="norman"
                />
                <FastField
                  name="team"
                  label="Nhóm"
                  type="text"
                  component={InputField}
                  size="norman"
                />
                <Button type='submit' variant='contained' color='primary'>
                    Thêm Tài khoản
                </Button>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default AccountListForm;