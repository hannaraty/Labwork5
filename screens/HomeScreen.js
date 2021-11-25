import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { KeyboardAvoidingView,  StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { auth } from "../firebase";
import Tasks from "../components/Tasks";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [task, setTask] = useState();

  const [taskItems, setTaskItem] = useState([]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => console.log(error));
      
  }

  const addTask = () => {

    setTaskItem([...taskItems, task])
    setTask(null);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }



  return (
    
<View style={styles.container}>
 
<View style={styles.logOut}>
    <Text style={styles.logInText}>Hello, {auth.currentUser?.email}!</Text>
    <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText, styles.buttonOutline}>Log out</Text>
      </TouchableOpacity>
      </View>
      
      
      <View style={styles.toDoHome}>
        <Text style={styles.toDoTitle}> To-Do List  </Text>
        <View style={styles.taskItem}>
        
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                  <Tasks text={item} />
                </TouchableOpacity>
                
              )
            })
          }
          
        </View>
      </View>
      <KeyboardAvoidingView style={styles.taskName}>
        <TextInput style={styles.taskNameText} placeholder={'Write here'} value={task} onChangeText={text => setTask(text)} />
        
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addTask}>
            <Image source={{ uri: 'https://www.iconsdb.com/icons/preview/black/plus-xxl.png' }} style={styles.addTaskText}></Image>
          </View>
        </TouchableOpacity>
        
        <View>
      
      </View>
      </KeyboardAvoidingView>
      
    </View>
    
    
    
  );

};






export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF7D1',
      },

      logOut: {
        paddingTop: 50,
        backgroundColor: "#FFF7D1", 
        justifyContent: 'space-between',
        alignItems: 'stretch', 
        flexDirection: 'row',
        padding: 10,
      },
      
      logInText: {
        marginTop: 15,
        fontWeight: 'bold', 
      },

    button: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
         
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 11,
  },
  buttonOutline: {
    backgroundColor: '#FFF2AB',
    marginTop: 5,
    borderColor: "#000000",
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  toDoHome: {
    paddingTop: 90,
    paddingHorizontal: 30,
  },
  toDoTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  taskItem: {

  },
  taskName: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',


  },
  taskNameText: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    borderRadius: 60,
    backgroundColor: '#FFF2AB',
    borderWidth: 1,

  },
  addTask: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF2AB',
    borderWidth: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',


  },
  addTaskText: {
    height: 30,
    width: 30,

  },
});