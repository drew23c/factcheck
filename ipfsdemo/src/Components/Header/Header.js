import React, {Component} from 'react';
import './header.css';
import factcheck from '../Images/factCheckImage.jpg'

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1 className="header-title">Fact Check the Fact Checker</h1>
                <img className="image" alt="headerImage" src={factcheck} />
            </div>
        )
    }
}