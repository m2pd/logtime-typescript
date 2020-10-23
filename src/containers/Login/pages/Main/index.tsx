import { Box, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
// import { fetchUserAuthRequest } from '../../../../redux/actions/userAuthActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../../assets/images/logo-mitech.png';
import { login } from '../../../../redux/actions/authAction';
import LoginForm, { MyFormValues } from '../../components/LoginForm';
import './Main.scss';



const theme = createMuiTheme({
  // overrides: {
  //   MuiFormLabel: {
  //     root: {
  //       '&$focused': {
  //         fontWeight: 'bold',
  //         borderColor: 'red',
  //       },
  //       '&:hover $notchedOutline': {
  //         borderColor: 'orange',
  //       },
  //     },
  //     focused: {},
  //   },
  // },
});

interface IProps{
  isLoggedIn: boolean;
  history: {
    push(url: string): void;
  };
  dispatch: any 
}

const initialValues:MyFormValues = {
  username: '',
  password: '',
  ipLocal: '',
};


function MainLoginPage(props:IProps) {

  const [loading, setLoading] = useState(false)
  const {isLoggedIn} = props;

  if(isLoggedIn){
    return <Redirect to="/account" />;
  }

  const handleSubmit = (values:any) => {
    console.log('Form Submit:', values);
    const { dispatch, history } = props;
    setLoading(true)
    dispatch(login(values))
    .then(() => {
      history.push('/dashboard');
      // window.location.reload();
    })
    .catch(() => {
      setLoading(false)      
    })
    
    
  };
  return (
    <MuiThemeProvider theme={theme}>
      <div className='login-page'>
        <div className='box-login'>
          <Grid container direction="column-reverse" alignItems="center" spacing={3} >
            <Grid item xs={12}>
              <Box className='box__form'>
                <h3 className='heading-3 box__title'>Đăng nhập</h3>
                <div className='box__description'>
                  Đăng nhập để bắt đầu làm việc với MITECH WORKPLACE
                </div>
                <LoginForm
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                />
              </Box>
            </Grid>
            <Grid item xs={12} className='custom-flex'>
              <Box className='box__info'>
                <img src={logo} alt='logo' />
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state:any) => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    message : state.message.message
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // fetchUserAuthRequest: (user) => dispatch(fetchUserAuthRequest(user)),
//     login: user => dispatch(user)
//   };
// };
export default connect(mapStateToProps)(MainLoginPage);
