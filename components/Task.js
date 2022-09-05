import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}>
        </TouchableOpacity>
        <Text style={styles.itemText}>{props.content}</Text>
      </View>
      <View style={styles.circular}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    marginRight: 10,
    opacity: 0.4
  },
  itemText: {
    maxWidth: '80%',

  },
  circular: {
    height: 15,
    width: 15,
    borderRadius: 5,
    borderColor: "#55bcf6",
    borderWidth: 2
  }
})