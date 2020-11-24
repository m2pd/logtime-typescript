import { Button } from '@material-ui/core';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import InputField from '../../../../custom-field/InputFiled';
import './AccountForm.scss';
// import { InitialValues } from '../../pages/Main'

const AccountForm: React.FC<IProps> = (props) =>{
		const {initialValues,onSubmit}:IProps = props;

		return(
				<div>
						<Formik enableReinitialize initialValues = {initialValues} onSubmit={onSubmit}>
								{(formikProps) => {
										//Default formikProps have : values, errors, touched, isSubmitting
										// const {values, errors, touched, isSubmitting} = formikProps;
										// const {values, errors, touched, isSubmitting} = formikProps;
										return(
												<Form className='page-form account-page-form'>
														<FastField
																name="userName"
																label="Tên đăng nhập"
																type="text"
																component={InputField}
																size="medium"
																disabled={true}
																variant='filled'
														/>
														<FastField
																name="email"
																label="Email"
																type="email"
																component={InputField}
																size="medium"
														/>
														<FastField
																name="phoneNumber"
																label="Số điện thoại"
																type="text"
																component={InputField}
																size="medium"
														/>
														<FastField
																name="fullName"
																label="Họ và tên"
																type="text"
																component={InputField}
																size="medium"
														/>
														<FastField
																name="password"
																label="Đổi mật khẩu"
																type="password"
																component={InputField}
																size="medium"
														/>
														<Button type='submit' variant='outlined' color='primary'>
															Cập nhật
														</Button>
												</Form>
										)
								}}
						</Formik>
				</div>
		)
}

const mapStateToProps = (state:any) =>{
	return{
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(AccountForm);

interface IProps{
	initialValues: any;
	onSubmit: any;
	currentUser:any;
}

interface IState{
	initialValuesForm:any
}