import styles from "@/styles/Main.module.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Section02() {
    return (
        <section className={styles.section02}>
            <div className={styles.tit}>
                <div className={styles.point}>
                    <span>BEST ITEM</span>
                </div>
                <h4>카페매니저의 베스트 제품을 만나보세요.</h4>
            </div>
        </section>
    );
}