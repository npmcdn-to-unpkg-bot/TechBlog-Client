import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
// require('../../styles/navi.style.css');
require('../../../styles/category.style.css');

class SingleTopicComponent extends React.Component{

	constructor(){

		super();

	}

	render(){
	  return (
	    		<div className="tt">	
					<figure className={this.props.effect}>
						<img src={this.props.imgsrc}/>
						<figcaption>
							<h2>Crazy <span>{this.props.topic}</span></h2>
							<p>{this.props.description}.</p>
							<a href={this.props.link}>View more</a>
						</figcaption>			
					</figure>
				</div>
			)
	}
}


export default SingleTopicComponent;