import { useRouter } from 'next/router';

import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Streaming', href: '/streaming' },
  { name: 'Music', href: '/music' },
  { name: 'Other Projects', href: '/other' },
  { name: 'Resources & Downloads', href: '/downloads' },
  { name: 'Hire Me', href: '/hire' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
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
                          router.asPath === page.href ? 'text-gray-800 bg-gray-200'
                            : 'text-gray-600',
                              'inline-flex items-center hover:bg-primary hover:text-white no-underline text-center px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={router.asPath === page.href ? 'page' : undefined}
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
                    router.asPath === page.href ? 'text-gray-800 bg-gray-200 hover:bg-gray-700 hover:text-white no-underline'
                      : 'text-gray-600 hover:bg-gray-700 hover:text-white no-underline',
                        'block px-3 py-2 rounded-md text-sm font-medium'
                  )}
                  aria-current={router.asPath === page.href ? 'page' : undefined}
                >
                  {page.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
