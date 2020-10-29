import { default as dayjs } from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import HeaderIntro from '../../../../components/HeaderIntro'
import { getLogtime } from '../../../../redux/actions/logtimeAction'
import { getAllUsers } from '../../../../redux/actions/userAction'
import { LogtimeCurrent } from '../../../../redux/reducers/logtimeReducer'
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
    const {currentUser:{id}, logtime} = props;


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
    // const handleTimeSheetEditClick = (sheet:any) =>{
    //     console.log(sheet)
    // }
    // const handleTimeSheetViewDetailsClick = (sheet:any) =>{
    //     console.log(sheet)
    // }
    // const handleTimeSheetBlockClick = (sheet:any) =>{
    //     console.log(sheet)
    // }
    // const handleTimeSheetRemoveClick = (sheet:any) =>{
    //     console.log(sheet)
    // }

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
                        />

                        <p className="total">Total: {total}</p>

                        <TimeSheetList
                            data={logtime}
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
