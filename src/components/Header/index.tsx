import { Image, View } from 'react-native';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../assets/images/Logo.png')}
        defaultSource={require('../../assets/images/Logo.png')}
        style={styles.logo}
      />
    </View>
  );
}


