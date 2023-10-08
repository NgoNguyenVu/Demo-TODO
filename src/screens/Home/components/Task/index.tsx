import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import Checkbox from 'expo-checkbox';
import { AddSubTask } from '../AddSubTask';
import { SubTask } from '../SubTask';
import { ITask } from '../..';

type Props = {
  name: ITask;
  onRemove: () => void;
  onCheckPressed: (value: boolean) => void;
  onSubTaskAdd: (value: string) => void;
  onSubTaskRemove: (value: string) => void;
}

export function Task({ name, onRemove, onCheckPressed, onSubTaskAdd, onSubTaskRemove }: Props) {
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
            {!addSubTask ? (
              <AntDesign name='plus' size={24} color={'#4EA8DE'} />
            ) : (
              <AntDesign name='minus' size={24} color={'#E25858'} />)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onRemove}>
            <AntDesign name='delete' size={24} color={'#808080'} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={name.subTasks}
        keyExtractor={item => item.subTaskName}
        renderItem={({ item }) => (
          <SubTask
            name={item.subTaskName}
            onSubTaskRemovePressed={onSubTaskRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      {addSubTask && (
        <AddSubTask
          onSubTaskAddPressed={onSubTaskAdd}
        />
      )}
    </>

  );
}