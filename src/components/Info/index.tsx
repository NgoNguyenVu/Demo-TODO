import { View, Text } from 'react-native';
import { styles } from './styles';

export function Info() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.taskAdd}>Criadas</Text>
        <Text style={styles.taskDone}>Concluídas</Text>
      </View>
      <View style={styles.horizontalBar} />
    </>
  );
}