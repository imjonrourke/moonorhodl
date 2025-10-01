import { Fragment, useCallback, FunctionComponent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ModalProps } from './ModalProps';
import { ModalProvider, useModalProvider } from '../../providers/ModalProvider';

const LocalModal: FunctionComponent<ModalProps> = ({
  open,
  title,
  showCloseIcon,
  primaryActionLabel,
  secondaryActionLabel,
  primaryActionClick,
  secondaryActionClick,
  primaryIsSubmit,
  onClose,
  renderActions,
  children,
}) => {
  const { cancelButtonRef } = useModalProvider();
  const handleOnClose = useCallback((value: boolean) => {
    onClose?.(value);
  }, [onClose]);

  const handlePrimaryClick = useCallback(() => {
    primaryActionClick?.();
  }, [primaryActionClick])

  const handleSecondaryClick = useCallback(() => {
    secondaryActionClick?.();
    handleOnClose(false);
  }, [secondaryActionClick, handleOnClose])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleOnClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="mb-2 sm:mb-3">
                  <Dialog.Title as="h3" className="text-center text-base font-semibold leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                  {
                    !!showCloseIcon && (
                      <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={() => handleOnClose(false)}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    )
                  }
                </div>
                <div>
                  {
                    typeof children === 'function' ?
                      children({ onClose: handleOnClose, onSubmit: primaryActionClick }) :
                      children
                  }
                  {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"> */}
                  {/*   <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" /> */}
                  {/* </div> */}
                  {/* {children} */}
                </div>
                {
                  renderActions && (
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        type={primaryIsSubmit ? 'submit' : 'button'}
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                        onClick={handlePrimaryClick}
                      >
                        {primaryActionLabel}
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                        onClick={handleSecondaryClick}
                        ref={cancelButtonRef}
                      >
                        {secondaryActionLabel}
                      </button>
                    </div>
                  )
                }
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
};

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  ...props
}) => {
  return (
    <ModalProvider>
      <LocalModal {...props}>{children}</LocalModal>
    </ModalProvider>
  )
};
