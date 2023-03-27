import Image from 'next/image';
import urlFor from '../../lib/urlFor';

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className='border-[#f77] mb-12' />
      <div>
        {/* posts */}

        {posts.map((post) => (
          <div key={post._id} className='group flex flex-col'>
            <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-110 transition-transform duration-500 ease-out'>
              {/* can change height etc on the cdn */}
              {/* https://www.sanity.io/docs/image-url */}
              {/* urlFor - helper function to convert url due to sanity image chaching */}
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              {/* Styling - Title and Date over image */}
              <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                <div>
                  <p className='font-bold'>{post.title}</p>
                  <p>{post.description}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString('en-gb', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className='flex flex-col md:flex-row gap-y-2'>
                  {post.categories.map((category) => (
                    <div className='bg-[#f44] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='mt-5 flex-1'>
              <p className='underline text-lg font-bold'>{post.title}</p>
              <p className='text-gray-500 line-clamp-2'>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
