import styles from "@/styles/BestItems.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import products1 from '$/assets/images/main/section02/sec2-item01.png';
import products2 from '$/assets/images/main/section02/sec2-item02.png';
import products3 from '$/assets/images/main/section02/sec2-item03.png';
import products4 from '$/assets/images/main/section02/sec2-item04.png';
import products5 from '$/assets/images/main/section02/sec2-item05.png';

const products = [
    {
        id: 1,
        imageUrl: products1,
        category: '원두',
        name: '30초 블렌드',
        brand: '전광수커피',
        link: '#',
    },
    {
        id: 2,
        imageUrl: products2,
        category: '원두',
        name: '30초 블렌드',
        brand: '전광수커피',
        link: '#',
    },
    {
        id: 3,
        imageUrl: products3,
        category: '원두',
        name: '30초 블렌드',
        brand: '전광수커피',
        link: '#',
    },
    {
        id: 4,
        imageUrl: products4,
        category: '원두',
        name: '30초 블렌드',
        brand: '전광수커피',
        link: '#',
    },
    {
        id: 5,
        imageUrl: products5,
        category: '원두',
        name: '30초 블렌드',
        brand: '전광수커피',
        link: '#',
    },
];

const BestItems = () => {
    return (
        <div className={styles['swiper-container']}>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                loop>
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className={styles.bestItem}>
                            <div className={styles.product}>
                                <div className={styles.img}>
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className={styles.text}>
                                    <span className={styles.pCate}>{product.category}</span>
                                    <strong className={styles.pName}>{product.name}</strong>
                                    <span className={styles.pBrand}>{product.brand}</span>
                                    <a href={product.link} className={styles.viewDetail}>
                                        <span>자세히 보기</span> <i className="arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default BestItems;