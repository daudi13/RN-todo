import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.itemBox}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.itemCircular}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    bordersize: 1,
    marginBottom: 20,
    justifyContent: "space-between"
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemBox: {
    height: 24,
    width: 24,
    marginRight: 20,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    boderRadius: 10
  },

  itemText: {
    maxWidth: "80%",
},

  itemCircular: {
    height: 12,
    width: 12,
    backgroundColor: "#55bcf6",
    borderRadius: 5,
    borderWidth: 2,
    
  },

})