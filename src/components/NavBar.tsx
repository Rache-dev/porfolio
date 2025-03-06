import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { GitHub, Email, LinkedIn } from '@mui/icons-material'; 
import '../styles/NavBar.css'
import React from 'react'

type contactList = {
  name: string;
  icon: React.ReactNode;
  href: string;
  size: React.CSSProperties;
}
const navigation = [
  { name: 'Home', href: 'intro', current: true },
  { name: 'About', href: 'about', current: false },
  { name: 'Experience', href: 'experience', current: false },
  { name: 'Projects', href: 'projects', current: false },
]
const contact:contactList[] = [
  { name: 'GitHub', icon: <GitHub />, href: 'https://github.com/Rache-dev', size: {fontSize:11} },
  {name: 'Email',icon: <Email />,href: 'mailto:barbrarachael54@gmail.com', size : {fontSize:11}},
  {name: 'LinkedIn',icon: <LinkedIn />,href: 'https://linkedin.com/in/rachael-nasenya',size: {fontSize:11}},
]
function classNames(...classes: (string| undefined | null)[]) : string {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {

  function scrollTO(id: string) {
    const section = document.getElementById(id);
    
    if(section){
      section.scrollIntoView({behavior: 'smooth'});
    }
  }


  return (    
        <Disclosure as="nav" className="sticky top-0 z-50 nav-content">
        <div className="max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between max-w-full">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
              <div className="flex items-center space-between justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <div className="logo ">Rache Dev</div>
                </div>                
              </div>
              <div className=" flex space-x-4 items-center justify-center hidden sm:ml-6 sm:block ml-10">
                  <div className="flex space-x-4 nav-links">
                    {navigation.map((nav) => (
                      <div key={nav.name} onClick={() => scrollTO(nav.href)} className={classNames(
                        nav.current ? ' text-white' :  'bg-gray-700 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text font-medium',
                      )}>{nav.name}</div>
                      ))}
                  </div>
                </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="space-x-4">
                    {contact.map((item) => {
                      const icon = item.icon || <></>;
                      return (
                      <a key={item.name} href={item.href} style={item.size} target='_blank' rel="noopener noreferrer" aria-label={item.name} className="navbar-brand text-gray-400 hover:text-gray-500 transition-colors duration-200">                      
                        {item.icon ? icon : null}
                      </a>
                      )})}
                  </div>
                </div>
            </div>
            
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a" onClick={() => scrollTO(item.href)}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}>{item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
  )
}

export default NavBar