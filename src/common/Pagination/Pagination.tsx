// components/Pagination.tsx
import React from "react";
import styles from "./Pagination.module.css";
import Image from "next/image";// Assuming you have styles for pagination buttons

import prev from "$/ico-prev.svg"
import next from "$/ico-next.svg"

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    // Create an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className={styles.pagination}>
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`${styles.paginationButton} ${styles.prevButton}`}
            >
                <Image className={styles.ico} src={prev} alt="이전" />
            </button>

            {/* Page Number Buttons */}
            <div className={styles.pageNumbers}>
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={`${styles.paginationButton} ${currentPage === pageNumber ? styles.active : ""
                            }`}
                    >
                        <p>{pageNumber}</p>
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`${styles.paginationButton} ${styles.nextButton}`}
            >
                <Image className={styles.ico} src={next} alt="다음" />
            </button>
        </div>
    );
};

export default Pagination;
