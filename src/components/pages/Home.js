// import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import {  Box, makeStyles, Grid} from "@material-ui/core"
import { Input, Typography, Button } from "antd"
import { grey } from '@material-ui/core/colors';
import List from "../student/List";
import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles({
 headingColor: {
  backgroundColor: grey[900],
  color: "white"
 },
 addStuColor: {
  backgroundColor: grey[900],
  color: "white"
 },
})
const Home = () => {
 const classes = useStyles();
 const [student, setStudent] = useState({
  stuname: "",
  email: ""
 });
 const [status, setStatus] = useState();
 function onTextFieldChange(e) {
  setStudent({
   ...student,
   [e.target.name]: e.target.value
  })
 }
 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.post(`http://localhost:3333/students`, student)
   setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 if (status) {
  return <Home />
 }
 return (
  <>
  <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
    <Typography.Title level={2} style={{ margin: 0, color: "white"}}>
        Student Information Table
      </Typography.Title>
   </Box>
        

   {/* <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
    <Title level={3}>h3. Ant Design</Title>
   </Box> */}
   <Grid container justifyContent="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
     <Typography.Title level={2} style={{ margin: 0, color: "white"}}>
        Add student
      </Typography.Title>
     </Box>
     <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <Input autoComplete="stuname" name="stuname" variant="outlined" size="large" required  id="stuname" label="Name" onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <Input autoComplete="email" name="email" variant="outlined" required size="large" id="email" label="Email Address" onChange={e => onTextFieldChange(e)} />
       </Grid>
      </Grid>
      <Box m={3}>
       <Button  variant="contained" type="primary" style={{ background: "grey", border:"1px solid", width: '25%', marginLeft: '40%'}} size="large" onClick={e => onFormSubmit(e)} block>Add</Button>
      </Box>
     </form>
    </Grid>
    <Grid item md={6} xs={12}>
     <List />
    </Grid>
   </Grid>
  </>
 )
}
export default Home







