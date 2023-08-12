import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles';

import Checkbox from 'expo-checkbox';
import { AddSubTask } from '../AddSubTask';
import { SubTask } from '../SubTask';
import { ITask } from '../..';

type Props = {
  name: ITask;
  onRemove: () => void;
  onCheckPressed: (value: boolean) => void;
}

export function Task({ name, onRemove, onCheckPressed }: Props) {
  const [isChecked, setChecked] = useState(false);
  const [addSubTask, setAddSubTask] = useState(false);

  return (
    <>
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
          <Text style={styles.taskDone}>{name.taskName}</Text>
        ) : (
          <Text style={styles.taskAdd}>{name.taskName}</Text>
        )}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setAddSubTask(!addSubTask)}>
            <AntDesign name='plus' size={24} color={'#4EA8DE'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onRemove}>
            <AntDesign name='delete' size={24} color={'#808080'} />
          </TouchableOpacity>
        </View>
      </View>
      {addSubTask && (
        <AddSubTask />
      )}
      <FlatList
        data={name.subTasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SubTask
            name={item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </>

  );
}