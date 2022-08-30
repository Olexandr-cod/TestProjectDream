import React from 'react';
import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import Loader from '../Loader/Loader';

interface PostModalProps {
  data: any;
  isShow: boolean;
  pressCallback: (show: boolean) => void;
}

const PostModal: React.FC<PostModalProps> = ({isShow, data, pressCallback}) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isShow}>
        <BlurView
          style={styles.blur}
          blurType="light"
          blurAmount={3}
          reducedTransparencyFallbackColor="white">
          <View style={styles.containerPosition}>
            <TouchableOpacity
              onPress={() => pressCallback(false)}
              style={styles.flexibly}
            />
            <View style={styles.modalView}>
              <View style={styles.container}>
                {data && data.loading && <Loader />}

                {data && data.comments && (
                  <FlatList
                    data={data.comments}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={key => key.id.toString()}
                    renderItem={item => {
                      return (
                        <View
                          style={{
                            backgroundColor: '#fff',
                            padding: 10,
                            margin: 10,
                          }}>
                          <Text>Email: {item.item.email}</Text>
                          <Text>Name: {item.item.name}</Text>
                          <Text>Body: {item.item.body}</Text>
                        </View>
                      );
                    }}
                  />
                )}
              </View>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

export default PostModal;
