import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, 
  Typography,
  Button,
  ButtonGroup } from '@material-ui/core';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
const useStyles = makeStyles(() => ({
  cell:{
    height:35,
    width:35,
    paddingTop:15
  },
  container:{
    margin: "0px",
    marginBottom: "4em"
  }
}));


const TicTacToe = () => {

    const classes = useStyles();
            {/* Constants/Variable Declaration */}
    const emptyArray = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "]
    ]
    const [array,setArray] = useState(emptyArray)
      const [fighter,setFighter] = useState(undefined)        
      const [cpu, setCpu] = useState(undefined)
      const [force , setForce] = useState(undefined)
      const [counter, setCounter] = useState(0)
      const [winner, setWinner] = useState(undefined)
      const restart = ()=>{
        setArray(emptyArray)
        setCounter(0) 
        setForce(undefined) 
      }

        {/* User's Charachter */}
      const fighterHandler = (chosenOne,otherOne) => {
        setFighter(chosenOne)
        setCpu(otherOne)

      }

      
        {/* Game Mechanic for checking who wins. (You?) */}

      const theForce = () =>{
        if(array[0][0]===array[0][1] && array[0][1]===array[0][2]  && array[0][0]!==" " && array[0][1]!==" " && array[0][2]!==" "){
          if(array[0][0]===fighter) setWinner("You win!")
          else setWinner("You Lose!")
          setForce('awakens')
        }
        else if(array[1][0]===array[1][1] && array[1][1]===array[1][2]  && array[1][0]!==" " && array[1][1]!==" " && array[1][2]!==" "){
          if(array[1][0]===fighter) setWinner("You win!")
          else setWinner("You Lose!")
          setForce('awakens')
        }
        else if(array[2][0]===array[2][1] && array[2][1]===array[2][2]  && array[2][0]!==" " && array[2][1]!==" " && array[2][2]!==" "){
          if(array[2][0]===fighter) setWinner("You win!")
          else setWinner("You Lose!")
          setForce('awakens')
        }
        else if(array[0][0]===array[1][0] && array[1][0]===array[2][0]  && array[0][0]!==" " && array[1][0]!==" " && array[2][0]!==" "){
          if(array[0][0]===fighter) setWinner("You win!")
          else setWinner("You Lose!")
          setForce('awakens')
        }
        else if(array[0][1]===array[1][1] && array[1][1]===array[2][1]  && array[0][1]!==" " && array[1][1]!==" " && array[2][1]!==" "){
          if(array[0][1]===fighter) setWinner("You win!")
          else setWinner("You Lose!")
          setForce('awakens')
        }
        else if(array[0][2]===array[1][2] && array[1][2]===array[2][2]  && array[0][2]!==" " && array[1][2]!==" " && array[2][2]!==" "){
          if(array[0][2]===fighter) setWinner("You win!")
          else setWinner("You Lose!")
          setForce('awakens')
        }
        else if(array[0][0]===array[1][1] && array[1][1]===array[2][2]  && array[0][0]!==" " && array[1][1]!==" " && array[2][2]!==" "){
          if(array[0][0]===fighter) setWinner("You win!")
          else setWinner("You Lose!")
          setForce('awakens')
        }
        else if(array[0][2]===array[1][1] && array[1][1]===array[2][0]  && array[0][2]!==" " && array[1][1]!==" " && array[2][0]!==" "){
          if(array[0][2]===fighter) setWinner("You win!")
          else setWinner("You Lose!")
          setForce('awakens')
        }
        else if(counter>7 && counter%8==0){
          setWinner("It's a tie!")
          setForce('awakens')
        }
      }
      
        {/* Filling up the array - User and CPU(random) */}
      const cellHandler = (i,j) => {

        let array_copy = [...array]

        if(array_copy[i][j]===' '){
          array_copy[i][j]=fighter
          setCounter(counter+2)
          theForce()

          for(let p=0;p<20;p++){
            const x = Math.round(Math.random()*2)
            const y = Math.round(Math.random()*2)
            
            if(array_copy[x][y]===" "){
              array_copy[x][y]=cpu
              theForce()
              break;
            }
          }
  
          setArray(array_copy)
  
        }
      }
      return (
        <>
          
          <div className={classes.container}>


          {!(fighter) ? 
                (
                  /* Game-Display */
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={()=>fighterHandler('X','O')}>X</Button>
                    <Button onClick={()=>fighterHandler('O','X')}>O</Button>
                  </ButtonGroup>
                ) :
                (<>       {/* Game-Display */}

                    {array.map((row, rindex) => {
                    return (
                      <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center">
                        {row.map((cell, cindex) => {
                          return (
                                <Grid items> 
                                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                                    <Button alignItems="center" onClick={()=>cellHandler(rindex,cindex)} className="cell"><span className={classes.cell}>{cell}</span></Button>
                                  </ButtonGroup>
                                  </Grid>
                            );
                        })}
                      </Grid>
                    );
                  })}

                  {(force) && (<>
                                  <Typography style={{fontFamily:'Inconsolata'}} variant="h4">
                                    Game Over
                                  </Typography>
                                  <Typography variant="h6" style={{fontFamily:'Inconsolata'}} gutterBottom>
                                  {winner}
                                  </Typography>
                                  <Button  endIcon={<RefreshRoundedIcon/>} color="primary" aria-label="outlined primary" onClick={restart}>Refresh</Button>
                              </>)}
                </>)
          }

         
        </div>
        <Grid xs={12}>
          <Typography variant="subtitle1">
            View <a href="https://github.com/Jayraj-R/TicTacToe" target="_blank">source code</a>.      
          </Typography>
        </Grid>
        </>
      );
}

export default TicTacToe
            