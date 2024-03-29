import React from 'react'
import {Grid,Cell} from 'react-mdl'


class Experience extends React.Component{
	render(){
		return(
			<Grid>
			<Cell col={4}>
			<p>{this.props.startYear}-{this.props.endYear}</p>
			</Cell>
			<Cell col={8}>
			<h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
			<p>{this.props.jobExperience}</p>
			</Cell>
			</Grid>
			)
	}
}

export default Experience