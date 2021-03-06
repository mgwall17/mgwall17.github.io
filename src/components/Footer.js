import { Typography, Box,Grid } from '@material-ui/core'
import React from "react"
import { makeStyles } from "@material-ui/core/styles"; 
import Image from 'next/link'
  
const useStyles = makeStyles((theme) => {
  return {
    footer: {
      // padding: "10px",
      // bottom: "0px",
      // position: "relative",
      // width: "75%",
      // fontSize: ".775rem",
      // margin: "0 auto",
    }
  }
});

function Footer() {
  const classes = useStyles();
    return (
      <React.Fragment>
        <div className={classes.footer}>
          <Box mt={6} mb={3}>
            <Image
              src="/twitter.svg"
              alt="twitter logo"
              layout="intrinsic"
              height={20}
              width={92}
            />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item md={7} align="center">
                <Typography variant="body2" color="inherit" align="center">
                  This material is based upon work supported by the National
                  Science Foundation under Grant Numbers 2004839, 2004562,
                  2004642, and 2004815. Any opinions, findings, and conclusions
                  or recommendations expressed in this material are those of the
                  author(s) and do not necessarily reflect the views of the
                  National Science Foundation.
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