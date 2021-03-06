import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
const SidebarLink = ({ title, href, Icon }) => {
  const router = useRouter();

  return (
    <li className='cursor-pointer'>
      <Link href={href}>
        <a>
          <div className='inline-block m-2'>
            <div
              className={cx(
                'flex hover:text-primary text-xl rounded-3xl py-2 pr-2 px-2 md:pr-6 md:pl-3  hover:bg-primary-darkest',
                {
                  'text-primary': router.pathname === href,
                }
              )}
            >
              <Icon className='w-7 h-7 sm:mr-4 ' />
              <span className='font-bold hidden sm:flex '>{title}</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default SidebarLink;
