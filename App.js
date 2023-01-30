import React, { useState } from 'react';
import { ActivityIndicator, MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { theme } from './core/theme';
import { Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';
import ButtonAddTask from './components/ButtonAddTask';
import Stat from './components/Stat';
import CalendarStrip from 'react-native-calendar-strip';
import 'moment';
import 'moment/locale/th';
import moment from 'moment';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [tasks, setTasks] = useState(['ทดสอบ', 'งานอะไรก็ได้', 'สักอย่างที่อยากทำ', 'ทดสอบ', 'งานอะไรก็ได้', 'สักอย่างที่อยากทำ', 'ทดสอบ', 'งานอะไรก็ได้', 'สักอย่างที่อยากทำ']);
  const [loading, setLoading] = useState(false)

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  const updateTask = (updateIndex) => {
    Alert.alert('อัพเดทงาน', 'ลำดับงานที่อัพเดท #' + parseInt(updateIndex + 1), [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }

  const fnDate = (date) => {
    let dateFormat = moment(date).format('YYYY-MM-DD')

    console.log(dateFormat)
  }

  let [fontsLoaded] = useFonts({
    'Kanit-Regular': require('./assets/fonts/Kanit/Kanit-Regular.ttf'),
    'Kanit-Bold': require('./assets/fonts/Kanit/Kanit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View></View>
    );
  } else {
    return (
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>เลือกวันที่</Text>
            <CalendarStrip
              scrollable
              calendarAnimation={{ type: 'sequence', duration: 30 }}
              daySelectionAnimation={{ type: 'background', duration: 200, borderWidth: 0, highlightColor: theme.colors.primary, borderRadius: 25 }}
              style={{ height: 100, fontSize: 20 }}
              calendarColor={'#fff'}
              highlightDateNumberStyle={{ color: '#fff' }}
              highlightDateNameStyle={{ color: '#fff' }}
              calendarHeaderStyle={styles.heading_p}
              dateNumberStyle={{ color: theme.colors.text, fontSize: 20 }}
              dateNameStyle={{ color: theme.colors.text, fontSize: 16 }}
              iconContainer={{ flex: 0.1 }}
              name="th"
              selectedDate={moment().format()}
              onDateSelected={date => fnDate(date)}
              iconLeftStyle={{ display: 'none' }}
              iconRightStyle={{ display: 'none' }}
            />
            <ScrollView style={styles.scrollView}>
              <Stat />
              {loading && <ActivityIndicator />}
              {
                tasks.map((task, index) => {
                  return (
                    <View key={index} style={styles.taskContainer}>
                      <TaskItem index={index + 1} task={task} updateTask={() => updateTask(index)} deleteTask={() => deleteTask(index)} />
                    </View>
                  );
                })
              }
            </ScrollView>
            {/* <TaskInputField addTask={addTask} /> */}
            <ButtonAddTask />
          </SafeAreaView>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    fontFamily: 'Kanit-Regular'
  },
  heading: {
    color: '#303e65',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Kanit-Bold'
  },
  heading_p: {
    color: '#303e65',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: 'Kanit-Regular'
  },
  scrollView: {
    marginBottom: 0,
  },
  taskContainer: {
    marginTop: 20,
  },
});