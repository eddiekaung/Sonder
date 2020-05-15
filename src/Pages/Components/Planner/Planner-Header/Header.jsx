import React from 'react';
import './Header.css'

export default class Header extends React.Component {

    static propTypes = {
        //contains prop variables
    }
    constructor(props) {
        super(props);
        this.state = {
            //contains state variables
        }
    }

    static defaultProps = {
        // contains default props
    }

    //TODO: return title(pass by props), date(pass by sidebar), estimated cost(pass by props)
    render() {
        return (
            <div id="planner-header">
                <h1 id="planner-title" className="planner-header">{this.props.title}</h1>
                <h2 id="planner-date" className="planner-header">{this.props.length}</h2>
                <h2 id="planner-total-cost" className="planner-header">${this.props.budget}</h2>
            </div>
        );
    }
}