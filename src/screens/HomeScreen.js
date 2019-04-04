import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
  ListView,
} from 'react-native';
import { Fonts, Colors } from '../constants';
import Button from '../components/Button';
import RadioGroup from 'react-native-radio-buttons-group';

import {
  Text,
  Title,
} from '../components/StyledText';

import axios from 'axios';

export default class HomeScreen extends React.Component {
  // const handleClick = () => {
  //       alert(this.props)
  //        // this.props.navigation.navigate('Gallery');
  // };

  constructor(props){
      super(props);
        this.state = {
          questiondata:[],
           data: [
            {
                label: 'Default value is same as label',
            },
            {
                label: 'Value is different',
                value: "I'm not same as label",
            },
            {
                label: 'Color',
                color: 'green',
            },
            {
                disabled: true,
                label: 'Disabled',
            },
            {
                label: 'Size',
                size: 32,
            },
        ],
       }

        axios.get('http://questionaires.itresourcesgroup.com.au/public/question/1')
        .then(res => {
          let questions = res.data;
          this.setState({  questiondata : questions});
        })

        
  }
  
  onPress = data => this.setState({ data });

 render() {
 let selectedButton = this.state.data.find(e => e.selected == true);
 selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
 
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"

      >
        <View style={styles.wrapper}>
               <Text style={styles.valueText}>
                    Value = {selectedButton}
                </Text>

             <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />

                {Object.keys(this.state.questiondata).map(index => {
                      //Create new array to map the objects
                      return [...Array(this.state.questiondata[index])].map((i) => { 

                          for (var c = 1; c < i[0].length; c++) {
  
                              return (  
                                <Text style={styles.valueText}>
                                     {i[0][c].answer}
                                 </Text> 
                                      
                               )
                          }
                        

                      });
                    })
                }
        </View>
      </ImageBackground>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bgImage: {
    width: '100%'    
  },
  buttons:{
    width: '100%'
  },
  items:{
    width: '45%',
    margin:5,
  },
  wrapper:{
    marginTop: '50%',
    paddingHorizontal:10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center' // if you want to fill rows left to right
  }
});
