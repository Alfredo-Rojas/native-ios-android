import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import Styles from './Style';

export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    errorMsg: null,
  };
  
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={{ color: '#e93766', fontSize: 40 }}>SignUp</Text>
        {this.state.errorMsg &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMsg}
          </Text>
        }
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={Styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={Styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          title="Sign Up"
          color="#e93766"
          onPress={this.handleSignUp}
        />
        <View>
          <Text> Already have an account? <Text
            onPress={() => this.props.navigation.navigate('Login')}
            style={{ color: '#e93766', fontSize: 18 }}
            > Login </Text>
          </Text>
        </View>
      </View>
    )
  }
}