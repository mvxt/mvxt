'use client'

import { Fragment, useState } from 'react';
import {
  Button,
  CloseButton,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild
} from '@headlessui/react';

import { projects } from '@/lib/data';

export default function MyModal() {
  let [isOpen, setIsOpen] = useState({
    sva: false,
    mm: false,
    medium: false,
    aotm: false,
    noun: false,
    muser: false
  });

  function open(key) {
    let { [key]: _, ...rest } = isOpen;
    rest[key] = true;
    setIsOpen(rest);
  }

  function close() {
    setIsOpen({
      sva: false,
      mm: false,
      medium: false,
      aotm: false,
      noun: false,
      muser: false
    });
  }

  const renderProject = (key) => {
    return (
      <Fragment key={key}>
        <Button
          onClick={() => open(key)}
          className="w-1/3 p-2 hover:border hover:border-gray-200 hover:shadow-lg"
        >
          <picture>
            <img
              alt="gallery"
              className="object-center p-2 rounded-lg"
              src={projects[key].thumb}
            />
          </picture>
        </Button>
        <Transition appear show={isOpen[key]}>
          <Dialog as="div" className="relative z-10 focus:outline-none w-full h-full fade" onClose={close}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto text-gray-800">
              <div className="flex min-h-full items-center justify-center p-4">
                <TransitionChild
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 transform-[scale(95%)]"
                  enterTo="opacity-100 transform-[scale(100%)]"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 transform-[scale(100%)]"
                  leaveTo="opacity-0 transform-[scale(95%)]"
                >
                  <DialogPanel className="w-full p-8 max-w-screen-md rounded-xl bg-white p-6 backdrop-blur-2xl">
                    <DialogTitle as="h2" className="text-base/7 font-sans font-medium text-xl">
                      {projects[key].title}
                    </DialogTitle>
                    <Description>
                      {projects[key].subtitle}
                    </Description>
                    <div className="relative my-4 article">
                      {projects[key].content}
                    </div>
                    <div className="mt-4">
                      <Button
                        className="mr-2 gap-2 rounded-lg bg-primary py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-800 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        onClick={() => visit(projects[key].visit)}
                      >
                        Visit project
                      </Button>
                      <CloseButton
                        className="gap-2 rounded-lg bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      >
                        Close
                      </CloseButton>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </Fragment>
    );
  };

  return (
    <Fragment>
      {Object.keys(projects).map(renderProject)}
    </Fragment>
  )
}
