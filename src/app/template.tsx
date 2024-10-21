'use client'
import { usePathname, useRouter } from 'next/navigation';

import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function classNames(...classes: String) {
  return classes.filter(Boolean).join(' ')
}

export default function Template({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Music', href: '/music' },
    { name: 'Past Projects', href: '/past-projects' },
    { name: 'Résumé', href: '/resume' },
    { name: 'Blog', href: 'https://medium.com/@michaelthanh' },
  ];

  const profiles = {
    'medium': {
      icon: faMediumM,
      url: 'https://medium.com/@michael-thanh'
    },
    'linkedin': {
      icon: faLinkedinIn,
      url: 'https://www.linkedin.com/in/michaelthanh/',
    },
    'github': {
      icon: faGithub,
      url: 'https://github.com/mvxt'
    },
    'instagram': {
      icon: faInstagram,
      url: 'https://www.instagram.com/vinnythen00b/'
    },
    'x': {
      icon: faTwitter,
      url: 'https://x.com/vinnythen00b'
    }
  };

  const { title } = props;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="columns-1">
      <div className="hidden sm:block max-w-3xl px-8 pt-4 mx-auto">
        <h1 className="text-4xl font-serif text-center">{title}</h1>
      </div>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="max-w-3xl mx-auto">
              <div className="relative flex items-center justify-between mx-4 py-2 h-16 sm:h-fit border-b-4 border-double border-black">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center items-stretch">
                  <div className="hidden sm:block">
                    <div className="flex space-x-2">
                      {navigation.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className={classNames(
                            pathname === page.href ? 'text-gray-800 bg-gray-200'
                              : 'text-gray-600',
                                'inline-flex items-center hover:bg-primary hover:text-white no-underline text-center px-3 py-2 rounded-md text-base font-medium'
                          )}
                          aria-current={pathname === page.href ? 'page' : undefined}
                        >
                          {page.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((page) => (
                  <Disclosure.Button
                    key={page.name}
                    as="a"
                    href={page.href}
                    className={classNames(
                      pathname === page.href ? 'text-gray-800 bg-gray-200 hover:bg-primary hover:text-white no-underline'
                        : 'text-gray-600 hover:bg-primary hover:text-white no-underline',
                          'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={pathname === page.href ? 'page' : undefined}
                  >
                    {page.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="max-w-3xl px-8 mx-auto">
        <article className="article container py-2">
          {children}
        </article>
      </div>
      <footer className="mt-8 mb-8 text-center text-gray-600custom-footer">
        <p className="max-w-3xl px-8 py-4 mx-auto border-t border-gray-200">
          {Object.keys(profiles).map(function(key) {
            return (
              <a key={key} className="footer-social hover:text-primary" href={profiles[key].url}>
                <FontAwesomeIcon icon={profiles[key].icon} size='lg' />
              </a>
            );
          })}
        </p>
        <p className="max-w-3xl px-8 mx-auto mt-2">
          Copyright &copy; {new Date().getFullYear()} Michael Vinh Xuan Thanh.
        </p>
        <p className="max-w-3xl px-8 mx-auto">
          Site built with <a href="https://nextjs.org/">Next.js</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>. Deployed on <a href="https://www.digitalocean.com/">DigitalOcean</a>.
        </p>
      </footer>
    </div>
  );
}
