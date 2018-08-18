import React from 'react';
import { Text, View, ListView  } from 'react-native';

export default class Comment extends React.Component {

  constructor(props){
    super(props);

    this.state ={ 
        HomeComment: '',
        AwayComment: '',
        Minute: '',
        Score: ''
    };
  }

loadData(){
  
  let response = this.props.dataSource;

  if (!Array.isArray(response) || !response.length)
  {
    this.setState({
          
           HomeComment: 'No game today',
           AwayComment: 'No game today',
           Minute: '',
           Score: '',
        }, function(){         
        });
  }
  else
  {
    if(response[0].LatestEvent !== null)
    {
        this.setState({
          
           HomeComment: response[0].LatestEvent.HomeComment,
           AwayComment: response[0].LatestEvent.AwayComment,
           Minute: response[0].LatestEvent.Minute,
           Score: response[0].LatestEvent.Score
        }, function(){         
        });
    }
    else
    {
      this.setState({
          
           HomeComment: 'Something cocked up',
           AwayComment: 'Something cocked up',
           Minute: '',
           Score: '',
        }, function(){         
        });
    }
  }   
}

 componentDidMount() {
  this.loadData();
  }

  render(){

     return (
        <View>
          <Text>{this.state.Minute}</Text>
          <Text>{this.state.HomeComment}</Text>
          <Text>{this.state.AwayComment}</Text>
          <Text>{this.state.Score}</Text>
        </View>
      );
  }
}


