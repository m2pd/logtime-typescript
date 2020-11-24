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
            <Grid container className="card-team" key={index}>
              <Grid item xs={12} sm={4} className="card">
                <CardTeamItem card={card.user} /> 
              </Grid>       
                
              <Grid item xs={12} sm={8}>
                <TimeSheetList
                data={card.logtimes}
                userRoles={userRoles}
                showDefault={false}
                onTimeSheetRemoveClick={onTimeSheetRemoveClick}
                onTimeSheetViewDetailsClick={onTimeSheetViewDetailsClick}
                onTimeSheetEditClick={onTimeSheetEditClick}
                />
              </Grid>
            </Grid>
          ))
          : 'Chọn team đêuuuu'
        }
      </Grid>
    </div>
  )
}

export default CardTeam;
