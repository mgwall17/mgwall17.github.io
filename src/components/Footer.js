import { Typography, Box,Grid } from '@material-ui/core'
import React from "react"
import { makeStyles } from "@material-ui/core/styles"; 
import Image from 'next/link'
  
const useStyles = makeStyles((theme) => {
  return {
    footer: {
      textDecoration: "none",
      color:"#0971ab",
    }
  }
});

function Footer() {
  const classes = useStyles();
    return (
      <React.Fragment>
        <div>
          <Box mt={6} mb={3} mx={2}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item md={7} align="center">
                <Typography variant="body2" color="inherit" align="center">
                  This material is based upon work supported by the National
                  Science Foundation under Grant Numbers{" "}
                  <a
                    href="https://nsf.gov/awardsearch/showAward?AWD_ID=2004839"
                    className={classes.footer}
                  >
                    2004839
                  </a>
                  ,{" "}
                  <a
                    href="https://nsf.gov/awardsearch/showAward?AWD_ID=2004562"
                    className={classes.footer}
                  >
                    2004562
                  </a>
                  ,{" "}
                  <a
                    href="https://nsf.gov/awardsearch/showAward?AWD_ID=2004642"
                    className={classes.footer}
                  >
                    2004642
                  </a>
                  , and{" "}
                  <a
                    href="https://nsf.gov/awardsearch/showAward?AWD_ID=2004815"
                    className={classes.footer}
                  >
                    2004815
                  </a>
                  . Any opinions, findings, and conclusions or recommendations
                  expressed in this material are those of the author(s) and do
                  not necessarily reflect the views of the National Science
                  Foundation.
                </Typography>
                <Typography variant="body2" color="primary" align="center">
                  {"Copyright © "}
                  iSamples {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </React.Fragment>
    );
}
export default Footer