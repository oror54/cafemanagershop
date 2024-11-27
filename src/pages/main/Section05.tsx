import { useState, useEffect } from "react";
import styles from "@/styles/Main.module.css";
import Image from "next/image";

import TumbsImag from "$/assets/images/main/section05/cafemanager-video-thumb.jpg";

export default function Section05() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 열기
    const openModal = () => setIsModalOpen(true);

    // 모달 닫기
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (isModalOpen) {
            // body와 html의 스크롤을 막음
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            // 모달이 닫히면 스크롤 허용
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }

        // 컴포넌트가 언마운트되거나, 모달이 닫힐 때 스크롤 허용
        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [isModalOpen]); // isModalOpen이 변경될 때마다 실행

    return (
        <>
            <section className={styles.section05}>
                <div className={styles.wrap}>
                    <div className={styles.thumbBox}>
                        <div className={`${styles.thumbImg} ${styles.video}`}>
                            <Image
                                src={TumbsImag}
                                alt="카페 사장님을 위한 카페매니저 서비스"
                                width={400} // 이미지 크기를 조정
                                height={300} // 원하는 크기
                                priority // 렌더링 우선순위 설정
                            />
                            {/* 플레이 버튼 */}
                            <button
                                className={styles.playBtn}
                                onClick={openModal} // 클릭 시 모달 열림
                            ></button>
                        </div>
                        <div className={styles.thumbTxt}>
                            <div className={styles.thbTit}>
                                <p>카페사장님을 위한 일 잘하는 매니저</p>
                                <h3>CAFE MANAGER</h3>
                            </div>
                            <div className={styles.thbTxt}>
                                <p>
                                    입점 및 문의사항은 카카오톡 채팅
                                    및 고객센터로 문의해주세요.
                                </p>
                            </div>
                            <button
                                className={`${styles.btn} ${styles.kakaoBtn}`}
                            >
                                <p>카카오톡 문의하기</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 모달 */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <video
                            controls
                            autoPlay
                            className={styles.videoPlayer}
                        >
                            <source
                                src="/assets/videos/cafemanager.mp4" // import한 비디오 경로
                                type="video/mp4"
                            />
                            동영상 형식을 지원하지 않는 브라우저입니다.
                        </video>
                        <button
                            className={styles.closeBtn}
                            onClick={closeModal}
                        >
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
