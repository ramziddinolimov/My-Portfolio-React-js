import React from 'react'
import styled from 'styled-components';

import blogs from '../data/blogs';

function BlogsPage() {
    return (
        <BlogsStyled>
            {
                blogs.map((blog)=>{
                    return <div key={blog.id}>
                        <div className="image">
                            <img src={blog.image} alt=""/>
                        </div>
                        <div className="title">
                            <h4>
                                {blog.title}
                            </h4>
                        </div>
                    </div>
                })
            }
        </BlogsStyled>
    )
}

const BlogsStyled = styled.div`

`;

export default BlogsPage;
