import React from 'react'
import {Card,CardTitle, CardActions, CardText, Button} from 'react-mdl'



class Cards extends React.Component{
	render(){
		return(
			<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://tse1.mm.bing.net/th?id=OIP.yjH3SiDaVWtpBX0g_2q68gHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
</Card>
			)
	}
}

export default Cards