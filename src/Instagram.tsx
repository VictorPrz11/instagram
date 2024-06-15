
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerScreen } from './presentation/navigation/drawer';
import { BottomTab } from './presentation/navigation/bottomTab';
import { MyStack } from './presentation/navigation/Stack';
import { Toptab } from './presentation/navigation/topTab';
import { SafeAreaView } from 'react-native';


const Instagram = () => {
  return (
    <NavigationContainer>
      
      <SafeAreaView style = {{flex:1, backgroundColor:'white'}}>
        {/* <BottomTab/> */}
        {/* <MyStack/> */}
        <Toptab />
        {/* <DrawerScreen/> */}
      </SafeAreaView>
     
    </NavigationContainer>

  )
}
export default Instagram
