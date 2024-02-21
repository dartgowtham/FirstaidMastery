import { View,Text,Image,StyleSheet,ScrollView, SafeAreaViewBase, TouchableOpacity} from 'react-native'
import React,{useContext, useState,useEffect}from 'react'
import Userid from '../Login/Login'
import { SafeAreaView } from 'react-native-safe-area-context'
import pp from '../../assets/pp.jpg'

import { getDatabase,ref,onValue, DataSnapshot, child} from 'firebase/database';
import {database} from '../../firebase'



export default function Profile() {
   // console.log(auth.currentUser.uid
   const[data,setData]=useState([""]);
   useEffect(()=>{
     const db=database;
     const starCountRef=ref(db,'users/');
     onValue(starCountRef,(snapshot)=>{
       const daa=snapshot.val();
      const aa= Object.keys(daa).map(key=>({
         id:key,
         ...daa[key]
       }))
       setData(aa)
     })
      
   },[]);
   console.log(data)
   return (
        <SafeAreaView>
         <View>
         {
            data.map((item,index)=>{
               <View key={index} style={styles.header}>
                  <Text style={styles.name}>{item.username}</Text>
               </View>
            })
         }
            <View style={styles.header}>
            <Image source={pp} style={styles.img}/>

            <Text style={styles.name}>P. Gowthama Pandian</Text>
            </View>
            <View style={styles.abt}>
               <Text style={styles.about}>
                  Vivamus eu placerat sapien. Suspendisse commodo congue consectetur. Vivamus semper elit erat, non lacinia dui semper eget. Vivamus vitae nulla a leo semper malesuada. Cras pellentesque enim tortor, ac iaculis ipsum tempor quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum auctor ligula ut dapibus. Donec hendrerit leo et commodo consequat. Aenean vitae nulla neque. Vivamus iaculis sem a lorem vehicula, vel semper lacus dapibus. In metus velit, ultricies porta arcu at, rutrum eleifend enim.
               </Text>
            </View>
            <View style={styles.active}>
              <TouchableOpacity><Text style={styles.btn}>Activitys</Text></TouchableOpacity>
            </View>
            </View>
         </SafeAreaView>
         

   )
 }

const styles=StyleSheet.create({
   header:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      borderRadius:40
   },
   img:{
         width:150,
         height:150,
         borderRadius:75,
         marginTop:10

   },
   name:{
      width:370,
      textAlign:'center',
      marginTop:10,
      fontSize:20,
      padding:10,
      fontWeight:900
   },
   abt:{
      backgroundColor:'white',
      borderRadius:40,
      marginTop:5,
      padding:10
   },
   about:{
      padding:10,

   },
   active:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:50,
      
   },
   btn:{
      backgroundColor:"#e57802",
      width:180,
      fontSize:25,
      color:'white',
      textAlign:'center',
      borderRadius:20,
      padding:10
   }

})