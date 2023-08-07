import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'

import Checkbox from 'expo-checkbox';

type Props = {
  name: string;
  onRemove: () => void;
  onCheckPressed: (value: boolean) => void;
}

export function Participant({ name, onRemove, onCheckPressed }: Props) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={(value) => {
          if (value) {
            setChecked(true);
            onCheckPressed(true);
          } else {
            setChecked(false);
            onCheckPressed(false);
          }
        }}
      />
      {isChecked ? (
        <Text style={styles.participantNameDone}>{name}</Text>
      ) : (
        <Text style={styles.participantName}>{name}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <AntDesign name='delete' size={20} color={'#808080'} />
      </TouchableOpacity>
    </View>
  );
}