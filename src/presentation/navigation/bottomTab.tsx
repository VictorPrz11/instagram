import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Add from '../screens/add';
import Reels from '../screens/reels';
import Search from '../screens/search';
import User from '../screens/user';
import Icono from '../components/Icon';
import { DrawerScreen } from './drawer';
import { MyStack } from './Stack';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

export const BottomTab = ()=> {
  return (
    <Tab.Navigator  screenOptions={{
      tabBarActiveTintColor:'black',
      headerShown: false,
      tabBarShowLabel:false,
     
    }}>
      <Tab.Screen name="Main" options={{
        tabBarIcon: ({color, focused})=>(!focused ? <Icono icon = 'home-outline' style= {{color:color,}} /> :  <Icono icon = 'home-sharp' style= {{color:color,}} /> )
      }} component={Home} />
      <Tab.Screen name="Search" options={{
        tabBarIcon: ({color, focused})=>(!focused ? <Icono icon= {'search-outline'} style= {{color:color}}/> : <Icono icon= {'search-sharp'} style= {{color:color}}/> )
      }}  component={Search} />
      <Tab.Screen name="Add" options={{
        tabBarIcon: ({color, focused})=>(!focused ? <Icono icon= {'add-circle-outline'} style= {{color:color}}/> : <Icono icon= {'add-circle-sharp'} style= {{color:color}}/>)
      }}  component={Add} />
      <Tab.Screen name="Reels"  options={{
        tabBarIcon: ({color, focused})=>(!focused ? <Icono icon= {'videocam-outline'} style= {{color:color}}/> : <Icono icon= {'videocam-sharp'} style= {{color:color}}/>)
       }} component={Reels} />
      <Tab.Screen name="User" options={{
        tabBarIcon: ({color, focused})=>(!focused ? <Icono icon= {'person-circle-outline'} style= {{color:color}}/> : <Icono icon= {'person-circle-sharp'} style= {{color:color}}/>)
      }}  component={User} />
    </Tab.Navigator>
  );
}
