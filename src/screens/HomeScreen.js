import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';
import { Fonts, Colors } from '../constants';
import Button from '../components/Button';
import {
  Text,
  Title,
} from '../components/StyledText';

export default class HomeScreen extends React.Component {
  // const handleClick = () => {
  //       alert(this.props)
  //        // this.props.navigation.navigate('Gallery');
  // };
  constructor(props){
      super(props);
  }
 render() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"

      >
         <View style={styles.wrapper}>
            <View style={styles.items}>
              <Text color="#19e7f7" size={15}></Text>
                   <Button
                    secondary
                    rounded
                    style={[styles.buttons]}
                    caption="Normal"

                   onPress={() => {this.props.navigation.navigate('Plan')}}
                  />
            </View>
            <View style={styles.items}>
              <Button
                    secondary
                    rounded
                    style={[styles.buttons]}
                    caption="Diabetic"
                   onPress={() => {this.props.navigation.navigate('Profile')}}
                  
                  />
            </View>
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
