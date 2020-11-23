import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useSelector } from 'react-redux';
import CardTeamItem from '../CardTeamItem';
import TimeSheetList from '../TimeSheetList';
import './CardTeam.scss';

interface IProps {
  data: any;
  onTimeSheetEditClick: Function;
  onTimeSheetRemoveClick: Function;
};

const CardTeam:React.FC<IProps> = (props) => {
  const { data, onTimeSheetEditClick, onTimeSheetRemoveClick } = props;
  const currentUser = useSelector((state: any) => state.currentUser);
  const userRoles = currentUser.userRoles;

  const onTimeSheetViewDetailsClick = (values: any) => {
    console.log(values)
  }

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        {
          data.length > 0 
          ? data.map((card:any, index:number) => (
            <div className="card-team" key={index}>
              <CardTeamItem card={card.user} />
                
              <TimeSheetList
               data={card.logtimes}
               userRoles={userRoles}
               showDefault={false}
               onTimeSheetRemoveClick={onTimeSheetRemoveClick}
               onTimeSheetViewDetailsClick={onTimeSheetViewDetailsClick}
               onTimeSheetEditClick={onTimeSheetEditClick}
              />
            </div>
          ))
          : 'Chọn team đêuuuu'
        }
      </Grid>
    </div>
  )
}

export default CardTeam;
