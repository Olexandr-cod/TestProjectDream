import React from 'react';
import {FlatList} from 'react-native';
import CommentsListItem from './CommentsListItem';

interface CommentsListProps {
  dataComment: any;
}

const CommentsList: React.FC<CommentsListProps> = ({dataComment}) => {
  return (
    <FlatList
      data={dataComment}
      showsVerticalScrollIndicator={false}
      keyExtractor={key => key.id.toString()}
      renderItem={item => (
        <CommentsListItem
          email={item?.item?.email}
          name={item?.item?.name}
          body={item?.item?.body}
        />
      )}
    />
  );
};

export default CommentsList;
