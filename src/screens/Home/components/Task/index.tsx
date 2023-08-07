import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles';

import Checkbox from 'expo-checkbox';

type Props = {
  name: string;
  onRemove: () => void;
  onCheckPressed: (value: boolean) => void;
}

export function Task({ name, onRemove, onCheckPressed }: Props) {
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
        <Text style={styles.taskDone}>{name}</Text>
      ) : (
        <Text style={styles.taskAdd}>{name}</Text>
      )}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.button} onPress={ () => {} }>
          <AntDesign name='pluscircle' size={24} color={'#4EA8DE'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <AntDesign name='delete' size={24} color={'#808080'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}