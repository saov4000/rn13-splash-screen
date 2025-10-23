import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './HomeStyle';

export default function screens() {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Home Screen</Text>
    </View>
  );
}