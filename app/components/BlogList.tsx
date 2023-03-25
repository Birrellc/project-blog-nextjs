import Image from 'next/image';
import urlFor from '../../lib/urlFor';

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  console.log(posts.length);
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
              <div>
                <div>
                  <p className='font-bold'>{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString('en-gb', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
