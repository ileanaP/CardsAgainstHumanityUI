import React, { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { styles } from '../../../lib/styles.js';
import { notif } from '../../../lib/utils';


class  Card extends Component {

    constructor(props){
        super(props);

        let fontSize =  16;

        if(props.type == 'white')
        {
            if(props.text.length > 91)
                fontSize = 12;
        } 
        else
        {
            if(props.text.length > 135)
                fontSize =  14;
        }

        let alreadySelected = (props.alreadySelected != undefined && props.alreadySelected) ? true : false;

        this.state = {
            text: this.props.text,
            fontSize: fontSize,
            selected: this.props.selected,
            alreadySelected: alreadySelected
        }
    }

    componentWillReceiveProps(props){

        if(props.selected != this.state.selected)
        {
            this.setState({selected: props.selected});
        }
        this.setState({
            alreadySelected: props.alreadySelected
        });
    }

    render() {
        
        const { classes } = this.props;

        let click;

        if(typeof this.props.onClick == 'function')
            click = () => { this.props.onClick()}
        else
            click = null;

        let classs = classes[this.props.type + "Card"] + ' '+ this.props.cardClass;

        if(this.state.selected)
            classs += ' ' + classes['selected'];

        if(this.state.alreadySelected)
        {
            classs += ' ' + classes['deactivated'];
        }
        
/*         if(this.state.alreadySelected)
        {
                classs += ' ' + + classes['deactivated'];
        } */

            
        return (
            <Box clone pt={2} pr={1} pb={1} pl={2} 
                className={classs}
                onClick={click}>
                <Paper elevation={3}>
                    <Typography style={{fontSize: this.state.fontSize}}>
                        {this.state.text}
                    </Typography>
                </Paper>
                
            </Box>
        );
    }
}


export default withStyles(styles)(Card);