import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BottomTab } from './bottomTab';
import Inbox from '../screens/Inbox';

const Tab = createMaterialTopTabNavigator();

export const Toptab = ()=> {
  return (
    <Tab.Navigator  screenOptions={{

        tabBarStyle:{
            display:'none',
            
        } //nos quita cualquier rastro de las props de la barra de navegacion

    }}>
      <Tab.Screen name="Principal" component={BottomTab} />
      <Tab.Screen name="Inbox" component={Inbox} />
      
    </Tab.Navigator>

  );
}