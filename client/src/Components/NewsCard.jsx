import React from 'react'
import axios from 'axios'
import { newsData } from '../utils/env.js'
import { useEffect, useState } from 'react'

const NewsCard = () => {

    const [newsArticles, setNewsArticles] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(newsData);
        setNewsArticles(response.data.articles);
        console.log(response.data.articles);
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='flex-col justify-center items-center space-y-5 md:px-[35%] sm:w-full'>
            {newsArticles.map((article, index) => (
                <div key={index}
                    className='flex-col border-2 border-dashed border-green-700 bg-green-100 text-black space-y-2 p-5 rounded-lg '
                >
                    <img src={article?.urlToImage} alt={article?.title} />
                    <div>Article By: <span className='font-semibold'>{article?.author}</span></div>
                    <div className='text-2xl font-semibold'>{article?.title}</div>
                    <div className='text-lg'>{article?.description}</div>
                    <div className='font-semibold text-lg'>Published on: <span className='text-gray-500'>{article?.publishedAt.split('T')[0]}</span></div>
                    <a href={article?.url} target='blank' className='flex w-full p-3 px-6 font-semibold border-2 border-dotted bg-transparent border-green-700 justify-between rounded-md'>
                        <button>Read full article</button>
                        <span>🔗</span>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default NewsCard