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
}

const TimeSheetList:React.FC<IProps> = (props) => {
  const {data, userRoles, onTimeSheetEditClick, onTimeSheetRemoveClick, onTimeSheetViewDetailsClick} = props;

  const columns = [
    {
     name: "id",
     label: "STT",
     options: {
      sort: false,
      filter: false,
      customBodyRenderLite:(dataIndex:any) => {
      let index = dataIndex + 1;
       return (
         <div>
           <p onClick={() => console.log(dataIndex)}>{index}</p>
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
      customBodyRender:(value:any) => {
        let dataDay = dayjs(value).format('YYYY-MM-DD');
        return(
          <div style={{ width: '90px' }}>
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
      sort: true,
      filter: true,
      customBodyRender:(value:any) => {
        return(
          <div style={{ width: '70px' }}>
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
      customBodyRender:(value:any) => {
        return(
          <div style={{ width: '150px' }}>
            {value}
          </div>
        );
      }
     },
    },
    {
     name: "projectTitle",
     label: "Dự án",
    },
    {
     name: "description",
     label: "Mô tả",
     options: {
      sort: true,
      filter: true,
     },
    },
    {
     name: "overtime",
     label: "Hình thức",
     options: {
      customBodyRender:(value:any) => {
        return(
          <div style={{ width: '70px' }}>
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
        customBodyRender:(value:any) => {
          const valueActionLogtime:string = parseActionLogtime(value)
          return(
            <div style={{ width: '70px' }}>
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
          <div style={{textAlign: 'center'}}>
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
         }
      }
    },
   ];

  const options:any = {
    filterType: 'dropdown',
    selectableRows:false,
    responsive: "scroll",
    fixedHeader: true,
    textLabels: {
      body: {
        noMatch: 'Không tìm thấy kết quả'
      }
    },
    onDownload: (buildHead:any, buildBody:any, columns:any, data:any) => {
      return "\uFEFF" + buildHead(columns) + buildBody(data); 
    },
    //Custom row render check has is enable block
    setRowProps: (row: any, dataIndex: number, rowIndex: number) => {
      console.log({row, dataIndex, rowIndex})
      return{
        className: 'active'
      }
    },
  };
  
  return(
    <div style={{  width: '100%' }} className="logtime-list">
      <MUIDataTable
        title={"Các bạn nhớ logtime mỗi ngày nha ❤️"}
        data={data.logtimeCurrent}
        columns={columns}
        options={options}
      />
    </div>
  )
}

export default TimeSheetList;
