import React from 'react';
import PostCard from "../../entities/post/ui/PostCard";
import styles from './PostList.module.css';

type Post = {
  id: number;
  title: string;
  text: string;
};

type PostListProps = {
  posts: Post[];
};

function PostList({ posts }: PostListProps) {
  return (
    <div className={styles.postList}>
      {posts.map((post, index) => (
        <React.Fragment key={post.id || index}>
          <PostCard title={post.title} text={post.text} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default PostList;
