import { useState } from 'react';
import { Alert, Image, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Task } from './components/Task';
import { Header } from '../../components/Header';
import { AntDesign } from '@expo/vector-icons'
import { Info } from '../../components/Info';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');
  const [taskCounter, setTaskCounter] = useState(0);
  const [taskDoneCounter, setTaskDoneCounter] = useState(0);

  function handleTaskAdd(): void {
    if (tasks.includes(task)) {
      return Alert.alert('Tarefa já existe!', 'Já existe uma tarefa na lista com esse nome.');
    }
    if (task.trim() === '') {
      setTask('');
      return Alert.alert('Tarefa vazia!', 'O nome da tarefa não pode ser vazio.');
    }

    setTasks(prevState => [...prevState, task]);
    setTaskCounter(prevState => prevState + 1);
    setTask('');
  }

  function handleTaskRemove(name: string): void {
    Alert.alert('Remover!', `Você deseja excluir a tarefa ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(item => item !== name))
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
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            onCheckPressed={(value) => handleTaskDoneCounter(value)}
            onRemove={() => handleTaskRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <Image source={require('../../assets/images/Clipboard.png')} style={styles.emptyListImage} />
            <Text style={styles.emptyListBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyList}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </>
        )}
      />
    </View>
  );
}