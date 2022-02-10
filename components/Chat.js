import { StyleSheet, Text, Keyboard, View,TextInput, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import React, {useState} from 'react';
import ChatHeader from './ChatHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Chat = ({setModelVisible}) => {
    const [messageText, setMessageText]=useState('')
  return (
    <View style={styles.container}>
        <SafeAreaView style={{height:'100%'}}>
            <KeyboardAvoidingView behavior={Platform.OS==='ios' ? "padding" : "height"} style={{flex:1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{flex:1,}}>
                        <ChatHeader setModelVisible={setModelVisible} />
                        {/* Chat Message */}
                        <View style={styles.chatMessage}>

                        </View>
                        {/* Typer Message */}
                        <View style={styles.chatFormContainer}>
                            <Text style={{color:"white"}}>Sent to: Everyone</Text>
                            <View style={styles.chatForm}>
                                <TextInput 
                                    valur={messageText}
                                    onChangeText={text => setMessageText(text)}
                                    style={styles.textInput} placeholder="Tap here to Chat" placeholderTextColor="#598589" 

                                />
                                <TouchableOpacity
                                    style={{...styles.sendButton,
                                        backgroundColor:messageText.length>0?'#0B71EB':'#373838'}}
                                >
                                    <FontAwesome name="send" size={25} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1c1c1c',
    },
    chatFormContainer:{
        borderColor:'#2f2f2f',
        borderTopWidth:1,
        padding:12, 
    },
    chatForm:{
        flexDirection:'row',
    },
    textInput:{
        height:40,
        color:'#efefef',
        borderColor:'#598589',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginTop:12,
        flex    : 1,
    },
    sendButton:{
        height:40,
        width:40,
        marginTop:12,
        marginLeft:10,
        // backgroundColor:'#373838',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    chatMessage:{
        flex:1,
    }
});
