import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { Checkbox } from 'expo-checkbox';

type Props = {
  name: string;
  // onRemove: () => void;
  // onCheckPressed: (value: boolean) => void;
}

export function SubTask({ name }: Props) {
  const [isChecked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={(value) => {
          if (value) {
            setChecked(true);
            // onCheckPressed(true);
          } else {
            setChecked(false);
            // onCheckPressed(false);
          }
        }}
      />
      {isChecked ? (
        <Text style={styles.subTaskDone}>{name}</Text>
      ) : (
        <Text style={styles.subTaskAdd}>{name}</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => { console.log('oi'); }}>
        <AntDesign name='delete' size={18} color={'#818181'} />
      </TouchableOpacity>
    </View >
  );
}