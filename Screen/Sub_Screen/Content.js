import { Text, StyleSheet, View, FlatList,ScrollView} from 'react-native'
import React, { Component, useEffect } from 'react'
import {useState} from 'react';
import { getDatabase,ref,onValue, DataSnapshot, child} from 'firebase/database';
  
import {database} from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context';



function Content({route}){
    // const cRef=collection(database,"subchapter")
    const[data,setData]=useState(["Data is not receved"]);
    const {cid}=route.params;
    let a="<"
    let b=">"
    console.log(cid)

 
    useEffect(()=>{
      const db=database;
      const starCountRef=ref(db,'content/'); 
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
       
      }) 
    },[]); 
        return (
          <SafeAreaView>
            <ScrollView>
            {
          data.map((item,index)=>{
            return(
              <View key={index} style={styles.main}> 
                <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.desc}</Text>
                  <Text style={styles.pre}>{a}</Text>
                  <Text style={styles.next}>{b}</Text>

              </View>
            )
          })
         }
        </ScrollView>
        </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
    main:{
        height:770
    },
  title:{
    fontSize:20,
    color:"#f78d4f",
    marginTop:30,
    paddingBottom:20,
    marginLeft:10
  },
  text:{
    marginLeft:30,
    marginRight:30,
  },
  pre:{
    position:'absolute',
    bottom:0,
    fontSize:30,
    padding:20,
    backgroundColor:"#f78d4f",
    borderRadius:20,
    marginLeft:10,
    borderWidth:2,
    borderColor:"#800080",
    color:"#ffffff",
    fontWeight:"900"
  },
  next:{
    position:'absolute',
    bottom:0,
    right:0,
    fontSize:30,
    padding:20,
    backgroundColor:"#f78d4f",
    borderRadius:20,
    marginRight:10,
    borderWidth:2,
    borderColor:"#800080",
    fontWeight:"900",
    color:"#ffffff",
    fontWeight:"900"
  }

})

export default Content;