import "@/styles/main/section04/NewItems.css"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { getInstagramPosts } from "@/pages/api/instagramApi"




const InstaItems = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Instagram API에서 게시물 데이터를 가져옵니다.
        const fetchPosts = async () => {
            const fetchedPosts = await getInstagramPosts();
            setPosts(fetchedPosts);
        };

        fetchPosts();
    }, []);
    return (
        <div className="swiperContainer">
            <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 3000 }} loop={true} navigation>
                {posts.map((post) => (
                    <SwiperSlide key={post.id}>
                        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                            {post.media_type === "IMAGE" ? (
                                <Image src={post.media_url} alt={post.caption} />
                            ) : (
                                <video controls>
                                    <source src={post.media_url} type="video/mp4" />
                                </video>
                            )}
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

}


export default InstaItems;
