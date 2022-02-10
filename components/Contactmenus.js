import { Image, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const ContactsMenuButtons = [
  {
    type:'starred',
    name:'Starred',
  },
  {
    type:'contact',
    name:'Abhay Kumar Gupta',
    photo:require('../assets/avatar3.jpg')
  },
  {
    type:'contact',
    name:'Arun',
    photo:require('../assets/avatar1.png')
  },
  {
    type:'contact',
    name:'Bimalesh',
    photo:require('../assets/avatar2.png')
  },
]

const Contactmenus = () => {
  return (
    <View style={styles.container}>
        {/* Contact Continer */}
        {ContactsMenuButtons.map((contact, index)=>
          <View style={styles.row} key={index}>
            {/* Image */}
            {contact.type =='starred' ? (
              <View style={styles.stareedtIcon}>
                <AntDesign name='star' size={30} color='#efefef' />
              </View>) :
              (
                <Image source={contact.photo} style={styles.image}/>
              )
            }
            {/* Text */}
            <Text style={styles.text}>{contact.name}</Text>
          </View>
        )}
    </View>
  );
};

export default Contactmenus;

const styles = StyleSheet.create({
  container:{
    paddingLeft:10
  },
  row:{
    flexDirection:'row',
    marginTop:20,
    alignItems:'center'

  },
  stareedtIcon:{
    backgroundColor:'#333333',
    width:55,
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  },
  text:{
    paddingLeft:15,
    color:'white',
    fontSize:18,
  },
  image:{
    height:55,
    width:55,
    borderRadius:20,
  }
});
