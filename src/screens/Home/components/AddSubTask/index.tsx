import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

type Props = {
  onSubTaskAddPressed: (value: string) => void;
}

export function AddSubTask({ onSubTaskAddPressed }: Props) {
  const [inputValue, setInputValue] = React.useState<string>('');

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={t('addSubTask.placeholder')}
        keyboardAppearance='dark'
        autoCapitalize='words'
        keyboardType='default'
        placeholderTextColor={'#808080'}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (inputValue) {
            onSubTaskAddPressed(inputValue);
            setInputValue('');
          }
        }}>
        <AntDesign name='pluscircleo' size={20} color={'#FFF'} />
      </TouchableOpacity>
    </View>
  );
}