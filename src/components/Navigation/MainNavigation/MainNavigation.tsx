import { FunctionComponent } from 'react';
import { MainNavigationProps } from './MainNavigationProps';
import { classNames } from '../../../utils';
import { Disclosure } from '@headlessui/react';
import {MainNavigationHamburger} from "../MainNavigationHamburger";

export const MainNavigation: FunctionComponent<MainNavigationProps> = ({
  navItems,
  isMobile,
  children,
}) => {
  if (isMobile) {
    return (
      <Disclosure>
        {
          ({ open }) => (
            <>
              <MainNavigationHamburger open={open} />
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                  {
                    navItems.map(({ label, href, isCurrentPage }) => {
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      return (
                        <Disclosure.Button
                          as="a"
                          href={href}
                          className={
                            classNames(
                              isCurrentPage ?
                                "border-indigo-500 bg-indigo-50 text-indigo-700" :
                                "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
                              "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                              "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                            )
                          }
                        >
                          {label}
                        </Disclosure.Button>
                      )
                    })
                  }
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    Team
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    Projects
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    Calendar
                  </Disclosure.Button>
                </div>
                {children}
              </Disclosure.Panel>
            </>
          )
        }
      </Disclosure>
    );
  }

  return (
    <>
      {
        navItems.map(({ label, href, isTargetBlank, isCurrentPage }) => {
          {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
          return (
            <a
              href={href}
              target={isTargetBlank ? '_blank' : ''}
              className={
                classNames(
                  isCurrentPage ?
                    "border-indigo-500 text-gray-900" :
                    "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                )
              }
            >
              {label}
            </a>
          )
        })
      }
    </>
  );
};
