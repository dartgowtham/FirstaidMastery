import { Text, StyleSheet, View, Alert, ImageBackground, Linking } from 'react-native'
import React, { Component, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import am from '../../assets/amb.png';
import fire from '../../assets/fire.png';
import ems from '../../assets/emr.png';
import Icon from 'react-native-vector-icons/FontAwesome'

function Call(){
        return (
          <SafeAreaView>
          <View style={styles.mainbox}>
        
           
          <View style={styles.box}>
            <ImageBackground
              source={am}
              resizeMode='cover'
              borderRadius={20}

              >
              <Text style={styles.name}>Ambulance</Text>
              <Text style={styles.text}>108</Text>
              <Text style={styles.btn} onPress={()=>{Linking.openURL(`tel:108`)}}>Call</Text>
              </ImageBackground>
          </View>   
          <View style={styles.box}>
          <ImageBackground
              source={fire}
              resizeMode='cover'
              borderRadius={20}
              >
              <Text style={styles.name}>Fire Fighters</Text>
              <Text style={styles.text}>101</Text>
              <Text style={styles.btn} onPress={()=>{Linking.openURL(`tel:101`)}}>Call</Text>
              </ImageBackground>
          </View>
           <View style={styles.box}>
           <ImageBackground
              source={ems}
              resizeMode='cover'
              borderRadius={20}
              >
              <Text style={styles.name}>Emergency</Text>
              <Text style={styles.text}>112</Text>
              <Text style={styles.btn} onPress={()=>{Linking.openURL(`tel:112`)}}>Call</Text>
              </ImageBackground>
          </View>
  
 
                

          </View>
      
      </SafeAreaView>
    )
  }
const styles = StyleSheet.create({
  mainbox:{
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    backgroundColor:'#f6f6f6'
  },
  text:{
    marginTop:10,
    marginLeft:10,
    fontSize:22,
    
  },
  name:{
    fontSize:25,
    marginTop:10,
    marginLeft:10,
    color:'#e57802',
    textTransform:'uppercase',
    textShadowColor:"red",
    textShadowRadius:2,
  },
  btn:{
    marginTop:20,
    marginLeft:100,
    fontSize:20,
    color:'#ffffff',
    backgroundColor:'#e57802',
    width:80,
    textAlign:'center',
    fontWeight:'900',
    padding:5,
    borderRadius:20
  },
  box:{
    width:357,
    height:150,
    backgroundColor:'#ffffff',
    borderRadius:20,
    marginTop:10,
    
  }
})

export default Call;