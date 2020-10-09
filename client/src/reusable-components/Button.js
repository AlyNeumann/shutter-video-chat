import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      focusVisible: {},
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
      imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      },
    },
  }));

  const CustomButton = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Button 
            className={classes.imageButton} 
            variant="outlined"
            focusVisibleClassName={classes.focusVisible}
            foucripple
            onClick={props.onClick}
            >{props.text}
            </Button>
        </div>
    )
  }

  export default CustomButton;

