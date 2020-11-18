import { Button } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import React, { Fragment } from 'react';
import { User } from '../../../../constaints/interface';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './AccountsList.scss';

interface IProps{
  data: User[];
  onAccountRemoveClick: Function;
  onAccountEditClick: Function;
}

const AccountsList:React.FC<IProps> = props => {
  const  {data, onAccountRemoveClick, onAccountEditClick}  = props;
  const columns = [
    {
      name: "id",
      label: "STT",
      options: {
       sort: false,
       filter: false,
       customBodyRender:(value:any,tableMeta:any) => {
       let index = tableMeta.rowIndex + 1;
        return (
          <div>
            <p>{index}</p>
          </div>
          );
        }
    },
    },
    {
     name: "fullName",
     label: "Họ và tên",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "userName",
     label: "Tài khoản",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "email",
     label: "Email",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "phoneNumber",
     label: "SDT",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "roles",
     label: "Vài trò",
     options: {
      filter: true,
      sort: true,
      customBodyRender:(value:any,tableMeta:any) => {
         return (
           <div>
             {value.map((roles:string, index:number) => (
               <span key={index}>{roles},</span>
             ))}
           </div>
           );
        }
     }
    },
    {
      name: "team",
      label: "Team",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "active",
      label: "Thao tác",
      options: {
        customBodyRender:(value:any, tableMeta:any, updateValue:any) => {
        return (
          <div className={value ? "" : 'block'} style={{textAlign: 'center'}}>
            <Fragment>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onAccountRemoveClick(tableMeta.rowData)}
                startIcon={<DeleteIcon />}
                className="btn-operation btn-operation--delete"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => onAccountEditClick(tableMeta.rowData)}
                startIcon={<EditIcon />}
                className="btn-operation btn-operation--edit"
              />
            </Fragment>
          </div>
          );
        },
      }
    },
   ];

  // const data = [
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  // ];

const options:any = {
  filterType: 'checkbox',
  selectableRows:false,
  textLabels: {
    body: {
      noMatch: 'Không tìm thấy kết quả'
    },
    pagination: {
      rowsPerPage: "Số hàng trên trang:",
    }
  },
  onDownload: (buildHead:any, buildBody:any, columns:any, data:any) => {
    return "\uFEFF" + buildHead(columns) + buildBody(data); 
  },
};
  return(
    <div style={{  width: '100%' }} className="account-list">
      <MUIDataTable
        title={"Danh sách các thành viên ❤️"}
        data={data}
        columns={columns}
        options={options}
      />
  </div>
  )
}

export default AccountsList;