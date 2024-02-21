import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Learn from './Learn'
import Profile from './Profile'
import Workshop from './Workshop'
import Call from './Call'
import User from './User'
import { View,Image,Text,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel:false,tabBarStyle:[
      { 
        position:'absolute',
        bottom:5,
        left:10,
        right:10,
        elevation:0,
        justifyContent:'center',
        backgroundColor:'#ffffff',
        borderRadius:15,
        height:100,
        ...style.shadow
    }
    ]}}>
      <Tab.Screen name= "Learn" component={Learn} options={{
          headerShown:false,
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center',top:10,width:60}}>
            <Icon name="book" size={30} color="#e67802" style={{color:focused?'#e67802':'grey'}}/>
            <Text style={{color:focused?'#e67802':'grey',textAlign:"center",fontSize:focused?11:12,fontWeight:focused?900:300}}>Learn</Text>
          </View>
        )
        
      }} />
      <Tab.Screen name="Call" component={Call}
        options={{
          headerShown:false,
          tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center',top:10,width:60}}>
            <Icon name="call" size={30} color="#e67802" style={{color:focused?'#e67802':'grey'}}/>
              <Text style={{color:focused?'#e67802':'grey',textAlign:"center",fontSize:focused?11:12,fontWeight:focused?900:300}}>Call</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Workshop" component={Workshop}
          options={{
          headerShown:false,
            tabBarIcon:({focused})=>(
              <View style={{alignItems:'center',justifyContent:'center',top:10,width:60}}>
                 <Icons name="chalkboard-teacher" size={30} color="#e67802" style={{color:focused?'#e67802':'grey'}}/>
                <Text style={{color:focused?'#e67802':'grey',textAlign:"center",fontSize:focused?11:12,fontWeight:focused?900:300}}>Workshop</Text>
              </View>
            )
          }}
        />
      <Tab.Screen name="User" component={User} 
        options={{
          headerShown:false,
          tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center',top:10,width:60}}>
              <Icon name="earth" size={30} color="#e67802" style={{color:focused?'#e67802':'grey'}} />
              <Text style={{color:focused?'#e67802':'grey',textAlign:"center",fontSize:focused?11:12,fontWeight:focused?900:300}}>User</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          headerShown:false,
          tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center',top:10,width:60}}>
              <Icons name="user-circle" size={30} color="#e67802" style={{color:focused?'#e67802':'grey'}}/>
              <Text style={{color:focused?'#e67802':'grey',fontSize:focused?11:12,fontWeight:focused?900:300}}>Profile</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;


const style= StyleSheet.create({
  shadow:{
    shadowColor:'blue',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadious:3.5,
    elevation:10
  }
})