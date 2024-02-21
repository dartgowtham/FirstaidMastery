import React, { useEffect, useState } from 'react';
import { Text, View,ImageBackground,
	StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ToastAndroid} from 'react-native';
import Logo from './firstaid.jpg'
import { TextInput,Button } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';


// importing firebases....................................
import {getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,} from 'firebase/auth' ;
import {auth} from '../../firebase';
import {database} from '../../firebase'
import { getDatabase, ref, set } from "firebase/database";


const db=database;
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Login = ({navigation}) => {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [username,setUsername]=useState('');
    const [phone,setPhone]=useState('');
    const handleRegister = async () =>{
         createUserWithEmailAndPassword(auth,email,password).then(()=>{
           push();
          handleLogin();
        }).catch(er=>{
            console.log(email,password,er)
        })
    }
    // const usersRef = firebase.database().ref('users');
    
   
    const push=()=>{
        
      set(ref(db, 'users/'+ username), {
        userid:auth.currentUser.uid,
        username: username,
        email: email,
        phone_no: phone,
             }).then(()=>{
        console.log("Data Inserted Successfully")
      }).catch((error)=>{
        console.log("Dai error vanthu irugu daa",error)
      })
    }

    const handleLogin = async () =>{
      signInWithEmailAndPassword(auth,email,password).then(()=>{
       navigation.navigate('Tab')


     }).catch(er=>{
         console.log(er)
     })
 }
 
 
return (
	<SafeAreaView style={styles.container}>
	<ImageBackground  
		source={Logo}
		resizeMode="stretch"
		style={styles.img}
        blurRadius={4}
        > 
        <View>
        <View style={[styles.formContain,styles.elevation]}>
        <Text style={styles.text}>Register</Text>
             
      <KeyboardAvoidingView>
      <TextInput
        label={'Name'}
        mode='outlined'
        style={styles.input}
        onChangeText={e=>setUsername(e)}
      />
      <TextInput
        label={'Email'}
        style={styles.input}
        onChangeText={e=>setemail(e)}
        mode='outlined'
        keyboardType='email-address'
      />
       <TextInput
        label={'Phone No'}
        style={styles.input}
        onChangeText={e=>setPhone(e)}
        mode='outlined'
        keyboardType='number-pad'
      />
     <TextInput
        label={'Password'}
        mode='outlined'
        secureTextEntry
        style={styles.input}
        onChangeText={e=>setpassword(e)}
      />
      



      <Button style={{backgroundColor:'orange',borderRadius:20}} onPress={()=>{handleRegister()}}>Register</Button>
      </KeyboardAvoidingView>
      </View> 
      </View>

	</ImageBackground>
   
	</SafeAreaView>
);
};

export default Login;

const styles = StyleSheet.create({
    container:{
        marginTop:20,

    },
    text:{
        textAlign:'center',
        color:'red', 
        fontWeight:'bold',
        textShadowColor:'green',
        textShadowRadius:10,
        fontSize:45,
        padding:10,
        marginBottom:10     
    
    },
    formContain:{
        backgroundColor:'#f5f5f5', 
        width:370,
        height:600,
        borderRadius:50,
        justifyContent:'center',
        padding:10,
        paddingVertical: 45,  
        paddingHorizontal: 25,  
    },
     
      elevation: {  
        shadowColor: 'red',  
        elevation: 20,  
      },
img: {
	height: screenHeight,
	width: screenWidth,
	justifyContent: 'center',
	alignItems: 'center',
 
},
input: {
	height: 30,
	margin: 12,
	padding: 10,
},
});
