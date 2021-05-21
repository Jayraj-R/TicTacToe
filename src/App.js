import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Typography, Paper} from '@material-ui/core';
import TicTacToe from './Components/TicTacToe'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding:50,
    paddingBottom:0
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container justify="center" alignItems="center" xs={12}>

        <Grid item xs={false} sm={3}></Grid>

        <Grid item justify="center" alignItems="center" xs={11} sm={6}>

          <Paper className={classes.paper} elevation={3}>
            <Typography className="font-inconsalata" variant="h2" gutterBottom>
              <strong style={{fontFamily:'Inconsolata'}}>Tic Tac Toe</strong>
            </Typography>
            
            <Grid container direction="row" justify="center" alignItems="center">
              
              <Grid item xs={false} sm={3}></Grid>
              
              <Grid justify="center" container alignItems="center" item xs={12} sm={6}>
                  <TicTacToe/>
              </Grid>
             
              <Grid item xs={false} sm={3}></Grid>
            
            </Grid>

          </Paper>

        </Grid>

        <Grid item xs={false} sm={3}></Grid>
      </Grid>
        
    </div>
  );
}

export default App;
