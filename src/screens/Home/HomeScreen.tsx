import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../components/UI/Loader/Loader';
import PostModal from '../../components/UI/Modal/PostModal';
import {GetComments} from '../../redux/actions/CommentsAction/CommentsActions';
import {GetPosts} from '../../redux/actions/PostsAction/PostsAction';
import {RootState} from '../../store/store';
import styles from './styles';

const HomeScreen: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const comments = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch<any>();

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(GetPosts());
  }, [dispatch]);

  const handlerPost = (userId: number) => {
    setShowModal(true);
    dispatch(GetComments(userId));
  };

  const MemoizedPost = useCallback((item: any) => {
    return (
      <TouchableOpacity
        style={styles.contantPost}
        onPress={() => handlerPost(item?.item?.userId)}>
        <Text>Title: {item?.item?.title}</Text>
        <Text>Body: {item?.item?.body}</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.container}>
      {posts && posts.loading && <Loader />}

      {posts && posts.posts && (
        <FlatList
          data={posts.posts}
          keyExtractor={key => key.id.toString()}
          renderItem={({item}) => <MemoizedPost item={item} />}
        />
      )}

      <PostModal
        isShow={showModal}
        pressCallback={() => setShowModal(false)}
        data={comments}
      />
    </View>
  );
};

export default HomeScreen;
