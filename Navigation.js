import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './screens/Homescreen';
import MeetingRoom from './screens/MeetingRoom';

const Navigation = () => {
    const Stack =createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={Homescreen} options={{
                    headerShown:false,
                }}/>
                <Stack.Screen name="Room" component={MeetingRoom} 
                    options={{
                        title:"Start a Meeting",
                        headerStyle:{
                            backgroundColor:'#1c1c1c',
                            shadowOpacity:0,
                        },
                        headerTintColor:'white'
                    }}    
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

const styles = StyleSheet.create({});
