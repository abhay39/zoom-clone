import { StyleSheet, Text, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
const Serchbar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name='search' size={20} color='#858585' />
      <Text style={styles.textSerchBar}>Search</Text>
    </View>
  );
};

export default Serchbar;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#333333',
    flexDirection:'row',
    paddingHorizontal:10,
    height:40,
    alignItems:'center',
    borderRadius:10
  },
  textSerchBar:{
    fontSize:22,
    color:'#858585',
    paddingLeft:10,
  }
});
