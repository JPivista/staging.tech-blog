import React from 'react'
import FeaturedPost from './FeaturedPost'
import { RecentPosts } from './RecentPosts'

const index = () => {
    return (
        <>
            <div className=' w-full flex flex-col justify-center items-center lg:px-0 px-3'>
                <FeaturedPost />
                <RecentPosts />
            </div>
        </>
    )
}

export default index
