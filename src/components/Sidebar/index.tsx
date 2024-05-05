'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname()

  const listMenu: { title: string; url: string }[] = [
    {
      title: 'Đăng bài viết',
      url: '/create-new-article',
    },
    {
      title: 'Danh sách bài viết',
      url: '/articles',
    },
    {
      title: 'Duyệt bài viết',
      url: '/approve-articles',
    },
    {
      title: 'Bài viết đã xoá',
      url: '/deleted-articles',
    },
  ]

  return (
    <div className='flex flex-col gap-1'>
      {listMenu.map((menu) => {
        const isActive = menu.url === pathname
        return (
          <Link
            key={menu.title}
            href={menu.url}
            className={`text-lg py-2  px-5 ${
              isActive ? 'bg-white/10' : 'hover:bg-white/10 duration-200'
            }`}
          >
            {menu.title}
          </Link>
        )
      })}
    </div>
  )
}

export default Sidebar
