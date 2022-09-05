import React from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
import { Task } from "./app/components/Task"

export const App = () => {
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

      {/* Add a task section */}
      <KeyboardAvoidingView behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'write a task'} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  writeTaskWrapper:{
    position: "absolute",
    bottom: 0,
  },
input:{

},
addWrapper:{

},
addText:{

},
  
})

