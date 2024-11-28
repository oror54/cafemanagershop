import React from 'react';
import Image from "next/image";
import FooterLogo from "$/assets/images/common/white-logo.svg";
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <div className={styles.footer}>
                <div className={styles.wrap}>
                    <div className={styles.inner}>
                        <div className={styles.ftLogo}>
                            <a href="#" className={styles.img}>
                                <Image src={FooterLogo} alt="카페매니저" />
                            </a>
                        </div>
                        <div className={styles.ftCutomer}>
                            <div className={styles.tellBox}>
                                <div className={styles.tit}>
                                    <p>카페매니저문의하기</p>
                                </div>
                                <div className={styles.num}>
                                    <strong>010-4684-4790</strong>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ftInfo}>
                            <div className={styles.info}>
                                <div className={styles.txt}>
                                    <p className={styles.inf}>주식회사 커포트</p>
                                </div>
                                <div className={styles.txt}>
                                    <p className={styles.tit}>사업자등록번호</p>
                                    <p className={styles.inf}>491-88-02804</p>
                                </div>
                                <div className={styles.txt}>
                                    <p className={styles.tit}>대표자</p>
                                    <p className={styles.inf}>김동우</p>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.txt}>
                                    <p className={styles.tit}>주소</p>
                                    <p className={styles.inf}>대구광역시 서구 국채보상로 6길 11, 1층 107호</p>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.txt}>
                                    <p className={styles.tit}>COPYRIGHT CUPPORT.ALL RIGHTS RESERVED.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

};

export default Footer;