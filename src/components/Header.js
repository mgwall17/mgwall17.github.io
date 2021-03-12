import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Breadcrumbs,
  Box,
  Container,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginLeft: theme.spacing(3),
    color: "#ffffff",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <MenuItem>
              <Typography variant="h5" component="h1">
                iSamples | The Internet of Samples
              </Typography>
            </MenuItem>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
