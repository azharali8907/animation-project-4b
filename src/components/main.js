import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWebAnimations from "@wellyshen/use-web-animations";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Button from './Button';
import TabBar from './TabBar';
import laptop from "../imges/laptop.gif";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(-90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
  },
  
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    border: "none",
    boxShadow: "none",
    color: "#ffff",
    background: "inherit",
    
  },
}));

export default function Main() {
  const classes = useStyles();

  const { ref } = useWebAnimations({
    keyframes: [
        { transform: 'translateX(300px)' },
        
        
      ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      //easing: "ease-in-out", // Use a fancy timing function
    },
    
  });



  return (
      
      <div className="main-div"> 
      <TabBar/>
      
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md >
          <Paper className={classes.paper} >
          
          <Fade top>
          <Typography variant="h2" component="h3">
          <strong>Bootcapm 2020</strong> 
          </Typography>
         </Fade>
           
           <Fade left>
            <Typography variant="h4" component="h2" style={{textAlign:'justify', marginLeft:'0px'}}>
            Free Online Learn to Earn Fasttrack Bootcamp
            to Learn Freelancing and do Remote Work in the
             COVID-19 Economic Environment

            </Typography>
            </Fade>
            <Button/>
          </Paper>
        </Grid>
        <Grid item md >
          <Paper className={classes.paper}>
          
          <img src={laptop} ref={ref} style={{float:'right'}} alt={laptop} />
          
      
          
          </Paper>
        </Grid>





























       
       
      
      </Grid>
    </div>
    </div>
  );
}