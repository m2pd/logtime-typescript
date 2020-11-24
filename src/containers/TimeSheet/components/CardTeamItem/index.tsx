import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { User } from '../../../../constaints/interface';
import './CardTeamItem.scss';
import { useHistory } from 'react-router-dom';


interface IProps {
  card: User;
}

const useStyles = makeStyles({
  root:{
    fontFamily: 'Poppins'
  },
  
  media: {
    height: 300,
  },
  paper: {
    marginRight: 15,
    fontFamily: 'Poppins',

    "@media (max-width: 480px)": {
      marginRight: 0,
      marginBottom: 15,
    }
  }
});

const CardTeamItem: React.FC<IProps> = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { card } = props;
  // console.log(card)
  return (
      <Card className={classes.paper}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://picsum.photos/seed/${card.id}/500/300`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <div className="card">
              <div className="card__top">
                <div className="card__title">
                  <h4>{card.fullName}</h4>
                  {!card.active && <i className="icon-block fas fa-lock"></i>}
                </div>

                <div className="socials">
                  <a href={`tel:${card.phoneNumber}`}>
                    <i className="fas fa-phone "></i>
                  </a>
                  <a href={`mailto:${card.email}`}>
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <Typography gutterBottom variant="h5" component="h2">
              
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {card.email}
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className='btn-profile' size="small" color="primary" onClick={() => history.push(`/accounts/${card.id}`)} >
            Hồ sơ
          </Button>
        </CardActions>
      </Card>
  )
}

export default CardTeamItem;
