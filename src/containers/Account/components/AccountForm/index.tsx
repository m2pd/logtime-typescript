import { Box, Button, CircularProgress } from '@material-ui/core';
import { Formik , Form, FastField} from 'formik';
import React, { useState,useEffect } from 'react';
import InputField from '../../../../custom-field/InputFiled';
import {connect} from 'react-redux';
import './AccountForm.scss';
// import { InitialValues } from '../../pages/Main'

const AccountForm: React.FC<IProps> = (props) =>{
		const {initialValues,onSubmit}:IProps = props;

		console.log(initialValues)
		return(
				<div>
						<Formik initialValues = {initialValues} onSubmit={onSubmit}>
								{(formikProps) => {
										const {values, errors, touched, isSubmitting} = formikProps;
										return(
												<Form className='page-form account-page-form'>
														<FastField
																name="userName"
																label="Tên đăng nhập"
																type="text"
																component={InputField}
																size="small"
																disabled={true}
																variant='filled'
														/>
														<FastField
																name="email"
																label="Email"
																type="email"
																component={InputField}
																size="small"
														/>
														<FastField
																name="phoneNumber"
																label="Số điện thoại"
																type="text"
																component={InputField}
																size="small"
														/>
														<FastField
																name="fullName"
																label="Họ và tên"
																type="text"
																component={InputField}
																size="small"
														/>
														<FastField
																name="password"
																label="Đổi mật khẩu"
																type="password"
																component={InputField}
																size="small"
														/>
														<Button type='submit' variant='outlined' color='primary'>
															{isSubmitting ? <Box mr={1}><CircularProgress size={20} color="secondary" /></Box> : ""}
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