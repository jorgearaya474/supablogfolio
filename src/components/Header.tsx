import Image from 'next/image';
import Link from 'next/link';

const RoutesList = [
  ['Home', '/'],
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
  ['Blog', '/blog'],
];

export default function Header() {
  return (
    <header
      id='site-header'
      className='sticky w-full top-0 z-50 transition-all duration-300 shadow-lg bg-white'
    >
      <div className='container mx-auto flex-1 py-5 lg:py-6'>
        <nav className='flex items-center justify-between flex-wrap'>
          <div className='w-full flex flex-wrap items-center justify-between mx-auto'>
            <Link href='/' className='flex items-center focus:outline-none'>
              <Image
                src='/logoipsum-288.svg'
                alt='Site Logo'
                width={167}
                height={20}
                className=''
                loading='lazy'
              />
            </Link>
            <div
              className='w-full bg-white fixed bottom-0 top-14 left-0 md:top-0 md:relative md:block md:w-auto'
              id='navbar-default'
            >
              <ul className='font-bold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0'>
                {RoutesList.map(([title, url]) => (
                  <Link
                    key={title}
                    href={url}
                    className='md:inline-block py-4 lg:py-2 text-md text-center text-black'
                  >
                    {title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
