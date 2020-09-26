import React from 'react';

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

  return (
   <div>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Parrotdog"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="././images/BreweryTaproom.JPG"
        title="Brewery Taprooms"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Enter DVB’s Taproom, the window to your Brewery. The place that wants to boost Park Rd for its new reputation of rad. The place where dogs and babies frolick together in hoppiness. At the taproom, you’ll be able to taste all of our delectable beers as well as some of our mate’s beers that we have met along the journey.
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
            The Taproom is back to normal hours!

            Thursday: 3pm – 10:30pm
            Friday: 3pm – midnight
            Saturday: 12pm – midnight
            Sunday: 12pm – 8pm

          </Typography>
          <Typography paragraph>
            All INCLUSIVE space includes

            Mail handling, access to admin support, kitchen, all utilities and cleaning, Business Lounge, access to printer, scanner & copier, receptionist, office furniture, access to Meeting rooms, business grade internet and WiFi.

            We have offices starting from 5m2 to 1000m2 or more.  All sizes, all budgets.

            Regus is the world's largest provider of flexible workspace, able to meet the needs of large corporates and small businesses alike. We are currently serving more than 1 million clients every day providing convenient, high-quality, fully serviced spaces for people to work, whether for a few minutes or a few years.
          </Typography>
          <Typography paragraph>


            Enquire now!!!
            Bookings
            We’re now taking booking for groups of up to 10 people per table using our fancy new booking software. Reserve your table now


          </Typography>
          <Typography>
            Terms & Conditions:
            The total space includes shared space in the Business Lounge of the centre with high quality furniture and common facilities such as kitchen and reception. Pricing is indicative and subject to availability.

            Contact us today to discuss your coworking needs.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </div>
  );
}