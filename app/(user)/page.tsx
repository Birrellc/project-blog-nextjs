import { previewData } from 'next/headers';
import { groq } from 'next-sanity';

// Sanity query
// Get all of type post
// select all fields
// author and categories are references - categories is an array
// expand the references and get data
// order by created date

const query = groq`*[_type == "post"] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`;

export default function Home() {
  // check if in preview mode
  if (previewData()) {
    return <div>Preview Mode</div>;
  }
  return <div>Not in preview mode</div>;
}
