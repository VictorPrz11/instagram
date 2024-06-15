import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Inbox from '../screens/Inbox';
import Home from '../screens/home';
import { RollInRight } from 'react-native-reanimated';
import { View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const DrawerScreen = ()=> {
  const {width} = useWindowDimensions()
  const navigation = useNavigation()
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent} screenOptions={{
      headerShown:false,
      drawerPosition: 'right',
      
    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Inbox" component={Inbox} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props : DrawerContentComponentProps)=>
  {
    return(
       <Inbox/>

    )
  }