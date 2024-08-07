import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import api from "../../utils/api";
import ReactPlayer from 'react-player';
import ChannelInfo from './ChannelInfo';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import VideoCard from "../../components/VideoCard";

const VideoDetail = () => {
const [video, setVideo] = useState(null);
const [comments, setComments] = useState(null);

    //* 1.ADIM - Arama parametresine erişim için kurulum
    const [searchParams] = useSearchParams();
    //* 2.ADIM - URL'den "v" isimli parametreye eriş
    const id = searchParams.get("v");

    useEffect(()=> {
        //* 3.ADIM - id'sini bildiğimiz videonun detayını al
        api.get(`/video/info?id=${id}&extend=1`)
        .then((res) => setVideo(res.data));
        //* 4.ADIM - id'sini bildiğimiz videonun yorumlarını al
        api.get(`/comments?id=${id}`)
        .then((res) => setComments(res.data));
    }, []);


  return (
    <div className='h-screen detail-page overflow-auto'>
        <div>
            <div className='h-[50vh] lg:h-[60vh] overflow-hidden rounded-md'>
                <ReactPlayer
                 controls
                  width={"100%"}
                  height={"100%"}
                  url={`https://www.youtube.com/watch?v=${id}`}
                  />
            </div>

            {!video && <p>Yükleniyor...</p>}

            {video && (
                <>
                {/*BAŞLIK*/}
                <h1 className='my-3 text-xl font-bold'>{video.title}</h1>


                {/*KANAL BİLGİLERİ */}
                <ChannelInfo video={video}/>

                {/* KANAL BİLGİLERİ */}
                <VideoInfo video={video}/>

                {/*YORUMLAR */}
                <Comments data={comments}/>

                </>
            )}
        </div>

        <div>
         {video?.relatedVideos.data.map(
            (item,index) => item.type === "video" && <VideoCard video={item} key={index} isRow={true}/>
         )}
        </div>
    </div>
  )
}

export default VideoDetail;
