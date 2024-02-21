import React, {  useState } from 'react';
import { Text, View,ImageBackground,
StyleSheet, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from './firstaid.jpg'
import { TextInput,Button } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
import { createContext} from 'react';

// importing firebases....................................
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth' ;
import {auth} from '../../firebase';
import Profile from '../Main_Screen/Profile';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;



const Userid = createContext();
const Login = ({navigation}) => {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [uid,setUid]=useState('fkdj')
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
        <Text style={styles.text}>Login</Text>
             
      <KeyboardAvoidingView>
      <TextInput
        label={'Email'}
        style={styles.input}
        onChangeText={e=>setemail(e)}
        value='a@f.in'
        
        mode='outlined'
        keyboardType='email-address'
      />
     <TextInput
        label={'Password'}
        mode='outlined'
        secureTextEntry
        style={styles.input}
        onChangeText={e=>setpassword(e)}
         
      />
      

      <Button style={{backgroundColor:'orange',borderRadius:20}} onPress={()=>{handleLogin()}}>Login</Button>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}><Text style={{color:'blue',marginTop:10,textAlign:"center"}}>Create a New Account?</Text></TouchableOpacity>
      <TouchableOpacity><Text style={{color:'red',marginTop:10,textAlign:"center"}}>Forget Password?</Text></TouchableOpacity>
         </View> 
      </View>

	</ImageBackground>
   
  <Userid.Provider value={{uid,setUid}}>
      <Profile/>
  </Userid.Provider>

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
        backgroundColor:'white', 
        width:370,
        height:400,
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

// import { useState } from 'react'
// import {database} from '../../firebase'
// import firebase from 'firebase/compat/app'
// import { TextInput } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native';

// const Otp=()=>{
//   const [phoneNum,setPhoneNum]=useState('');
//   const [code,setCode] = useState('');
//   const [verifiId,setVerfiId]=useState('')
//   const recaptchaVerifier=useRef(null);

//   const sendVerifi=()=>{
//     const phoneProvider=new firebase.auth.PhoneAuthProvider();
//     phoneProvider
//           .verifyPhoneNumber(phoneNum,recaptchaVerifier)
//           .then(setVerfiId);
//           setPhoneNum('')
//   }

//     const confirmCode=()=>{
//         const credential=firebase.auth.PhoneAuthProvider.credential(
//           verifiId,
//           code
//         );
//         firebase.auth().signInWithCredential(credential)
//         .then(()=>{
//           setCode('')
//         })
//         .catch((error)=>{
//             console.log('THis is error')
//         })
//     }

// }


// return(
//   <View>
//     <FirebaseRecaptchaVerifierModal
//       ref={recaptchaVerifier}
//       firebaseConfig={firebaseConfig}
//       />
//       <Text>Login Using OTP</Text>
//       <TextInput
//         placeholder='Phone num'
//         onChangeText={setPhoneNum}
//         keyboardType='phone-pad'
//         />
//         <TouchableOpacity onPress={sendVerifi}>
//           <Text>Send Verification</Text>
//         </TouchableOpacity>

//         <TextInput
//         placeholder='code'
//         onChangeText={setCode}
//         keyboardType='number-pad-pad'
//         />
//         <TouchableOpacity onPress={confirmCode}>
//           <Text>Confirm Code</Text>
//         </TouchableOpacity>
//   </View>
// )