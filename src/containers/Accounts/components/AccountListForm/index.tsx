import { Button } from '@material-ui/core';
import { Formik, Form, FastField, Field } from 'formik';
import React from 'react'
import { useHistory } from 'react-router-dom';
import CheckBoxDefaultField from '../../../../custom-field/CheckBoxDefault';
import CheckBoxField from '../../../../custom-field/CheckBoxFiled';
import InputField from '../../../../custom-field/InputFiled';
import RadioTimeSheetField from '../../../../custom-field/RadioTimeSheetField';
import './AccountListForm.scss';

interface IProps {
  onSubmit: any;
  isAddMode: boolean;
  initialValues: any;
}


const AccountListForm:React.FC<IProps> = props =>{
  const {onSubmit, isAddMode, initialValues} = props;
  const history = useHistory()
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
                  size="medium"
                  required={true}
                />
                <FastField
                  name="email"
                  label="Email"
                  type="email"
                  component={InputField}
                  size="medium"
                  required={true}
                />
                <FastField
                  name="phoneNumber"
                  label="Số điện thoại"
                  type="text"
                  component={InputField}
                  size="medium"
                  required={true}
                />
                <FastField
                  name="fullName"
                  label="Họ và tên"
                  type="text"
                  component={InputField}
                  size="medium"
                  required={true}
                />

                <div className="checkbox" role="group" aria-labelledby="checkbox-group">
                  <label className="checkbox__title">
                    Vai trò <span>*</span>
                  </label>
                  <label className="checkbox__desc">
                    <Field type="checkbox" name="roles" value="Admin" />
                    Admin
                  </label>
                  <label className="checkbox__desc">
                    <Field type="checkbox" name="roles" value="Leader" />
                    Leader
                  </label>
                  <label className="checkbox__desc">
                    <Field type="checkbox" name="roles" value="Common" />
                    Common
                  </label>
                </div>

                <FastField
                  name="team"
                  label="Nhóm"
                  type="text"
                  component={InputField}
                  size="medium"
                  required={true}
                />
                { 
                  !isAddMode 
                    ? <FastField
                        name="active"
                        label="Khóa Logtime"
                        labelChild1="Đóng"
                        labelChild2="Mở"
                        component={RadioTimeSheetField}
                        size="small"
                        required={true}
                      />
                    : null
                }

                <FastField
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  component={InputField}
                  size="medium"
                />
   
                <Button type='submit' variant='contained' color='primary'>
                    {isAddMode ? 'Thêm Tài khoản' : 'Câp nhật'}
                </Button>

                <Button variant='outlined' color='primary'  className="btn-back" onClick={() => history.push('/accounts')}>
                    Về trang danh sách
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