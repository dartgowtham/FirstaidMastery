
// Import necessary components and libraries
import React, { useRef,useState } from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput,Button } from 'react-native-paper';

//Firebase

import {getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,} from 'firebase/auth' ;
import {auth} from '../../firebase';
import {database} from '../../firebase'
import { getDatabase, ref, set } from "firebase/database";

const db=database;

const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipeToNextScreen = ({navigation}) => {
  // Create a ref for the ScrollView
  const scrollViewRef = useRef(null);
    

   
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
     

    const Name=()=>{
      return(
        <View>
            <TextInput
            label={'Name'}
            mode='outlined'
            style={styles.input}
            onChangeText={e=>setUsername(e)}
          />
        </View>
      )
    }
    const Email=()=>{
      return(
        <View>
      <TextInput
        label={'Email'}
        style={styles.input}
        onChangeText={e=>setemail(e)}
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
        </View>
      )
    }
    const Other=()=>{
      return(
        <View>
             <TextInput
            label={'Phone No'}
            style={styles.input}
            onChangeText={e=>setPhone(e)}
            mode='outlined'
            keyboardType='number-pad'
          />
       <Button style={{backgroundColor:'orange',borderRadius:20}} onPress={()=>{handleRegister()}}>Register</Button>

        </View>
        
      )
    }
  // Dummy data for the screens
  const screens = [Name(), Email(),Other()];

  // Function to handle swipe to next
  const handleSwipeToNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: SCREEN_WIDTH,
        animated: true,
      });
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={(event) => {
        // You can add additional logic here based on scroll position
        console.log('Scroll position:', event.nativeEvent.contentOffset.x);
      }}
    >
      {screens.map((screen, index) => (
        <View
          key={index}
          style={[styles.screenContainer, { backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightgreen' }]}
        >
          <Text style={styles.screenText}>{screen}</Text>
          <TouchableOpacity style={styles.button} onPress={handleSwipeToNext}>
        <Text style={{width:300}}>Swipe to Next</Text>
      </TouchableOpacity>

        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
         
          
   
    input: {
    	height: 30,
      width:300,
    	margin: 12,
    	padding: 10,
    },
});

export default SwipeToNextScreen;




 
