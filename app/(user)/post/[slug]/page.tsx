import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponent } from '@/app/components/RichTextComponent';

type Props = {
  params: {
    slug: string;
  };
};

//* Issue - everytime a new post is created on sanity the app needs new build deployed
// Incremental Static Regeneration replacement - static generation per page
export async function generateStaticParams() {
  const query = groq`*[_type == "post"]{
    slug
  }`;
  // fetch all slugs from the query
  const slugs: Post[] = await client.fetch(query);
  // get all current slugs from sanity
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  // able to create static pages
  return slugRoutes.map((slug) => ({ slug }));
}

//* Fix - fixes the issue above (server side renders new page every 60 seconds and caches it)
export const revalidate = 60; // every 60 seconds revalidates the page

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
  return (
    <article className='px-10 pb-28'>
      <section className='space-y-2 border border-[#f77] text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className='p-5 bg-[#f77] w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='text-4xl font-extrabold'>{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-gb', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={50}
                  width={50}
                />
                <div className='w-54'>
                  <h3 className='capitalize text-lg font-bold'>
                    {post.author.name}
                  </h3>
                  {/* <div> Author Bio </div> */}
                </div>
              </div>
            </div>
            <div>
              <h2 className='italic pt-6'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className='bg-gray-800 text-white px-3 py-1 rounded-full font-semibold mt-4 capitalize'
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponent} />
    </article>
  );
}

export default Post;
