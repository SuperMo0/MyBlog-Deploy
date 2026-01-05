import React, { useEffect, useState } from 'react';
import ArticleCard from '../Article-Card/ArticleCard';
import api from './../../utils/Api';

export default function HomeArticles() {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                let [result, ok] = await api('/blogs');
                if (ok) setArticles(result.blogs);
            } catch (error) {
                console.error("Fetch error", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="wrapper pb-24">
            {articles ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  {/*Skeleton*/}
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <div key={n} className="h-96 bg-(--bg-card) rounded-2xl border border-(--border-color) animate-pulse">
                            <div className="h-48 bg-gray-300/20 w-full rounded-t-2xl"></div>
                            <div className="p-6 space-y-3">
                                <div className="h-6 bg-gray-300/20 w-3/4 rounded"></div>
                                <div className="h-4 bg-gray-300/20 w-1/2 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}