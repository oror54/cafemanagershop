// components/Pagination.tsx
import React from "react";
import styles from "./Pagination.module.css"; // Assuming you have styles for pagination buttons

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
                <i className={styles.icoPrev}></i>
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
                <i className={styles.icoNext}></i>
            </button>
        </div>
    );
};

export default Pagination;
