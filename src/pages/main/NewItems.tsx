import "@/styles/main/section04/NewItems.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";


// 이미지
import productBg1 from "$/assets/images/main/section04/sec4-bg-item01.jpg";
import product1 from "$/assets/images/main/section04/sec4-item01.png";


const products = [
    {
        id: 1,
        bgImage: productBg1,
        packImage: product1,
        category: "원두",
        name: "C 블렌딩",
        brand: "GSHCOFFEE",
        link: "#",
    },
    {
        id: 2,
        bgImage: productBg1,
        packImage: product1,
        category: "원두",
        name: "C 블렌딩",
        brand: "GSHCOFFEE",
        link: "#",
    },
];


const NewItems = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    return (
        <div className="swiperContainer">
            <div className="swiperContainer">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    observer={true}
                    observeParents={true}
                    slidesPerView={1}
                    centeredSlides={true}
                    speed={1500}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: `.new-next`,
                        prevEl: `.new-prev`,
                    }}
                    pagination={{
                        el: ".new-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    breakpoints={{
                        800: {
                            slidesPerView: 1.1,
                        },
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="new-item">
                            {/* Product Image */}
                            <div className="pdt-img">
                                <Image
                                    src={product.bgImage}
                                    alt={`${product.brand} ${product.name}`}
                                    className="img"
                                    priority
                                />
                                <div className="controls">
                                    <button
                                        type="button"
                                        className="control new-prev left"
                                        aria-label="Previous Product"
                                    ></button>
                                    <button
                                        type="button"
                                        className="control new-next right"
                                        aria-label="Next Product"
                                    ></button>
                                </div>
                            </div>
                            {/* Product Info */}
                            <div className="ptd-info">
                                <div className="info-txt">
                                    <div className="txt">
                                        <span className="p-cate">{product.category}</span>
                                        <p className="p-subs"></p>
                                        <strong className="p-name">{product.name}</strong>
                                        <span className="p-brand">{product.brand}</span>
                                    </div>
                                    <a href={product.link} className="view-detail">
                                        <span>자세히 보기</span> <i className="arrow-right"></i>
                                    </a>
                                </div>
                                {/* Product Pack */}
                                <div className="p-pack">
                                    <Image
                                        src={product.packImage}
                                        alt={`${product.brand} ${product.name}`}
                                        width={200}
                                        height={200}
                                        className="pack-img"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination new-pagination"></div>
            </div>
        </div>
    );

}


export default NewItems;
