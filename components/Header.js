import { StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo name='notification' size={40} color='white' />
      <Text style={styles.heading}> Meet & Chat </Text>
      <Entypo name='new-message' size={40} color='white' />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container:{
      marginTop:20,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:10,
    },
    heading:{
        marginTop:10,
        color:'#efefef',
        fontSize:20,
        fontWeight:'bold'
    }
});
