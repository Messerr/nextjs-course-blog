import Head from "next/head";

import AllPosts from "../../components/posts/AllPosts";
import { getAllPost } from "./../../lib/posts-util";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming relating tutorials and posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPost();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
