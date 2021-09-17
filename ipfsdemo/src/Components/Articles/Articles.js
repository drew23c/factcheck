import React, {Component} from 'react';
import './articles.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Articles extends Component{
    render(){
        return(
            <div className="article-header">
                <h2 className="article-section">Facts</h2>
                <div className="facts">
                    <ul>
                        <li>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}