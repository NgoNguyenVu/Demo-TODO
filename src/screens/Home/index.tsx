import { useState } from 'react';
import { Alert, Image, FlatList, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from './components';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participant, setParticipant] = useState('');

  function handleParticipantAdd(): void {
    if (participants.includes(participant)) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome');
    }
    if (participant.trim() === '') {
      setParticipant('');
      return Alert.alert('Participante vazio', 'O nome do participante não pode ser vazio');
    }

    setParticipants(prevState => [...prevState, participant]);
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
        onPress: () => setParticipants(prevState => prevState.filter(item => item !== name)),
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/Logo.png')}
          defaultSource={require('../../assets/images/Logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#808080'}
          onChangeText={setParticipant}
          value={participant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
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