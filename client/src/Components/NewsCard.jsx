import axios from 'axios'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'

const NewsCard = () => {

    const [newsArticles, setNewsArticles] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('https://artikle-cors.onrender.com/newsData');
        setNewsArticles(response.data.articles);
        console.log(response.data.articles);
    }
    useEffect(() => {
        fetchData()
    }, [])

    if (newsArticles.length === 0) {
        return <Spinner/>
    }
    return (
        <div className='flex-col justify-center items-center space-y-5 md:px-[35%] sm:w-full my-16'>
            {newsArticles.map((article, index) => (
                <div key={index}
                    className='flex-col border-2 border-[#211951] bg-[#836FFF] text-[#211951] space-y-2 p-5 rounded-lg '
                >
                    <img src={article?.urlToImage} alt={article?.title} className='border-2 border-[#211951] rounded-md' />
                    <div>Article By: <span className='font-semibold'>{article?.author}</span></div>
                    <div className='text-2xl text-[#211951] font-bold'>{article?.title}</div>
                    <div className='text-lg'>{article?.description}</div>
                    <div className='font-semibold text-lg'>Published on: <span className='text-[#15F5BA]'>{article?.publishedAt.split('T')[0]}</span></div>
                    <a href={article?.url} target='blank' className='flex w-full p-3 px-2 font-semibold border-2 border-x-1 bg-[#000000] text-[#15F5BA] border-[#F0F3FF] justify-between rounded-md'>
                        <button>Read full article</button>
                        <span>🔗</span>
                    </a>
                </div>
            ))}
            <h1 className='text-center text-[#15F5BA] border-2 border-[#836FFF] border-dotted font-semibold rounded-lg p-3 text-xl'>That's all for now. Come back later! :)</h1>

        </div>
    )
}

export default NewsCard