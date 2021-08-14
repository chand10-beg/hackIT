import React ,{useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import icon from './../utils/delivery-man.png';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

    jobCard:{
        width:"100%",
        padding:'.9rem',
        boxSizing:"border-box",
        margin:'0.5rem'
    },
    jobInfo:{
        display:"flex"
    },
    jobName:{
lineHeight:"3px",
boxSizing:"border-box",
margin:"0.5rem 1rem"
    },
    apply:{
        backgroundColor:"#fefe22",
        color:"#000",
        padding:'.3rem',
        textTransform:"none",
        fontSize:'.8rem',
              
      '&:hover': {
        backgroundColor:"yellow",
        color:"#000"
        },

    },

    buttonDiv:{
display:'flex',
justifyContent:'space-between',

'& p':{
   
    margin:'.5rem 0 0 0',
    fontSize:'.9rem'
    
}
    }
  }));

const JobCard = (props) => {
    // const [Data, setData] = useState([]);
    const classes = useStyles();
    // useEffect(() => {
    // const fetchData = async () => {

    
    

    //     try {
    
     
    //       const { data } = await axios.get('https://lit-peak-91776.herokuapp.com/api/auction/activeAuctions');
    //       // console.log(localStorage.getItem("email"))
    //       setData(data)
        
    //     } catch (error) {
    //       console.log(error.response.data.error);
          
    //       // setError("");
    //     }
    //   };
    //   fetchData();
    // },[]);
// console.log(Data)
    return (  <Paper elevation={3} className={classes.jobCard} >

<div className={classes.jobInfo}>
<img src={icon}  width="40" height ="40" alt="icon" ></img>
<div className={classes.jobName}>
    <strong> <Link to="/findJobs/xyz">{props.jobName}</Link></strong>
    <p>{props.clientName}{props.location}</p>
</div>
</div>

<div className={classes.buttonDiv}>
<p>
    Earning : <strong>{props.salary} Rs/hour</strong>
</p>
<Button className={classes.apply} variant="contained" color="primary">
        <Link to="/findJobs" >Apply now</Link>
      </Button>
</div>


    </Paper> );
}
 
export default JobCard;