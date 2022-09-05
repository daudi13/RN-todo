import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import { Task } from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <Task content={'task one'} />
          <Task content={'task two'}/>
          <Task content={'task three'}/>
        </View>
      </View>
      {/* Write a task section */}
      <KeyboardAvoidingView style={styles.writeTask} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TextInput style={styles.input} placeholder={'write a task'} placeholderTextColor="grey" />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
  },
  writeTask: {
    position: "absolute",
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#ffff',
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: 'center',
    fontSize: 24,
    borderColor: "#c0c0c0",
    borderWidth: 2
  },
  addText: {

  }
});
