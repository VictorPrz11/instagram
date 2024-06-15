import { CardStyleInterpolators, TransitionPresets, TransitionSpecs, createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Inbox from '../screens/Inbox';
import { TransitionIOSSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { transformer } from '../../../metro.config';
import { BottomTab } from './bottomTab';


const Stack = createStackNavigator();

export const MyStack = () => {
    const navigation = useNavigation()

    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            
    
        }}>
            <Stack.Screen name="Home" component={BottomTab}
           listeners={()=>({
                'gestureStart':()=>console.log('gesto iniciado')
            })}
            />
            <Stack.Screen name="Notifications" component={Inbox} listeners={()=>({
                'gestureStart':()=>console.log('gesto iniciado')
            })}
            />

        </Stack.Navigator>
    );
}