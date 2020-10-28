import { default as dayjs } from 'dayjs';
import MUIDataTable from "mui-datatables";
import React from 'react';
import './TimeSheetList.scss';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import parseActionLogtime from '../../../../utils/parseActionLogtime'





interface IProps{
  data:any;
  // onTimeSheetEditClick:Function;
  // onTimeSheetRemoveClick:Function;
  // onTimeSheetViewDetailsClick:Function;
  // onTimeSheetBlockClick:Function;
}

const TimeSheetList:React.FC<IProps> = (props) => {
  const {data} = props;
  

  const handleEdit = (values:any):void =>{
    console.log(values)
    console.log(values)
  }

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
      name: "operation",
      label: "Thao tác",
      options: {
        customBodyRender:(value:any, tableMeta:any, updateValue:any) => {
        // console.log(tableMeta)
        return (
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => console.log(tableMeta.rowData)}
              startIcon={<DeleteIcon />}
              className="btn-operation btn-operation--delete"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => console.log(tableMeta.rowData)}
              startIcon={<EditIcon />}
              className="btn-operation btn-operation--edit"
            />
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
    fixedHeader: true
  };
  
  return(
    <div style={{ height:'400px', width: '100%' }} className="logtime-list">
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
