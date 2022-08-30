import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
import NetInfo from '@react-native-community/netinfo';

const ConnectionNotice: React.FC = () => {
  const [connect, setConnect] = useState<boolean | null>();

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setConnect(state.isConnected);
    });
  }, [connect]);

  return (
    <>
      {!connect ? (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>Connect: False</Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
  },
  offlineText: {color: '#fff'},
});

export default ConnectionNotice;
