import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom'

class App extends React.Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color"title={<Link style={{textDecoration:'none', color:'white'}}to="/">My portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">Aboutme</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}}to="/">My portfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">Aboutme</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link> 
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
</div>
  );
}
}
export default App;
