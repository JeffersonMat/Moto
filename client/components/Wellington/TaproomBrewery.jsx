import React from 'react';

import data from '../../data'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log('data', data)

  return (
    <div>
      {data.map(({content,name}, index) => {

          < Card className = { classes.root } >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
                  B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader="September 14, 2016"
        />
      <CardMedia
        className={classes.media}
        image="./images/BreweryTaproom.JPG"
        title={name}
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Hours Of Operation:</Typography>
          <Typography paragraph>          
            {content.hours}

          </Typography>
          <Typography paragraph>
            {content.amenities}
          </Typography>
          <Typography paragraph>
            {content.enquire}

          </Typography>
          <Typography>
                  Terms & Conditions:
                  The total space includes shared space in the Business Lounge of the centre with high quality furniture and common facilities such as kitchen and reception. Pricing is indicative and subject to availability.

                  Contact us today to discuss your coworking needs.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    })  }
  </div >
  );
}