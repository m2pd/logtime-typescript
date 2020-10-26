import { default as dayjs } from 'dayjs'
import React, { useCallback, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import HeaderIntro from '../../../../components/HeaderIntro'
import { getLogtime } from '../../../../redux/actions/logtimeAction'
import { LogtimeCurrent } from '../../../../redux/reducers/logtimeReducer'
import { UserCurrent } from '../../../Account/pages/Main'
import { MainComponent } from '../../../Main'

function MainLoginPage(props:IProps) {
    const {currentUser:{id}, logtime} = props;
    //FromDate, ToDate have type are string or Date (* Date)
    const FromDate:any = dayjs().day(1).format('YYYY-MM-DD');
    const ToDate:any = dayjs().day(6).format('YYYY-MM-DD');

    const dispatch = useDispatch(); 
    //use useCallback check render change up memo
    const onFetchLogtime = useCallback(
        () => {
            dispatch(getLogtime(id,FromDate,ToDate))
        },
        [dispatch,id,FromDate,ToDate]
    )

    console.log(logtime)
 
    useEffect(() => {
        onFetchLogtime();
    }, [onFetchLogtime])
    return (
        <div>
            <MainComponent>
                    <HeaderIntro
                        title='Danh sách time sheet'
                        intro='Trang thông tin danh sách các công việc time sheet'
                    />
                    <div className="page-content">   
                        <h1>MainTimesheet Page</h1>
                    </div>     
            </MainComponent>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return{
        currentUser: state.currentUser,
        logtime: state.logtime
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
    logtime: LogtimeCurrent;
    dispatch:any;
}

export default connect(mapStateToProps)(MainLoginPage)
