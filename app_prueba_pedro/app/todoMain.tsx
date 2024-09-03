import React, { useState } from 'react';
import Tasks from '@/components/Tasks';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Keyboard,
  Text,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function TodoMain() {
    const [task, setTask] = useState<string>("");
    const [taskItems, setTaskItems] = useState<string[]>([]);

    function handleAddTask() {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask("");
    }

    function completeTask(index: number){
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return(
        
        <View style={styles.tasksWrapper}>
                  <StatusBar barStyle="light-content" backgroundColor="#28282e" />
            <Text style={styles.sectionTitle}>Pokémon Atrapados</Text>
            <View style={styles.items}>
                {taskItems.map((item, index) => {
                    return (
                        <Pressable key={index} onPress={() => completeTask(index)}>
                            <Tasks text={item} />
                        </Pressable>
                    )
                })}
            </View>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}>
                <TextInput style={styles.input} placeholder={'Añadir un Pokémon'} value={task} onChangeText={text => setTask(text)} />
                <Pressable onPress={handleAddTask}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        </View>

    );
}

const styles = StyleSheet.create({
    tasksWrapper:{
        flex:1,
        backgroundColor: '#28282e',
        paddingHorizontal: 20,
    },
    sectionTitle:{
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: "#fff7e4",
        textAlign: 'center',
    },
    items:{
        marginTop: 30,
    },
    writeTaskWrapper:{
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input:{
        paddingVertical: 15,
        paddingHorizontal: 15,
        maxWidth: 250,
        backgroundColor: "#fff7e4",
        borderRadius: 60,
        borderColor: "#f98284",
        borderWidth: 1,
    },
    addWrapper:{
        width: 60,
        height: 60,
        backgroundColor: "#fff7e4",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#f98284",
        borderWidth: 1,
    },
    addText:{

    },
})