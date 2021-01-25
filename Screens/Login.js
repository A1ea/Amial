import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends Component {

  state= {
    email: '',
    password:''
  }
  render(){
    return (
    <View style={styles.container}>
      <Text>الإيميل</Text>
      <TextInput
      style={{ height: 30, borderColor: 'gray', borderWidth: 1 ,width:200}}
      placeholder='البريد الإلكتروني'
      onChangeText={email => this.setState({ email })}
      value={this.state.email}
      />

      <Text>كلمة المرور </Text>
      <TextInput
      style={{ height: 30, borderColor: 'gray', borderWidth: 1 ,width:200}}
      placeholder='كلمة المرور'
      secureTextEntry
      onChangeText={password => this.setState({ password })}
      value={this.state.password}
      />
      <StatusBar style="auto" />

      <Button
      title="تسجيل الدخول"
      />

      <TouchableOpacity
      onPress={()=> this.props.navigation.navigate('ForgotPassword')}>
            <Text >
            نسيت كلمة المرور؟</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> this.props.navigation.navigate('Registration')}>
                    <Text>
                        سجل كمستخدم جديد  </Text>
                </TouchableOpacity>
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

