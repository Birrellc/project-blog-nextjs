import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';

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
                  <h3 className='capitalize'>{post.author.name}</h3>
                  {/* <div> Author Bio </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}

export default Post;
