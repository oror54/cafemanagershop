import styles from "@/styles/Main.module.css";
import InstaItems from "./InstaItems";


export default function Section06() {

    return (
        <section className={styles.section06}>
            <div className={styles.tit}>
                <div className={styles.point}>
                    <span>FOLLOW US</span>
                </div>
                <h4>카페매니저의 소식을 확인해 보세요</h4>
                <div className={styles.view}>
                    <a href="#" className={styles.viewDetail}>
                        <span>SNS 보기</span>
                        <i className={styles.arrowRight}></i>
                    </a>
                </div>
            </div>
            <InstaItems />
        </section >
    );
}
