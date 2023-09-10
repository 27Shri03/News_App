import React, { Component, useEffect, useState } from 'react'
import News_item from './News_item'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [news, setnews] = useState({ article: [], loading: false, page: 1, result: 0 });
  // const handlenext = () => {
  //   setnews((prev) => {
  //     return { ...prev, page: prev.page + 1 };
  //   });
  // }
  const fetchMoreData = async () => {
    props.progress(10);
    const surya = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=497436b503b24d3292c9a1fe707fdd1f&page=${news.page + 1}&pageSize=${props.pagesize}&category=${props.category}`);
    document.title = `${props.category} - NewsFront`;
    const data = await surya.json();
    props.progress(100);
    setnews((prev) => {
      return { ...prev, article: prev.article.concat(data.articles), result: data.totalResults, page: prev.page + 1 }
    });
  };
  // const handleprev = () => {
  //   setnews((prev) => {
  //     return { ...prev, page: prev.page - 1 };
  //   })
  // }
  useEffect(() => {
    async function get_data() {
      props.progress(10);
      setnews((prev) => {
        return { ...prev, loading: true };
      })
      const surya = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=497436b503b24d3292c9a1fe707fdd1f&page=${news.page}&pageSize=${props.pagesize}&category=${props.category}`);
      document.title = `${props.category} - NewsFront`;
      const data = await surya.json();
      props.progress(100);
      setnews((prev) => {
        return { ...prev, article: data.articles, result: data.totalResults, loading: false }
      });
    }
    get_data();
  }, [props.nav]);
  function capitalize(obj){
    return obj.slice(0,1).toUpperCase()+obj.slice(1,obj.length);
  }
  return (
    <>
      <h2 className='display-2 fw-bolder text-center mt-5 mb-2'>Top Headlines - {capitalize(props.category)}</h2>
      {news.loading && <Spinner />}
      <InfiniteScroll
        dataLength={news.article.length}
        next={fetchMoreData}
        hasMore={news.article.length != news.result}
        loader={<Spinner />}
      >
        <div className="container">
          <div className='row'>
            {
              news.article.map((ele) => {
                return <div className='col-md-4' key={ele.url} >
                  <News_item title={ele.title} desc={ele.description} url={ele.urlToImage} news={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} />
                </div>
              })
            }
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className='d-flex justify-content-between mt-3'>
        <button disabled={(news.page <= 1) ? true : false} onClick={handleprev} type="button" className="btn btn-dark">&#8592; Previous</button>
        <button disabled={(news.page + 1 > Math.ceil(news.result / props.pagesize)) ? true : false} type="button" onClick={handlenext} className="btn btn-dark">Next &#8594;</button>
      </div> */}
    </>
  )
}