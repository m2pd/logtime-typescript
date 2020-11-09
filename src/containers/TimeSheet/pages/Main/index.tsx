import { default as dayjs } from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import HeaderIntro from '../../../../components/HeaderIntro'
import { getLogtime } from '../../../../redux/actions/logtimeAction'
import { getAllUsers } from '../../../../redux/actions/userAction'
import { LogtimeCurrent } from '../../../../redux/reducers/logtimeReducer'
import logtimeService from '../../../../services/logtime.service'
import { totalHours } from '../../../../utils/totalHours'
import { UserCurrent } from '../../../Account/pages/Main'
import { MainComponent } from '../../../Main'
import TimeSheetForm from '../../components/TimeSheetForm'
import TimeSheetList from '../../components/TimeSheetList'

export interface optionsValues{
    value: number | null;
    label:string;
}

function MainLoginPage(props:IProps) {
    const {currentUser:{id, userRoles}, logtime} = props;
    const history = useHistory();

    console.log(userRoles)
    const [idUser, setIdUser] = useState(id)
    const FromDateDefault:string = dayjs().day(1).format('YYYY-MM-DD');
    const ToDateDefault:string = dayjs().day(6).format('YYYY-MM-DD');

    const [fromDay, setFromDay] = useState(FromDateDefault)
    const [toDay, setToDay] = useState(ToDateDefault)
    //FromDate, ToDate have type are string or Date (* Date)
    // const FromDate:any = dayjs().day(1).format('YYYY-MM-DD');

    const dispatch = useDispatch(); 
    //use useCallback check render change up memo
    const onFetchLogtime = useCallback(
        () => {
            dispatch(getLogtime(idUser,fromDay,toDay))
        },
        [dispatch,idUser,fromDay,toDay]
    )

    const onFetchAllUser = useCallback(
        () => {
            dispatch(getAllUsers())
        },
        [dispatch]
    )

    const getValuesDate = (values:any) =>{
        const {FromDate, ToDate, id} = values;
        setFromDay(FromDate)
        setToDay(ToDate)
        setIdUser(id)
        console.log(values)
    }
 
    useEffect(() => {
        onFetchLogtime();
        onFetchAllUser();

    }, [onFetchLogtime, onFetchAllUser])


    const getAllLogtime:any = logtime.logtimeCurrent;
    console.log(getAllLogtime)
    const total:number = totalHours(getAllLogtime)

    const handleTimeSheetEditClick = (sheet:any) =>{
        console.log("Edit:",sheet)
        const editSheetUrl = `/timesheet/${sheet[0]}` 
        history.push(editSheetUrl)
    }

    const handleTimeSheetViewDetailsClick = (sheet:any) =>{
        console.log(sheet)
        const viewSheetUrl = `/timesheet/${sheet[0]}` 
        history.push(viewSheetUrl)
    }

    // const handleTimeSheetBlockClick = (sheet:any) =>{
    //     console.log(sheet)
    // }

    const handleTimeSheetRemoveClick = (sheet:any) =>{
        // sheet: [3609, "2020-10-31T00:00:00", 4, "Tìm hiểu Custom hook trong ReactJS", "Nghiên cứu", "Tìm hiểu Custom hook trong ReactJS", false, "5", undefined]
        swal({
            title: "Có chắc là muốn xóa không?",
            text: "Chắc rồi thì nhấn OK đi",
            icon: "warning",
            buttons:  ["Thôi, không xóa nữa đâu!", "OK nè !"],
            dangerMode: true,
        })
        .then((willUpdate) => {
            if (willUpdate) {
                logtimeService.deleteLogtimeById(sheet[0])
                .then(res => {
                    //re-render after remove logtime
                    onFetchLogtime();
                })
                .catch(err => console.log(err))
                
                swal("Cập nhật thành công", {
                    icon: "success",
                });
            } else {
                swal("Suy nghĩ kĩ rồi mới sữa nghen <3");
            }
        });
    }

    return (
        <div>
            <MainComponent>
                    <HeaderIntro
                        title='Danh sách time sheet'
                        intro='Trang thông tin danh sách các công việc time sheet'
                    />
                    <div className="page-content">
                        <TimeSheetForm
                            FromDate={fromDay}
                            ToDate={toDay}
                            onSubmit={getValuesDate}
                            id={id}
                            userRoles={userRoles}
                        />

                        <p className="total">Total: {total}</p>

                        <TimeSheetList
                            data={logtime}
                            userRoles={userRoles}
                            onTimeSheetEditClick={handleTimeSheetEditClick}
                            onTimeSheetRemoveClick={handleTimeSheetRemoveClick}
                            onTimeSheetViewDetailsClick={handleTimeSheetViewDetailsClick}
                        />
                    </div>     
            </MainComponent>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return{
        currentUser: state.currentUser,
        logtime: state.logtime,
        users: state.users,
    }
}

// const mapDispatchToProps = (dispatch:any) => {
//     return{
//         getLogtime: (id:number,FromDate:Date,ToDate:Date) => dispatch(getLogtime(id,FromDate,ToDate))
//     }
// }

interface IProps{
    getLogtime: Function;
    currentUser:UserCurrent;
    logtime: {logtimeCurrent: LogtimeCurrent[]};
    users:UserCurrent[];
    dispatch:any;
}

export default connect(mapStateToProps)(MainLoginPage)
