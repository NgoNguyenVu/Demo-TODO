import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

type Props = {
  taskCounter: number;
  taskDoneCounter: number;
}

export function Info({ taskCounter, taskDoneCounter }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.taskAdd}>{t('info.taskCreated')}</Text>
          <Text style={styles.taskCounter}>{taskCounter}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.taskDone}>{t('info.taskDone')}</Text>
          <Text style={styles.taskCounter}>{taskDoneCounter}</Text>
        </View>
      </View>
      <View style={styles.horizontalBar} />
    </>
  );
}