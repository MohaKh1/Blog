// this is where the page header will live

import React, { useContext } from 'react'

import Link from 'next/link'
// fake categories till we fetch real data
const categories = [{name: 'React', slug: 'React'},{name: 'Web Development', slug: 'web-dev'}]
const Header = () => {
  return (
    // main container to contain the navigation bar
    <div className='container mx-auto px-10 mb-8 bg-red-500'>
      {/* defines the border color and internal positioning of the nav bar*/}
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        {/* idk */}
        <div className='md:float-left block'>
          {/* go home */}
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              Haroon's Blog
            </span>
          </Link>
        </div>
        {/* shows categories */}
        <div className='hidden md:float-left md:contents'>
            {/* use map to iterate over all the elements and do something with them. In this case render them in the nav bar */}
          {categories.map((category) => (
            // 
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Header