import "@/styles/main/section02/BestItems.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { allData } from "@/data/allData";

const bestItems = allData.filter(item => item.best);

const BestItems = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        const playButton = document.querySelector(".best-play");

        const toggleAutoplay = () => {
            if (swiperRef.current) {
                if (playButton?.classList.contains("on")) {
                    swiperRef.current.autoplay.stop();
                    playButton.classList.remove("on");
                } else {
                    swiperRef.current.autoplay.start();
                    playButton?.classList.add("on");
                }
            }
        };

        playButton?.addEventListener("click", toggleAutoplay);

        return () => {
            playButton?.removeEventListener("click", toggleAutoplay);
        };
    }, []);

    return (
        <div className="swiperContainer">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={30}
                slidesPerView={3.5}
                navigation={{
                    nextEl: ".best-next",
                    prevEl: ".best-prev",
                }}
                pagination={{
                    el: ".best-pagination",
                    type: "progressbar",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                    475: {
                        slidesPerView: 1.7,
                    },
                    601: {
                        slidesPerView: 2.2,
                    },
                    701: {
                        slidesPerView: 2.5,
                    },
                    800: {
                        slidesPerView: 1.7,
                    },
                    1024: {
                        slidesPerView: 2.3,
                        centeredSlides: true,
                    },
                    1280: {
                        slidesPerView: 2.7,
                        centeredSlides: true,
                    },
                    1550: {
                        slidesPerView: 3.7,
                        centeredSlides: true,
                    },
                }}
            >
                {bestItems.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="best-item">
                            <div className="product">
                                <div className="img">
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        loading="eager"
                                    />
                                </div>
                                <div className="text">
                                    <span className="p-cate">{product.category}</span>
                                    <strong className="p-name">{product.name}</strong>
                                    <span className="p-brand">{product.brand}</span>
                                    <Link
                                        href={`/products/${product.category}/${product.subCategory}/${product.id}`}
                                        className="view-detail"
                                    >
                                        <span>자세히 보기</span>{" "}
                                        <i className="arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="wrap">
                <div className="best-contr">
                    <div className="swiper-pagination best-pagination"></div>
                    <div className="contr">
                        <button type="button" className="left best-prev"></button>
                        <button
                            type="button"
                            className="start best-play toggle_on"
                        >
                            <i className="pause"></i>
                            <i className="start"></i>
                        </button>
                        <button type="button" className="right best-next"></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BestItems;
