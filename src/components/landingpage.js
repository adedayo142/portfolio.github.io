import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'


class Landing extends Component{
	render(){
		return(
			<div style= {{width:'100%', margin:'auto'}} >
			<Grid className="landing-grid">
			<Cell col={12}>
			<img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" className="avater-img"/>
			<div className="banner-text">
			<h1>Full Stack Web Developer</h1>
			<hr/>

			<p>HTML/CSS | Bootstrap | Javascript | React | Nodejs | Postgres</p>
			<div className="social-links">

		 {/*Linkedin */}
			<a href="https://www.linkedin.com/in/samson-adedayo-666646144/" rel="noopener noreferrer" target="_blank">
			<i className="fa fa-linkedin-square"  aria-hidden="true"/> </a>
			{/*Github */}
			<a href="https://github.com/onipedadedayo142" rel="noopener noreferrer" target="_blank">
			<i className="fa fa-github-square"  aria-hidden="true"/> </a>
			{/*Twitter */}
			<a href="https://twitter.com/adedayo100" rel="noopener noreferrer" target="_blank">
			<i className="fa fa-twitter-square"  aria-hidden="true"/> </a>

			</div>
			</div>
			</Cell>
			</Grid>
			</div>
			)
	}
}

export default Landing;