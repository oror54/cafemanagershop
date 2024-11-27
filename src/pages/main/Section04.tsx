import styles from "@/styles/Main.module.css";
import NewItems from "./NewItems";

export default function Section04() {
    return (
        <section className={styles.section04}>
            <div className={styles.tit}>
                <div className={styles.point}>
                    <span>NEW ITEM</span>
                </div>
                <h4>카페매니저의 새로운 제품을 만나보세요.</h4>
            </div>
            <NewItems />
        </section>
    );
}