import React, { useState } from "react";
import { range } from "lodash";

const Pagination = ({ total, currentPage, perPage, onPageChange, onPerPageChange }) => {

    const pageCount = Math.ceil(total / perPage);


    if (pageCount === 1) return null;

    const pages = range(1, pageCount + 1);

    const firstPage = () => {

        if (currentPage != 1) return
        return (
            { display: "none" }
        )
    }
    const lastPage = () => {

        if ((pages.length) != currentPage) return
        return (
            { display: "none" }
        )
    }
    const tagLinkCreate = (page, index) => {

        if (currentPage - 3 > page) {
            return
        }
        if (currentPage + 3 >= page) {

            return (
                <a
                    className="page-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => onPageChange(index)}
                >
                    {page}
                </a>
            )
        }

    }

    return (
        <div style={{ textAlign: "center" }}>
            <p><span>تعداد کل رکورد ها : </span> {total}</p>
            <p><span>تعداد  صفحه : </span> {pageCount}</p>
            <nav aria-label="Page navigation">

                <ul className="pagination justify-content-center">

                    <li style={firstPage()} key={-1}>
                        <a className="page-link" style={{ cursor: "pointer", backgroundColor: "#7b63ff", color: "white" }} onClick={() => onPageChange(0)}>
                            اول
                        </a>
                    </li>

                    {pages.map((page, index) => (
                        <li
                            key={page}
                            className={
                                page === currentPage
                                    ? "page-item active"
                                    : "page-item"
                            }
                        >

                            {tagLinkCreate(page, index)}
                        </li>
                    ))}

                    <li style={lastPage()} key={-2}>
                        <a className="page-link" style={{ cursor: "pointer", backgroundColor: "#7b63ff", color: "white" }} onClick={() => onPageChange(pages.length - 1)}>
                            آخر
                        </a>
                    </li>
                </ul>
            </nav>
            <span>تعدا نمایش رکورد ها : </span>

            <select onChange={(e) => { onPerPageChange(e.currentTarget.value) }}>
                <option selected={perPage == 5} value={5}>5</option>
                <option selected={perPage == 10} value={10}>10</option>
                <option selected={perPage == 30} value={30}>30</option>
                <option selected={perPage == 50} value={50}>50</option>
                <option selected={perPage == 100} value={100}>100</option>
            </select>
        </div>
    );
};

export default Pagination;
