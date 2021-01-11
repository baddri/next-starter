import { GetServerSideProps } from 'next/types';
import { Title } from 'components/Title';

interface PostsProps {
  posts: string[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div>
      {posts.map((post) => (
        <Title as="h2" key={post}>
          {post}
        </Title>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { posts: ['first posts', 'second posts'] },
  };
};
