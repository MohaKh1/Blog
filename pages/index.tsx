import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, PostWidget, Categories } from '../components'

const posts = [
  {title: "React test", excerpt: "Learn test 1"},
  {title: "React test w tailwind", excerpt: "Learn test 2"}

]
const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-20 mb-8 bg-slate-400">
      <Head>
        <title>Haroombe's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-wrap lg:-mx-6 bg-slate-300" id="post_div">
        <div className="lg:w-2/3 lg:px-6 bg-slate-200">
          {posts.map((post, index) => (
            <PostCard title={post.title} excerpt={post.excerpt} key={post.title} />
          ))}
        </div>

        <div className="lg:w-1/3 lg:px-6 mt-8 lg:mt-0 bg-slate-300" id="widget_div">
          <div className="lg:sticky relative top-8 bg-slate-200">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// const Home: NextPage = () => {
//   return (
//     // main div that will encompass the home page
//     <div className="container mx-auto px-10 mb-8 bg-slate-400">
//       {/* title for the page and tab icon */}
//       <Head>
//         <title>Haroombe's Blog</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* loading in our posts object into the page using an anon func? inside the map function */}
//       <div className='grid grid-cols-1 bg-slate-300 lg:grid-cols-12 gap-12 bg-slate-300' id='post_div'>
//         {/* load the posts */}
//         <div>
//             <div className='lg:col-span-8 col-span-1 bg-slate-200'>
//               {/* Imported component used by map function to display all the things */}
//               {posts.map((post, index) => <PostCard title={post.title} excerpt={post.excerpt} key={post.title}/>)}
//             </div>
//         </div>

//         <div className='lg:col-span4 col-span-1 bg-slate-200' id='widget_div'>
//           <div className='lg:sticky relative top-8 bg-slate-100'>
//             <PostWidget/>
//             <Categories/>

//           </div>
//         </div>

//       </div>
      
//     </div>
//   )
// }

export default Home
