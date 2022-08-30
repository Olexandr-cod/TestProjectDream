import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import Loader from '../Loader/Loader';
import CommentsList from '../../CommentsList/CommentsList';

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
                  <CommentsList dataComment={data.comments} />
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
