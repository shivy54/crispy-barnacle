import React, { Component } from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity} from 'react-native';
import SantaAni from '../Components/SantaAnimation';
import db from '../config'
import firebase from 'firebase'

export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            EmailId:'',
            Password:'',
        }
    }
    
    
    login = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
        return Alert.alert("Your In")
        })
        .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
        })
        }

    Signup = (emailId, password)=>{
            firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then((response)=>{
            return Alert.alert("Account created")
            })
            .catch((error)=> {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
            })
            }
    
    render(){
    return(
        <View>
            <View>
                <SantaAni/>
                <Text style={styles.Title}>Book Donor </Text>
            </View>
            <View>
                <TextInput 
                style={styles.loginBox}
                placeholder='Username/Email'
                keyboardType='email-address'
                onChangeText={(text)=>{
                    this.setState({
                        EmailId:text
                    })
                }}/>


                <TextInput 
                style={styles.loginBox}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(Pass)=>{
                    this.setState({
                        Password:pass
                    })
                }}/>


                <TouchableOpacity  
                style={styles.Button} 
                onPress={()=>{
                        this.login(this.state.EmailId,this.state.Password)}}>
                             <Text style={{textAlign:'center'}}>Login:)</Text>
                        </TouchableOpacity>


                <TouchableOpacity 
                style={styles.Button}
                onPress={()=>{
                    this.Signup(this.state.EmailId,this.state.Password)}}>
                        <Text style={{textAlign:'center'}}>SignUp;)</Text>
                </TouchableOpacity>

                </View>
        </View>
    )
    }
}


const styles = StyleSheet.create({
    Button : {
        width:300, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:25,
         backgroundColor:"#ff9800", 
         shadowColor: "#000", 
         shadowOffset: { width: 0, height: 8, },
          shadowOpacity: 0.30,
           shadowRadius: 10.32, 
           elevation: 16,
    },
    loginBox : {
        width:300,
        height:40,
        borderBottomWidth: 1.5, 
        borderColor : '#ff8a65',
        fontSize: 20, 
        margin:10,
        paddingLeft:10 
    },
})