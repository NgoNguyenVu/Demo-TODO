import React from 'react';
import { useState } from 'react';

import { Alert, Image, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Clipboard } from '@assets/index';
import { Task } from './components/Task';
import { Header } from '../../components/Header';
import { AntDesign } from '@expo/vector-icons';
import { Info } from '../../components/Info';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

export type ITask = {
  taskName: string;
  subTasks: string[];
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState('');
  const [taskCounter, setTaskCounter] = useState(0);
  const [taskDoneCounter, setTaskDoneCounter] = useState(0);

  const { t } = useTranslation();

  function handleTaskAdd(): void {
    if (tasks.some(item => item.taskName === task)) {
      return Alert.alert(t('home.alertTaskExist.title'), t('home.alertTaskExist.message'));
    }
    if (task.trim() === '') {
      setTask('');
      return Alert.alert(t('home.alertTaskEmpty.title'), t('home.alertTaskEmpty.message'));
    }
    const taskObject = {
      taskName: task,
      subTasks: [],
    };

    setTasks(prevState => [...prevState, taskObject]);
    setTaskCounter(prevState => prevState + 1);
    setTask('');
  }

  function handleTaskRemove(name: string): void {
    Alert.alert(t('home.alertTaskRemove.title'), t('home.alertTaskRemove.message', { name }), [
      {
        text: t('home.alertTaskRemove.textNo'),
        style: 'cancel',
      },
      {
        text: t('home.alertTaskRemove.textYes'),
        onPress: () => {
          setTasks(prevState => prevState.filter(item => item.taskName !== name));
          setTaskCounter(prevState => prevState - 1);
        },

      }
    ]);
  }

  function handleTaskDoneCounter(value: boolean): void {
    if (value) {
      setTaskDoneCounter(prevState => prevState + 1);
    } else {
      setTaskDoneCounter(prevState => prevState - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          keyboardAppearance='dark'
          autoCapitalize='words'
          keyboardType='default'
          placeholderTextColor={'#808080'}
          onChangeText={setTask}
          value={task}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <AntDesign name='pluscircleo' size={20} color={'#FFF'} />
        </TouchableOpacity>
      </View>

      <Info taskCounter={taskCounter} taskDoneCounter={taskDoneCounter} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.taskName}
        renderItem={({ item }) => (
          <Task
            key={item.taskName}
            name={item}
            onCheckPressed={(value) => handleTaskDoneCounter(value)}
            onRemove={() => handleTaskRemove(item.taskName)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <Image source={Clipboard} style={styles.emptyListImage} />
            <Text style={styles.emptyListBold}>
              {t('home.emptyListTitle')}
            </Text>
            <Text style={styles.emptyList}>
              {t('home.emptyListSubTitle')}
            </Text>
          </>
        )}
      />
    </View>
  );
}