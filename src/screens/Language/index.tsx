
import React from 'react';

import { View, Text, Pressable } from 'react-native';
import { Animated } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes/index';
import { iconBr, iconUs } from '@assets/index';

import { styles } from './styles';

export function Language() {
  const { i18n } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Language'>>();
  const scaleEn = new Animated.Value(1);
  const scalePt = new Animated.Value(1);

  function handleLanguage(language: string, scale: Animated.Value) {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.3,
        duration: 700,
        useNativeDriver: true
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true
      })
    ]).start(() => {
      i18n.changeLanguage(language);
      navigation.navigate('Home');
    });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.flagContainer} >
        <Pressable onPress={() => handleLanguage('en', scaleEn)}>
          <Animated.Image source={iconUs} style={[styles.iconLanguage, { transform: [{ scale: scaleEn }] }]} />
        </Pressable>
        <Text style={styles.text}>English</Text>
      </View>
      <View style={styles.flagContainer}>
        <Pressable onPress={() => handleLanguage('pt', scalePt)}>
          <Animated.Image source={iconBr} style={[styles.iconLanguage, { transform: [{ scale: scalePt }] }]} />
        </Pressable>
        <Text style={styles.text}>Português</Text>
      </View>
    </View >
  );
}