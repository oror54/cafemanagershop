import styles from "@/styles/main/section02/BestItems.module.css";
import "@/styles/main/section02/BestItems.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";

// 이미지
import products1 from "$/assets/images/main/section02/sec2-item01.png";
import products2 from "$/assets/images/main/section02/sec2-item02.png";
import products3 from "$/assets/images/main/section02/sec2-item03.png";
import products4 from "$/assets/images/main/section02/sec2-item04.png";
import products5 from "$/assets/images/main/section02/sec2-item05.png";

const products = [
  {
    id: 1,
    imageUrl: products1,
    category: "원두",
    name: "30초 블렌드",
    brand: "전광수커피",
    link: "#",
  },
  {
    id: 2,
    imageUrl: products2,
    category: "원두",
    name: "30초 블렌드",
    brand: "전광수커피",
    link: "#",
  },
  {
    id: 3,
    imageUrl: products3,
    category: "원두",
    name: "30초 블렌드",
    brand: "전광수커피",
    link: "#",
  },
  {
    id: 4,
    imageUrl: products4,
    category: "원두",
    name: "30초 블렌드",
    brand: "전광수커피",
    link: "#",
  },
  {
    id: 5,
    imageUrl: products5,
    category: "원두",
    name: "30초 블렌드",
    brand: "전광수커피",
    link: "#",
  },
];

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
        className={styles.swiperWrapper}
        spaceBetween={30}
        slidesPerView={3.5}
        navigation={{
          nextEl: ".best-next",
          prevEl: ".best-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
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
        {products.map((product) => (
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
                  <a href={product.link} className={styles.viewDetail}>
                    <span>자세히 보기</span>{" "}
                    <i className={styles.arrowRight}></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap">
        <div className="best-contr">
          <div className="swiper-pagination"></div>
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
    </div>
  );
};

export default BestItems;
