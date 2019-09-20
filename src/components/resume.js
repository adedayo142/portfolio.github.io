import React from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends React.Component{
	render(){
		return(
			<div>
			<Grid>
			<Cell col={4}>
			<div style={{textAlign:'center'}}>
			<img
			src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
			alt="avatar"
			style={{height:'200px'}}
			/>
			</div>
			<h2 style={{paddingTop:'2em'}}>Onipede Samson </h2>
			<h4 style={{color:'grey'}}>Programmer</h4>
			<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			<p>I am website developer, front-end developer, with in-dept knowledge of javascript, react, nodejs, postgres. which i use for the development of the website or application</p>
			<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			<h5>Address</h5>
			<p>3, idowukoya street, challenge, ibadan.</p>
			<h5>Phone</h5>
			<p>+234816-848-6380</p>
			<h5>Email</h5>
			<p>Adedayo142@gmail.com</p>
			<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			</Cell>

			<Cell className="resume-right-col" col={8}>
			<h2>Education</h2>
			<Education 
			startYear={2004}
			endYear={2010}
			schoolName="Hogas International College"
			schoolDescription="Lagos state,Nigeria"
			/>

			<Education 
			startYear={2011}
			endYear={2015}
			schoolName="Tai Solarin University Of Education"
			schoolDescription=" Ogun state, Nigeria"
			/>
			<hr style={{borderTop:'3px solid #e22947'}}/>

			<h2>Experience</h2>
			<Experience
			startYear={2016}
			endYear={2017}
			jobName="Vitotek Global Service"
			jobDescription="IT consultant"
			/>
			<Experience
			startYear={2017}
			endYear={2019}
			jobName="Freelancer"
			jobDescription="Web developer"
			/>
			<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			<h2>Skills</h2>
			<Skills
			skill="javascript"
			progress={100}
			/>
			<Skills
			skill="Html/Css"
			progress={80}
			/>

			<Skills
			skill="Nodejs"
			progress={50}
			/>

			<Skills
			skill="Reactl"
			progress={70}
			/>

			
			
			</Cell>
			</Grid>
			</div>
			)
	}
}

export default Resume