'use client'

import { Fragment, useState } from 'react';
import {
  Button,
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
          <img
            alt="gallery"
            className="object-center p-2 rounded-lg"
            src={projects[key].thumb}
          />
        </Button>
        <Transition appear show={isOpen[key]}>
          <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <TransitionChild
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 transform-[scale(95%)]"
                  enterTo="opacity-100 transform-[scale(100%)]"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 transform-[scale(100%)]"
                  leaveTo="opacity-0 transform-[scale(95%)]"
                >
                  <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                      Payment successful
                    </DialogTitle>
                    <p className="mt-2 text-sm/6 text-white/50">
                      Your payment has been successfully submitted. We’ve sent you an email with all of the details of
                      your order.
                    </p>
                    <div className="mt-4">
                      <Button
                        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        onClick={close}
                      >
                        Got it, thanks!
                      </Button>
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
