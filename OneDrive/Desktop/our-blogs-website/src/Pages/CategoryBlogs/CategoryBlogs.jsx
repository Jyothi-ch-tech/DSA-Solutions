import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlog/TrendingBlog";
import blogs from "../../Utils/MockData";
import './CategoryBlogs.css';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function CategoryBlogs() {
    const [currentCategory, setCurrentCategory] = useState('Programming')
    const { category } = useParams();
    console.log('Line 11: ', category)
    useEffect(()=>{
        if(category)
            {
                setCurrentCategory(category)
            }
    },[])
    return (
        <>
            <Banner />
            <div className="trending-blogs-section">
                <h1>
                    {currentCategory}
                </h1>
                <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
                    {
                        blogs.map(blog => blog.category == currentCategory &&
                            <TrendingBlog blog={blog} />
                        )
                    }
                </div>
            </div>

            <br />
            <br />
            <br />
        </>
    )
}
export default CategoryBlogs;