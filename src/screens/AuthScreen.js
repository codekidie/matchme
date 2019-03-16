import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  LayoutAnimation,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  Picker,
} from 'react-native';


import { Fonts, Colors } from '../constants';
import { TextInput, Button , Dropdown } from '../components';

const FORM_STATES = {
  LOGIN: 0,
  REGISTER: 1,
};



export default class AuthScreen extends React.Component {
  state = {
    anim: new Animated.Value(0),

    // Current visible form
    formState: FORM_STATES.LOGIN,
    isKeyboardVisible: false,
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(Platform.select({ android: 'keyboardDidShow', ios: 'keyboardWillShow' }), this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener(Platform.select({ android: 'keyboardDidHide', ios: 'keyboardWillHide' }), this._keyboardDidHide.bind(this));
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: true });
  }

  _keyboardDidHide() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: false });
  }

  _handlePress(event) {
      let username = this.state.username;
      console.warn(username);
  }

 

  fadeIn(delay, from = 0) {
    const { anim } = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }



  render() {
    const TopComponent = Platform.select({ ios: KeyboardAvoidingView, android: View });
    const isRegister = this.state.formState === FORM_STATES.REGISTER;
    const scrollEnabled = true;

    return (
      <ScrollView contentContainerStyle={styles.container} scrollEnabled={scrollEnabled} >
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >

          <View style={[styles.section]}>
            <Animated.Image
              resizeMode="contain"
              style={[styles.logo, this.state.isKeyboardVisible && { height: 150 }, this.fadeIn(0)]}
              source={require('../../assets/images/logo.png')}
            />
          </View>

          <Animated.View style={[ this.state.formState === FORM_STATES.REGISTER ? styles.login : styles.register, this.fadeIn(700, -20)]}>
          
           { this.state.formState === FORM_STATES.REGISTER &&
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
            />
           }

            { this.state.formState === FORM_STATES.REGISTER &&
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.textInput}
                onChangeText={(registerpassword) => this.setState({registerpassword})}
                value={this.state.registerpassword}
              />
            }

            { this.state.formState === FORM_STATES.REGISTER &&
               <Picker
                selectedValue={this.state.gender}
                 style={styles.textInput}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({gender: itemValue})
                }>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>

              }

             { this.state.formState === FORM_STATES.REGISTER &&
                <TextInput
                  placeholder="Age"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(age) => this.setState({age})}
                  value={this.state.age}
                />
             }

             { this.state.formState === FORM_STATES.REGISTER &&
                <TextInput
                  placeholder="Height"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(height) => this.setState({height})}
                  value={this.state.height}
                />
             }

            { this.state.formState === FORM_STATES.REGISTER &&
                <TextInput
                  placeholder="Weight"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(weight) => this.setState({weight})}
                  value={this.state.weight}
                />
             }


            { this.state.formState === FORM_STATES.REGISTER &&
                <TextInput
                  placeholder="Work"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(work) => this.setState({work})}
                  value={this.state.work}
                />
            }

            { this.state.formState != FORM_STATES.REGISTER &&
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(username) => this.setState({username})}
              autoCorrect={false}
            />
           }

            { this.state.formState != FORM_STATES.REGISTER &&
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  style={styles.textInput}
                  onChangeText={(password) => this.setState({password})}

                />
            }

            <Animated.View style={[styles.section, styles.bottom, this.fadeIn(700, -20)]}>
              <Button
                secondary
                rounded
                style={{ alignSelf: 'stretch', marginBottom: 10  }}
                caption={this.state.formState === FORM_STATES.LOGIN ? 'Login' : 'Register'}
                onPress={() => this.props.authStateActions.skipLogin()}
                // onPress={() => _handlePress()}
              />

              { !this.state.isKeyboardVisible && (
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.spring();
                  this.setState({ formState: isRegister ? FORM_STATES.LOGIN : FORM_STATES.REGISTER });
                }}
                style={{ paddingTop: 30, flexDirection: 'row' }}
              >
                <Text style={{ color: Colors.white, fontFamily: Fonts.primaryRegular }}>{isRegister ? 'Already have an account?' : 'Don\'t have an account?' }</Text>
                <Text style={{ color: Colors.white, fontFamily: Fonts.primaryBold, marginLeft: 5 }}>{isRegister ? 'Login' : 'Register' }</Text>
              </TouchableOpacity>
            )}
            </Animated.View>
          </Animated.View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 30,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 3,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },

  register: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },

  bottom: {
    flex:1,
    alignSelf: 'stretch',
    paddingBottom: Platform.OS === 'android' ? 30 : 0,
  },
  textInput: {
    alignSelf: 'stretch',
  },
  logo: {
    height: 90,
  },

});
