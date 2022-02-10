import { Modal,SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import StartMeeting from '../components/StartMeeting';
import { io } from 'socket.io-client';
import { Camera } from 'expo-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Chat from '../components/Chat';

let socket;


const menuIcons=[
    {
        id:1,
        name:'microphone',
        title:'Mute',
        customColorr:'#efefef'
    },
    {
        id:2,
        name:'video-camera',
        title:'Stop Video',
    },
    {
        id:3,
        name:'upload',
        title:'Share Content',
    },
    {
        id:4,
        name:'group',
        title:'Participants',
    },
]
const MeetingRoom = () => {
    const [name, setName]=useState()
    const [roomId, setRoomId]=useState()
    const [activeUsers, setActiveUsers]=useState([])
    const [startCamera, setStartCamera]=useState(false)
    const [modalVisible, setModalVisible]=useState(false)

    const __startCamera =async () =>{
        const {status} = await Camera.requestCameraPermissionsAsync();
        if(status === 'granted'){
            setStartCamera(true)
        }
        else{
            Alert.alert('Access Denied')
        }
    }

    const joinRoom = () => {
        __startCamera();
        socket.emit('join-room', {roomId:roomId, userName:name})
    }

    useEffect(()=>{
        socket=io('http://a6e0-125-62-103-169.ngrok.io');
        socket.on('connection', ()=>console.log("Connected"));
        socket.on('all-users', users =>{
            console.log(users, "After Clean Up.")
            setActiveUsers(users)
        });
    },[])

  return (
    <View style={styles.container}>
        {/* Start Meeting Section */}
        {startCamera ? (
            <SafeAreaView style={{flex:1}}>
                <Modal 
                    animationType="slide"
                    transparent={false}
                    presentationStyle={'fullScreen'}
                    visible={modalVisible}
                    onRequestClose={()=>{
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Chat 
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                    />
                </Modal>
                {/* Active User */}
                <View style={styles.activeUsersContainer}>
                    <View style={styles.cameraContainer}>
                        <Camera type={"front"}
                        style={{
                            width:activeUsers.length<=1 ? '100%' : 200, 
                            height:activeUsers.length<=1 ? 600 : 200,
                            }}
                        >
                        </Camera>
                        {activeUsers.filter(user=>(user.userName!==name)).map((user,index)=>
                            <View key={index} style={styles.activeUserContainer}>
                                <Text style={{color:'white'}}>{user.userName}</Text>
                            </View>
                        )}
                    </View>
                </View>
                {/* Footer Items */}
                <View style={styles.menu}>
                    {menuIcons.map((icon, index)=>
                        <TouchableOpacity key={index} style={styles.tile}>
                            <FontAwesome name={icon.name} size={30} color="white" />
                            <Text style={styles.textTitle}>{icon.title}</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.tile}>
                            <FontAwesome name={"comment"} size={30} color="white" />
                            <Text style={styles.textTitle}>Chat</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        ):(
            // Start Meeting section
            <StartMeeting 
            name={name}
            setName={setName}
            roomId={roomId}
            setRoomId={setRoomId}
            joinRoom={joinRoom}
            />
        )
        }   
        
    </View>
  );
};

export default MeetingRoom;

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
    },
    tile:{
        justifyContent:"center",
        alignItems:'center',
        height:50,
        marginTop:15,
    },
    textTitle:{
        color:'white',
        marginTop:10,
    },
    menu:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    cameraContainer:{
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    },
    activeUsersContainer:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
    },
    activeUserContainer:{
        borderColor:'gray',
        borderWidth:1,
        width:200,
        height:200,
        justifyContent:'center',
        alignItems :'center',
    },
});
