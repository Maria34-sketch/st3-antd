import { Box, makeStyles, Grid, TextField } from "@material-ui/core";
import { Typography, Button } from "antd";
import { grey } from "@material-ui/core/colors";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles({
  headingColor: {
    backgroundColor: grey[900],
    color: "white",
  },
  addStuColor: {
    backgroundColor: grey[900],
    color: "white",
  },
});

const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useNavigate();
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });
  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3333/students/${id}`);
        // console.log(student.data);
        setStudent(student.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, [id]);

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/students/${id}`, student);
      history.push("/");
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  function handleClick(props) {
    props.history.push("/");
  }
  return (
    <>
      <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
        <Typography.Title level={1} style={{ margin: 0, color: "white" }}>
          Admin Dashboard
        </Typography.Title>
      </Box>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        {" "}
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography.Title
              level={1}
              variant="h4"
              style={{ margin: 0, color: "white" }}
            >
              Edit Student
            </Typography.Title>
          </Box>

          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  value={student.stuname}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={student.email}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                style={{ background: "grey", border:"1px solid", marginLeft:"0px", width:"100%" }} size="large" 
                
                onClick={(e) => onFormSubmit(e)}
              >
                {" "}
                Update{" "}
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
          <Button  variant="contained" type="primary" style={{ background: "grey", border:"1px solid black", color:"black", marginLeft:"15px" }} size="large"
              onClick={handleClick}
            >
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
