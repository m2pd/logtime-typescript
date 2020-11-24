import { default as dayjs } from 'dayjs';
import MUIDataTable from "mui-datatables";
import React, { Fragment } from 'react';
import './TimeSheetList.scss';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import parseActionLogtime from '../../../../utils/parseActionLogtime'

interface IProps{
  data:any;
  onTimeSheetEditClick:Function;
  onTimeSheetRemoveClick:Function;
  onTimeSheetViewDetailsClick:Function;
  // onTimeSheetBlockClick:Function;
  userRoles: string[];
  showDefault?: boolean;
}

const TimeSheetList:React.FC<IProps> = (props) => {
  const {data, userRoles,showDefault, onTimeSheetEditClick, onTimeSheetRemoveClick, onTimeSheetViewDetailsClick} = props;
  
  const columns = [
    {
     name: "id",
     label: "STT",
     options: {
      display: showDefault,
      sort: false,
      filter: false,
      customBodyRender:(value:any,tableMeta:any) => {
      let index = tableMeta.rowIndex + 1;
      const isBlock = tableMeta.rowData[8];
       return (
         <div>
           <p className={isBlock ? '' : 'block'}>{index}</p>
         </div>
         );
       }
    }
    },
    {
     name: "date",
     label: "Thời gian",
     options: {
      filter: true,
      sort: true,
      customBodyRender:(value:any, tableMeta:any) => {
        let dataDay = dayjs(value).format('YYYY-MM-DD');
        const isBlock = tableMeta.rowData[8];

        return(
          <div className={isBlock ? '' : 'block'} style={{ width: '90px' }}>
            {dataDay}
          </div>
        );
      }
     }
    },
    {
     name: "cost",
     label: "Số giờ",
     options: {
      display: showDefault,
      sort: true,
      filter: true,
      customBodyRender:(value:any, tableMeta:any) => {
        const isBlock = tableMeta.rowData[8];
        return(
          <div className={isBlock ? '' : 'block'} style={{ width: '70px' }}>
            {value}
          </div>
        );
      }
     }
    },
    {
     name: "title",
     label: "Công việc",
     options: {
      sort: true,
      filter: true,
      customBodyRender:(value:any, tableMeta:any) => {
        const isBlock = tableMeta.rowData[8];
        return(
          <div className={isBlock ? '' : 'block'} style={{ width: '100px' }}>
            {value}
          </div>
        );
      }
     },
    },
    {
     name: "projectTitle",
     label: "Dự án",
     options: {
       customBodyRender:(value:any, tableMeta:any) => {
        const isBlock = tableMeta.rowData[8];
        return(
          <div className={isBlock ? '' : 'block'} style={{ width: '100px' }}>
            {value}
          </div>
        );
      },
     }
    },
    {
     name: "description",
     label: "Mô tả",
     options: {
      display: showDefault,
      sort: true,
      filter: true,
      customBodyRender:(value:any, tableMeta:any) => {
        const isBlock = tableMeta.rowData[8];
        return(
          <div className={isBlock ? '' : 'block'} style={{ width: '100px' }}>
            {value}
          </div>
        );
      },
     },
    },
    {
     name: "overtime",
     label: "Hình thức",
     options: {
      customBodyRender:(value:any) => {
        return(
          <div>
            {value ? <Chip label="Làm thêm giờ"  color="secondary"/> : <Chip label="Thông thường"  color="primary" />}
          </div>
        );
      }
     }
    },
    {
      name: "activity",
      label: "Hoạt động",
      options: {
        customBodyRender:(value:any, tableMeta:any) => {
          const valueActionLogtime:string = parseActionLogtime(value);
          const isBlock = tableMeta.rowData[8];
          return(
            <div className={isBlock ? '' : 'block'} style={{ width: '70px' }}>
              {valueActionLogtime}
            </div>
          );
        }
       },
    },
    {
      name: "enable",
      label: "Thao tác",
      options: {
        customBodyRender:(value:any, tableMeta:any, updateValue:any) => {
        return (
          <div className={value ? '' : 'block'} style={{textAlign: 'center', width: 90}}>
            {
              //Leader only show button Edit and Remove
              (( userRoles.includes('Leader') || value ))
              ?  ( <Fragment>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => onTimeSheetRemoveClick(tableMeta.rowData)}
                      startIcon={<DeleteIcon />}
                      className="btn-operation btn-operation--delete"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => onTimeSheetEditClick(tableMeta.rowData)}
                      startIcon={<EditIcon />}
                      className="btn-operation btn-operation--edit"
                    />
                  </Fragment>
                )
              : <Fragment>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onTimeSheetViewDetailsClick(tableMeta.rowData)}
                    startIcon={<VisibilityIcon />}
                    className="btn-operation btn-operation--edit"
                  />
               </Fragment>
            }
           </div>
           );
         },
      }
    },
   ];

  const options:any = {
    filterType: 'dropdown',
    selectableRows: 'none',
    responsive: "standard",
    fixedHeader: true,
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
    //Custom row render check has is enable block
    setRowProps: (row: any, dataIndex: number, rowIndex: number) => {
      // console.log(row[8].props.className)
      if(row[8].props.className === 'block'){
        return{
          className: 'active'
        }
      }
    },
  };
  
  return(
    <div style={{  width: '100%' }} className="logtime-list">
      <MUIDataTable
        title={"Các bạn nhớ logtime mỗi ngày nha ❤️"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  )
}

export default TimeSheetList;
