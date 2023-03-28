import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
  // query if the type is post & slug is the same as the slug in the url get result back
  *[_type == "post" && slug.current == $slug][0]{
    // select all info from the post
    ...,
    // expand author and categories
    author->,
    categories[]->,
  }
  `;
  // fetch params from the query / post data
  const post: Post = await client.fetch(query, { slug });
  console.log(post);
  return <div>Post: {slug}</div>;
}

export default Post;
