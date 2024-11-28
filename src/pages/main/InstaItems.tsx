import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import "@/styles/main/section06/InstaItems.css";
import { instagramPosts } from "./instagramPosts";

const InstaItems = () => {
    const [isMobile, setIsMobile] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);

    // Handle resize for mobile/non-mobile view
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        setIsMobile(windowWidth <= 1280);
    };

    // Initialize swiper on component mount and handle window resizing
    useEffect(() => {
        handleResize(); // Check window size on initial load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="wrapper">
            <div className="instaSwiperContainer">
                {!isMobile ? (
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        grabCursor={true}
                        speed={500}
                        modules={[Navigation, Autoplay]}
                    >
                        {instagramPosts.map((post) => (
                            <SwiperSlide key={post.id} className="insta-item">
                                <a href={post.link} className="inner hov">
                                    <div className="insta-img">
                                        <Image
                                            src={post.imageSrc}
                                            alt={post.alt}
                                            className="img"
                                            loading="lazy"
                                            layout="intrinsic" // Added layout type
                                        />
                                    </div>
                                    <div className="insta-hov">
                                        <i className="icon-insta"></i>
                                        <span className="insta-sub">{post.username}</span>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="instaitems">
                        {instagramPosts.map((post) => (
                            <div key={post.id} className="insta-item">
                                <a href={post.link} className="inner hov">
                                    <div className="insta-img">
                                        <Image
                                            src={post.imageSrc}
                                            alt={post.alt}
                                            className="img"
                                            loading="lazy"
                                            layout="intrinsic" // Added layout type
                                        />
                                    </div>
                                    <div className="insta-hov">
                                        <i className="icon-insta"></i>
                                        <span className="insta-sub">{post.username}</span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Controls for non-mobile */}
            {!isMobile && (
                <div className="insta-controls skip">
                    <button
                        type="button"
                        className="control insta-prev left"
                        aria-label="Previous Instagram Post"
                    ></button>
                    <button
                        type="button"
                        className="control insta-next right"
                        aria-label="Next Instagram Post"
                    ></button>
                </div>
            )}
        </div>
    );
};

export default InstaItems;
