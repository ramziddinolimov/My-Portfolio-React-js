import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title'
import blogs from '../data/blogs';
import {MainLayout, InnerLayout} from '../styles/Layouts';

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsStyled>
            <Title title={'Blogs'} span={'Blogs'} />
            <InnerLayout className={'blog'}>
            {
                blogs.map((blog)=>{
                    return <div key={blog.id} className={'blog-item'}>
                        <div className="image">
                            <img src={blog.image} alt=""/>
                        </div>
                        <div className="title">
                            <a href={blog.link}>
                                {blog.title}
                            </a>
                        </div>
                    </div>
                })
            }
            </InnerLayout>
        </BlogsStyled>
        </MainLayout>
    )
}

const BlogsStyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        
        .blog-item{
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
        }
        .image{
            width: 100%;
            height: 90%;
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
            }
        }
    }
`;

export default BlogsPage;
