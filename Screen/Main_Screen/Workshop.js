import { Text, StyleSheet, View, FlatList,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import React, { Component, useEffect } from 'react'
import {useState} from 'react';
import { getDatabase,ref,onValue, DataSnapshot, child} from 'firebase/database';
import {database} from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';




function Workshop({navigation}){
    const[data,setData]=useState([""]);
    useEffect(()=>{
      const db=database;
      const starCountRef=ref(db,'workshop/');
      onValue(starCountRef,(snapshot)=>{
        const daa=snapshot.val();
       const aa= Object.keys(daa).map(key=>({
          id:key,
          ...daa[key]
        }))
        setData(aa)
      })
       
    },[]);
        return (
          <SafeAreaView style={{backgroundColor:"#f5f5f5"}}>
            <ScrollView>
            <View style={styles.searchBar}>
        <TextInput
          placeholder="Search"
          style={styles.ser}
        />
        <Icon name='filter' size={20} style={styles.icon}/>
      </View>
{
          data.map((item,index)=>{
            return(
              
              <View key={index} style={styles.list}> 
              
              <TouchableOpacity onPress={()=>{navigation.navigate('SubWorkshop',{cid:item.id})}}>
                <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.mode}>
                    <Text style={styles.modetext}>{item.mode}</Text>
                  </View>
                  <View style={styles.location} >
                     <Icon name='location' size={17} color={"black"}> 
                        <Text style={styles.locatext} > {item.location}</Text>
                        
                     </Icon>
                  </View>
                  <View style={styles.date} >
                     <Icon name='calendar' size={17} color={"black"}> 
                        <Text style={styles.datetext}> {item.date}</Text>
                     </Icon>
                  </View>
                  <View style={styles.fee} >
                     <Icons name='rupee' size={17} color={"black"}> 
                        <Text style={styles.feetext}>  {item.fee}</Text>
                     </Icons>
                  </View>
              </TouchableOpacity>
              </View>
            )
          })
         }
        </ScrollView>
        </SafeAreaView>
       
      
    )
  }


const styles = StyleSheet.create({
 list:{
    flex:1,
    width:365,
 
    backgroundColor:"#ffffff",
    marginLeft:10,
    marginRight:10,
    padding:10,
    margin:20,
    borderRadius:20
 },
 title:{
  marginTop:10,
  fontSize:20,
  width:250,
  fontWeight:"900",
  color:'#e67802'
 },
 location:{
  width:350,
  marginTop:10
 },
 locatext:{
  fontSize:13
 },
 date:{
  width:350,
  marginTop:10
 },
 datetext:{
  fontSize:13
 },
 mode:{
  backgroundColor:'#e67802',
  width:100,
  borderBottomLeftRadius:20,
  position:'absolute',
  top:0,
  right:0,
 },
 ser:{
  width:320,
  height:37
 },
 icon:{
  marginTop:5
 },
 searchBar: {
  padding: 10,
  borderRadius: 15,
  shadowColor:'black',
  marginBottom:10,
  marginLeft:10,
  marginTop:10,
  backgroundColor:'#fff',
  flexDirection:'row'
},
 modetext:{
  fontSize:20,
  color:'white',
  textAlign:'center',
  fontWeight:"900"
 },
 fee:{
  marginLeft:10,
  marginTop:10,
 },
 feetext:{
  fontSize:13,
 }
})

export default Workshop;

