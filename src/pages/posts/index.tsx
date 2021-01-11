import { GetServerSideProps } from 'next/types';
import styled from 'styled-components';

interface PostsProps {
  posts: string[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div>
      {posts.map((post) => (
        <Title key={post}>{post}</Title>
      ))}
    </div>
  );
}

const Title = styled.h2``;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { posts: ['first posts', 'second posts'] },
  };
};
