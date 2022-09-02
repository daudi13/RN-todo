import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Task } from '../components/Task'

export const TodoListView = () => {
  return (
    <View styles={styles.container}>
      {/* today's task */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        <View styles={styles.items}>
          <Task text={"task 1"} />
          <Task text={"task 2"} />
          <Task text={"task 3"} />
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
  }
})