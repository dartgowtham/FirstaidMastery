import { Text, StyleSheet, View, FlatList,ScrollView,TouchableOpacity, Image} from 'react-native'
import React, { Component, useEffect } from 'react'
import {useState} from 'react';
import { getDatabase,ref,onValue, DataSnapshot, child} from 'firebase/database';

import {database} from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context';


function Learn({navigation}){
    const[id,setCid]=useState(["Poodaa foll"]);
    const[data,setData]=useState([""]);
    useEffect(()=>{
      const db=database;
      const starCountRef=ref(db,'learn/');
      onValue(starCountRef,(snapshot)=>{
        const daa=snapshot.val();
       const aa= Object.keys(daa).map(key=>({
          id:key,
          ...daa[key]
        }))
        setData(aa)
      })
       
    },[]); 

   
    const [expandedItem, setExpandedItem] = useState(null);
    const renderItem = ({ item }) => {
      const isExpanded = expandedItem === item.cid;
  
      return (
        <View>
        <View style={styles.list}>
          <TouchableOpacity onPress={() => setExpandedItem(isExpanded ? null : item.cid)}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
         
        </View>
         <View>
         {isExpanded && <View style={{marginTop:15,borderRadius:20,backgroundColor:'#ffffff',padding:10,width:350,height:'auto',justifyContent:'center',alignSelf:'center'}}>
          {/* <Text style={{fontSize:17,fontWeight:900}}>{item.catag[0].ctitle}</Text> */}
          {
          data.map((i,index)=>{
            return(
              
              <View key={index}>
          <Text style={{fontSize:17,fontWeight:900}}>{i.catag.ctitle}</Text>
                
              </View>)})}
        </View>}
         </View>
         </View>
      );
    };
  
     if (!data) return <Text>Loading...</Text>;
        return (
          <SafeAreaView>
            <ScrollView>


 

              <View> 
              <FlatList
                data={data}
                keyExtractor={(item) => item.cid}
                renderItem={renderItem}
              />
        </View>
        </ScrollView>
        </SafeAreaView>
       
      
    )
  }


const styles = StyleSheet.create({
  list:{ 
    height:90,
    justifyContent:'center',
    width:350,
    marginLeft:20,
    marginBottom:30,
    backgroundColor:'#f5f5f5',
    borderRadius:7,
    
    elevation: 5,
  },
  text:{
      marginLeft:10,
      color:'#f78d4f',
      fontSize:22,
      fontWeight:900

  }
})

export default Learn;  

 

