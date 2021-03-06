import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../lib/styles.js';
import { useLocation } from 'react-router-dom'


function Btn(props) {

    let { classes } = props;

    var clsList = require('classnames');
    clsList = clsList({[classes.btn] : true}, {[classes.btnHover] : true}, { [classes[props.bgColor + "Bg"]] : true});

    var btnText = props.text !== undefined ? props.text : "Some text";

    const btnAction = props.onClick !== undefined ? props.onClick : null;

    let link;
    let location = useLocation();
    
    if(props.link !== undefined)
        link = props.link;
    else
    {
        
        link = location.pathname
    }

    let visibility = props.visibility !== undefined ? props.visibility : "";

    return(
        <Link className={classes.linkStyle} to={link} style={{visibility: visibility}}>
            <Button variant="contained" className={clsList} onClick={btnAction}>{btnText}</Button>
        </Link>
    );
}

export default withStyles(styles)(Btn);