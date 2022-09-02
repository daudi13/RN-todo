import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const TodoListView = () => {
  return (
    <View styles={styles.container}>
      {/* today's task */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        <View styles={styles.items}>
          {/* This is where the tasks go */}
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {

  }
})