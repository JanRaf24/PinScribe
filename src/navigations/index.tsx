import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '@screens/main/main-screen';
import BootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer
            onReady={async() => {
                await BootSplash.hide({fade: true});
            }}
        >
            <Stack.Navigator>
                <Stack.Screen name="Main Screen" component={MainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
