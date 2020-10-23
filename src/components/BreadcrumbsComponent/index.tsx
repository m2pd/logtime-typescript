import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout } from '../../redux/actions/authAction';
import './Breadscrums.scss';

interface IProps {
  user: any;
  history: {
    push(url: string): void;
  };
  location:any;
  logout: Function;
}

const BreadcrumbsComponent = (props:IProps) => {
    const { history, location :{pathname}, user } = props;
    const pathnames = pathname.split("/").filter((x:string) => x);
    
    if(!user){
      return <Redirect to="/login" />;
    }
    
    const onLogout = () =>{
      props.logout()
      toast.success("Đăng xuất tài khoản !", {
        position: toast.POSITION.TOP_LEFT
      });
      
    }

    return (
    <div className="breadcrumb-content"> 
      <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link className="breadcrumb-item" onClick={() => history.push("/dashboard")}>Home</Link>
        {
            pathnames.map((name:string,index:number) =>{
                const routeTo = `/${pathnames.slice(0,index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast 
                ?   
                        <Link className="breadcrumb-item active" key={index} color="textPrimary" onClick={() => history.push(routeTo)}>{name}</Link>
                    
                : (
                    
                        <Link className="breadcrumb-item" key={index}  color="inherit" onClick={() => history.push(routeTo)}>{name}</Link>
                    
                    )
            })
        }
      </Breadcrumbs>
      <button 
          className="btnF btnF--secondary btnF--logout"
          onClick={() => onLogout()}
      >
        
            <i className="fas fa-sign-out-alt"></i>
      </button>
      

    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch:any) =>{
  return{
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BreadcrumbsComponent));