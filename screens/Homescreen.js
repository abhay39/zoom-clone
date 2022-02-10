import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Serchbar from '../components/Serchbar';
import Menubuttons from '../components/Menubuttons';
import Contactmenus from '../components/Contactmenus';

const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{height:'100%'}}>
            <Header/>
            <Serchbar />
            <Menubuttons navigation={navigation} />
            <Contactmenus />
        </View>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
  },
});
