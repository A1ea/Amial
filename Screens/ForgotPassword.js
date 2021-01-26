import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class ForgotPassword extends Component {
  
  
// just a start   
//   constructor() {
//     super();
     
//     this.state = { 
//       email: '', 
//       password: '',
//       isLoading: false,

//       flag:false
//     }
//   }
  
//   ForgotPassword = (Email) => {
//     firestore.auth().sendPasswordResetEmail(Email)
//       .then(function (user) {
//         alert('تم ارسال رسالة اعادة ضبط كلمة المرور على بريدك')
//       }).catch(function (e) {
//         console.log(e)
//         if (e="[Error: The email address is badly formatted.]")
//         alert('الرجاء التأكد من صياغة البريد')
//         else
//         alert(e)
//       })
//   }
  

  state= {
    email: ''
  }
  render(){
    return (
    <View style={styles.container}>
      <Text>إعادة كلمة المرور</Text>
        <Button 
        onPress = {() => this.props.navigation.pop()}
        title='back to login'/>

                </View>
  );
  
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

