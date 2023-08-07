import { View, Text } from 'react-native';
import { styles } from './styles';

export function Info() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.taskAdd}>Criadas</Text>
          <Text style={styles.taskCounter}>0</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.taskDone}>Concluídas</Text>
          <Text style={styles.taskCounter}>0</Text>
        </View>
      </View>
      <View style={styles.horizontalBar} />
    </>
  );
}