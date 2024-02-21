import { Text, StyleSheet, View,Linking,ScrollView} from 'react-native'
import React, { Component, useEffect } from 'react'
import {useState} from 'react';
import { getDatabase,ref,onValue, DataSnapshot, child} from 'firebase/database';
  
import {database} from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';




function SubWorkshop({route}){
    // const cRef=collection(database,"subchapter")
    const[data,setData]=useState(["Data is not receved"]);
    const {cid}=route.params; 
    useEffect(()=>{
      const db=database;
      const starCountRef=ref(db,'workshop/'); 
      // console.log("---------------out------------"+starCountRef);
      onValue(starCountRef,(snapshot)=>{ 
         const daa=snapshot.val() 
        // console.log(daa)
       let aa= Object.keys(daa).map(key=>({
          id:key,
          ...daa[key]
        }))  
         
        fa=aa.filter(e=>e.id==cid)
        // const fd = fa.replace(/\n/g, Platform.OS === "android" ? "\n" : "\r");
      setData(fa);
     phoneNumber= data[0].phone;
     link=data[0].link;
       console.log(phoneNumber)
      }) 
    },[]); 
        return (
          <SafeAreaView>
            <ScrollView>
            {
          data.map((item,index)=>{
            return(
              
              <View key={index} style={{backgroundColor:"#f5f5f5",flex:1,justifyContent:'center',alignItems:"center"}}> 
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.box}>
                <View style={styles.location} >
                     <Icon name='location' size={20} color={"black"}> 
                        <Text style={styles.locatext} > {item.location}</Text>
                     </Icon>
                  </View>
                  <View style={styles.date} >
                     <Icon name='calendar' size={20} color={"black"}> 
                        <Text style={styles.datetext}> {item.date}</Text>
                     </Icon>
                  </View>
                  <View style={styles.mode} >
                     <Icon name='people' size={20} color={"black"}> 
                        <Text style={styles.modetext}> {item.mode}</Text>
                     </Icon>
                     <Icons name='rupee' size={20} color={"black"}> 
                        <Text style={styles.feetext}> {item.fee}</Text>
                     </Icons>
                  </View>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.abt}> About the WorkShop:</Text>
                    <Text style={styles.desc}>{item.desc}</Text>
                  </View>
                  <View style={styles.btnbox}>
                  <View style={styles.btn}>
                    <Text style={styles.btntext} onPress={()=>{Linking.openURL(`${item.link}`)}}>Register Now</Text>
                  </View>
                  <View style={styles.btn}>
                   <Text style={styles.btntext} onPress={()=>{Linking.openURL(`tel:${phoneNumber}`)}}>Call</Text>
                  </View>
                  </View>
              </View>
            )
          })
         }
        </ScrollView>
        </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  
  title:{
    marginTop:20,
    padding:10,
    fontSize:25,
    fontWeight:"900",
    color:'#e67802'
   },
   location:{
    width:350,
    marginTop:5,
    padding:10,
   },
   locatext:{
    fontSize:15
   },
   date:{
    width:350,
    marginTop:5,
    padding:10,
   },
   mode:{
    width:350,
    marginTop:5,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   datetext:{
    fontSize:15
   }, 
   feetext:{
    fontSize:15,
    fontWeight:'900'
   }, 
   modetext:{
    fontSize:15
   },
   box:{
    width:367,
    backgroundColor:"#ffffff",
    borderRadius:10,
    position:"relative",
    marginTop:10
   },
   desc:{
    textAlign:'justify',
    padding:10,
    color:"grey"
   },
   abt:{
    fontWeight:"900",
    fontSize:17,
  
    backgroundColor:"#e56802",
    padding:5,
    color:"#ffffff",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
   },
   btnbox:{
   width:365,
   flexDirection:'row',
   justifyContent:'space-evenly',
   marginTop:20
   },
   btn:{
    backgroundColor:"#e57802",
    width:120,
    borderRadius:20
   },
   btntext:{
    color:'#ffffff',
    padding:10,
    textAlign:'center'
   }
})

export default SubWorkshop;