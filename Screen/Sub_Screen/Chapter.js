import { Text, StyleSheet, View, FlatList,ScrollView,TouchableOpacity} from 'react-native'
import React, { Component, useEffect } from 'react'
import {useState} from 'react';
import { getDatabase,ref,onValue, DataSnapshot, child} from 'firebase/database';
  
import {database} from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context';



function Chapter({route,navigation}){
    // const cRef=collection(database,"subchapter")
    const[data,setData]=useState(["Data is not receved"]);
    
    const {cid}=route.params;

   let cfid=JSON.stringify(cid)
 
    useEffect(()=>{
      const db=database;
      const starCountRef=ref(db,'subchapter/'); 
      // console.log("---------------out------------"+starCountRef);
      onValue(starCountRef,(snapshot)=>{ 
         const daa=snapshot.val() 
        // console.log(daa)
       let aa= Object.keys(daa).map(key=>({
          id:key,
          ...daa[key]
        }))  
        console.log(cfid,aa)
        fa=aa.filter(e=>e.id==cid)
        setData(fa)
      }) 
    },[]); 
        return (
          <SafeAreaView>
            <ScrollView>
          <FlatList
          data={data}
          renderItem={({ item }) => (  
            <View style={styles.list}>
             {/* <TouchableOpacity onPress={()=>{navigation.navigate('Content',{cid:item.cid})}}> */}
                  <Text style={styles.text}>{item.name}</Text>
              {/* </TouchableOpacity> */}
            </View>
          )}

        />

         
        </ScrollView>
        </SafeAreaView>
       
      
    )
  }


const styles = StyleSheet.create({
  list:{ 
    height:60,
    justifyContent:'center',
    width:350,
    borderWidth:2,
    borderLeftWidth:7,
    borderTopColor:"#d9b3e3",
    borderRightColor:"#d9b3e3",
    borderBottomColor:"#d9b3e3",
    borderLeftColor:"red",
    marginLeft:20,
    marginBottom:30,
    backgroundColor:'#f78d4f',
    borderRadius:7,
    
    shadowColor: '#ffA500',
    shadowOpacity: 0.50,
    shadowOffset: { width: 0, height: 6},
    shadowRadius: 9,
    elevation: 5,

    

    

  },
  text:{
      marginLeft:10,
      color:'#ffffff'
  }
})

export default Chapter;