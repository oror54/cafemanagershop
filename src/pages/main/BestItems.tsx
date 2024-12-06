import styles from"@/styles/main/section02/BestItems.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { allData } from "src/data/allData"; 

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
        <div className={styles.swiperContainer}>
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
                        <div className={styles.bestItem}>
                            <div className={styles.product}>
                                <div className={styles.img}>
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        loading="eager"
                                    />
                                </div>
                                <div className={styles.text}>
                                    <span className={styles.pCate}>{product.category}</span>
                                    <strong className={styles.pName}>{product.name}</strong>
                                    <span className={styles.pBrand}>{product.brand}</span>
                                    <Link
                                        href={`/products/${product.category}/${product.subCategory}/${product.id}`}
                                        className={styles.viewDetail}
                                    >
                                        <span>자세히 보기</span>{" "}
                                        <i className={styles.arrowRight}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.wrap}>
                <div className={styles.bestContr}>
                    <div className={`${styles['swiper-pagination']} bestPagination`}></div>
                    <div className={styles.contr}>
                    <button type="button" className={`${styles.left} ${styles.bestPrev}`}></button>
                        <button
                            type="button"
                            className={`${styles.start} ${styles.bestPlay} ${styles.toggleOn}`}
                        >
                            <i className={styles.pause}></i>
                            <i className={styles.start}></i>
                        </button>
                        <button type="button" className={`${styles.right} ${styles.bestNext}`}></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BestItems;
