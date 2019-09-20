import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './landingpage';
import Aboutme from './aboutme'
import Resume from './resume'
import Projects from './projects'
import Contact from './contact'



const Main=()=> {
	return(
		<Switch>
		<Route exact path="/" component={Landingpage}/>
		<Route  path="/aboutme" component={Aboutme}/>
		<Route  path="/resume" component={Resume}/>
		<Route  path="/projects" component={Projects}/>
		<Route  path="/contact" component={Contact}/>
		</Switch>
);
}

	

	


export default Main;