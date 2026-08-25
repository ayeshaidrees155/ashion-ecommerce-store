import React from 'react'
import Wrapper from './Wrapper'
import BlogCard from '../components/Products/Blog/BlogCard'
import Path from '../components/Path/Path'

export default function Blog() {
    return (
        <Wrapper>
            <Path style={{ paddingTop: "100px" }} />
            <BlogCard />
        </Wrapper>
    )
}
