import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft} />
        <TouchableOpacity style={styles.itemBox}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      <View/>
      <View style={styles.itemCircular}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "yellow",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    bordersize: 1,
    marginBottom: 20
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap"
  },

  itemBox: {
    height: 24,
    width: 24,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    boderRadius: 10
  },

itemText: {
},

  itemCircular: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    borderColor: 1,
    borderBottomColor: "blue"
  },

})