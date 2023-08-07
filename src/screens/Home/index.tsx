import { useState } from 'react';
import { Alert, Image, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from './components';
import { Header } from '../../components/Header';
import { AntDesign } from '@expo/vector-icons'
import { Info } from '../../components/Info';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participant, setParticipant] = useState('');
  const [taskCounter, setTaskCounter] = useState(0);
  const [taskDoneCounter, setTaskDoneCounter] = useState(0);

  function handleParticipantAdd(): void {
    if (participants.includes(participant)) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome');
    }
    if (participant.trim() === '') {
      setParticipant('');
      return Alert.alert('Participante vazio', 'O nome do participante não pode ser vazio');
    }

    setParticipants(prevState => [...prevState, participant]);
    setTaskCounter(prevState => prevState + 1);
    setParticipant('');
  }

  function handleParticipantRemove(name: string): void {
    Alert.alert('Remover', `Você deseja excluir o participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState => prevState.filter(item => item !== name))
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
          onChangeText={setParticipant}
          value={participant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <AntDesign name='pluscircleo' size={20} color={'#FFF'} />
        </TouchableOpacity>
      </View>

      <Info taskCounter={taskCounter} taskDoneCounter={taskDoneCounter} />

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onCheckPressed={(value) => handleTaskDoneCounter(value)}
            onRemove={() => handleParticipantRemove(item)}
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