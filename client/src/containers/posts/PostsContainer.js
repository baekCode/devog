import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../module/posts';
import Posts from '../../components/posts/Posts';

function PostsContainer(props) {
  const dispatch = useDispatch();
  const {posts} = useSelector(({posts}) => ({
    posts: posts.posts
  }));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <Posts posts={posts}/>;
}

export default PostsContainer;
