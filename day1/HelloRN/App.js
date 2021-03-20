import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={[styles.box3, styles.boxGeneral]}>
          <Text style={styles.whiteColor}>Box 3</Text>
        </View>
        <View style={[styles.box4, styles.boxGeneral]}>
          <Text style={styles.whiteColor}>Box 4</Text>
        </View>
        <View style={[styles.box5, styles.boxGeneral]}>
          <Text style={styles.whiteColor}>Box 5</Text>
        </View>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
    </View>
  );
};

export default App;
