import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler'

const StartMeeting = ({name, roomId, setName, setRoomId, joinRoom}) => {
  return (
    <View>
      <View style={styles.startMeetingContainer}>
          <View style={styles.info}>
            <TextInput style={styles.textInput} placeholder='Enter your name' placeholderTextColor='#767476' 
                value={name}
                onChangeText={text =>setName(text)}  
            />
          </View>
          <View style={styles.info}>
          <TextInput style={styles.textInput} placeholder='Enter room ID' placeholderTextColor='#767476' 
                value={roomId}
                onChangeText={text =>setRoomId(text)}  
            />
          </View>
          <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.startMeetingButton} 
                    onPress={()=>joinRoom()}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Start Meeting</Text>
                </TouchableOpacity>

          </View>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1c1c1c'
    },
    info:{
        width:'100%',
        backgroundColor:'#373538',
        height:50,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#484648',
        padding:12,
        justifyContent:'center'

    },
    textInput:{
        color:'white',
        fontSize:18
    },
    startMeetingButton:{
        width:350,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0470DC',
        height:50,
        borderRadius:15,
    }
});

