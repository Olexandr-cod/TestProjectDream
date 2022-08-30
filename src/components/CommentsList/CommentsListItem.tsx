import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface CommentsListItemProps {
  email: string;
  name: string;
  body: string;
}

const CommentsListItem: React.FC<CommentsListItemProps> = ({
  email,
  name,
  body,
}) => {
  return (
    <View style={styles.containerComment}>
      <Text>Email: {email}</Text>
      <Text>Name: {name}</Text>
      <Text>Body: {body}</Text>
    </View>
  );
};

export default CommentsListItem;
