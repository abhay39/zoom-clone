import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Navigation';


export default function App() {
  return (
   <Navigation/>
  );
}

const styles = StyleSheet.create({
  
});
