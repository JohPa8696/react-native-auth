import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component{

  componentWillMount() {
      firebase.initializeApp( {
        apiKey: "AIzaSyD5WFhdTzjRxX9XUrO3uCrLHAcMw4ZeGJQ",
        authDomain: "authentication-a1564.firebaseapp.com",
        databaseURL: "https://authentication-a1564.firebaseio.com",
        projectId: "authentication-a1564",
        storageBucket: "authentication-a1564.appspot.com",
        messagingSenderId: "102442862153"
      }
    );
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm/>
      </View>
    );
  };
};


export default App;
