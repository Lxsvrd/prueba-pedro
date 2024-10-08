import React from "react";
import {View, Text, StyleSheet, Pressable } from "react-native";

export default function Tasks(props) {

    return (
        <View style={styles.item}>
        <View style={styles.itemLeft}>
        <Pressable style={styles.square}></Pressable>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#fff7e4",
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap",
    },
    square:{
        width:24,
        height:24,
        backgroundColor:"#f98284",
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:"80%",
    },
    circular:{
        width:12,
        height:12,
        borderColor:"#f98284",
        borderWidth:2,
        borderRadius:5,
    },
})