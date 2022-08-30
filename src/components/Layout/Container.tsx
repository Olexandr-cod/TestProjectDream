import React from 'react';
import {View} from 'react-native';
import ConnectionNotice from '../Connection/ConnectionNotice';
import styles from './styles';

const Container: React.FC = ({children}: any) => {
  return (
    <View style={styles.container}>
      <ConnectionNotice />
      {children}
    </View>
  );
};

export default Container;
