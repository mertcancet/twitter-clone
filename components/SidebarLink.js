import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
const SidebarLink = ({ title, href, Icon }) => {
  const router = useRouter();
  console.log(router);
  return (
    <li className='cursor-pointer'>
      {/* <li className='sidebar-nav-item group '>
              <Link href={item.href}>
                <a className='flex '>
                  <div className='flex group-hover:text-primary'>
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                </a>
              </Link>
            </li> */}

      <Link href={href}>
        <a>
          <div className='inline-block m-2'>
            <div
              className={cx(
                'flex hover:text-primary text-xl rounded-3xl py-2 pr-6 pl-3  hover:bg-primary-darkest',
                {
                  'text-primary': router.pathname === href,
                }
              )}
            >
              <Icon className='w-7 h-7 mr-4 ' />
              <span className='font-bold'>{title}</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default SidebarLink;
