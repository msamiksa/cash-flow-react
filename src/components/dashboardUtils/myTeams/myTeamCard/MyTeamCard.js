import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      style={{
        marginBottom: "10px",
        borderBottomColor: `rgba(${Math.floor(
          Math.random() * 255
        )},${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )})`,
        borderBottomWidth: "5px",
        borderBottomStyle: "solid",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
