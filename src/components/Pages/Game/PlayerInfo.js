import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../../lib/styles.js';
import PropTypes from 'prop-types'

class playerInfo extends React.Component {

    constructor(props) {
        super(props);

        let open = props.open ? true : false;

        this.state = {
            open: open
        };

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    componentWillReceiveProps(props) {
        this.setState({open: props.open});
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.open) {
            this.props.close();
        }
    }
    
    render() {
        const { classes } = this.props;

        let drawerClasses = [classes.drawer, classes.drawerRight, classes.drawerX];

        if (this.state.open) {
            drawerClasses.push(classes.drawerOpenX);
        }

        return (
            <nav className={drawerClasses.join(' ')} ref={this.setWrapperRef}>
                <CloseIcon onClick={this.props.close}/>
            </nav>
        );
    }
}

/* playerInfo.propTypes = {
    children: PropTypes.element.isRequired,
}; */

export default withStyles(styles)(playerInfo);