import { useState } from "react";

const Pagination = ({setPage,page}) => {
  

    const PreviousHandeler = () => {
        if (page <= 1) return;
        setPage(page => page - 1)
    }
    const NextHandeler = () => {
        if (page >= 10) return;
        setPage(page => page + 1);
    }

    return (
        <div>
            <button onClick={PreviousHandeler}>Previous</button>
            <p style={{ color: page === 1 ? "red" : "" }}>1</p>
            <p style={{ color: page === 2 ? "red" : "" }}>2</p>
            <span>...</span>
            {page > 2 && page < 9 && (
                <>
                    <p>
                        {page}
                    </p>
                    <span>...</span>
                </>
            )}
            <p>9</p>
            <p>10</p>
            <button onClick={NextHandeler}>Next</button>
        </div>
    )
}
export default Pagination;