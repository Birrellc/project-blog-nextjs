import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../lib/urlFor';

export const RichTextComponent = {
  // https://www.npmjs.com/package/@portabletext/react
  // Dictating what to with specific values ie ordered list apply specific styles / format
  types: {
    image: ({ value }: any) => {
      return (
        <div>
          <Image
            className='object-contain'
            src={urlFor(value).url()}
            alt='Blog Image'
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className='ml-10 py-5 list-disc space-y-5'></ul>
    ),
    number: ({ children }: any) => <ol className='mt-lg list-decimal'></ol>,
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className='text-6xl py-10 font-bold'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className='text-4xl py-10 font-bold'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className='text-3xl py-10 font-bold'>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className='text-2xl py-10 font-bold'>{children}</h4>
    ),

    blockqoute: ({ children }: any) => (
      <blockquote className='border-l-[#f77] border-l-3 pl-5 my-5'>
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined;
      return (
        // convert the richbody link tag to a next link
        <Link
          href={value.href}
          rel={rel}
          className='underline decoration-[#f77] hover:decoration-black'
        >
          {children}
        </Link>
      );
    },
  },
};
