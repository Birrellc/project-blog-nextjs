import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '../components/PreviewSuspense';
import PreviewBlogList from '../components/PreviewBlogList';
import BlogList from '../components/BlogList';

// Sanity query
// Get all of type post
// select all fields
// author and categories are references - categories is an array
// expand the references and get data
// order by created date

const query = groq`*[_type=="post"] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`;

export default async function Home() {
  // check if in preview mode
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p className='text-center text-lg animate-pulse text-[#f77]'>
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
