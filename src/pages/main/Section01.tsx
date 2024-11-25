import styles from "@/styles/Main.module.css";

export default function Section01() {
    return (
        <section className={styles.section01}>
            <div className={styles.wrap}>
                <div className={styles.title}>
                    <h3>카페매니저</h3>
                    <p>
                        우유부터 원두, 식재료, 일회용품 등
                        <br />
                        다양한 카페 용품을 번거로움 없이
                        <br />
                        손쉽게 주문이 가능합니다.
                    </p>
                </div>
            </div>
        </section>
    );
}