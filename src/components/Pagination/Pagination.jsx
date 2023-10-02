import { useState } from 'react';
import {
  PaginationItem,
  PaginationLink,
  PaginationList,
} from './Pagination.styled';

export const Pagination = ({ onPageChange, currentPage, totalPages }) => {
  const [pageNeighbours] = useState(2);
  const LEFT_PAGE = 'LEFT';
  const RIGHT_PAGE = 'RIGHT';

  /**
   * Helper method for creating a range of numbers
   * range(1, 5) => [1, 2, 3, 4, 5]
   */
  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (100)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (100)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (100)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  // const visiblePages = getVisiblePages(currentPage, totalPages);
  // function getVisiblePages(currentPage, totalPages) {
  //   const visiblePages = [currentPage];
  //   for (let i = 1; i <= 2; i++) {
  //     if (currentPage - i > 1) {
  //       visiblePages.unshift(currentPage - i);
  //     }
  //   }

  //   if (currentPage - 3 > 1 && visiblePages[1] !== '...') {
  //     visiblePages.unshift('...');
  //   }
  //   // else {

  //   // }

  //   for (let i = 1; i <= 2; i++) {
  //     if (currentPage + i < totalPages) {
  //       visiblePages.push(currentPage + i);
  //     }
  //   }

  //   if (currentPage + 3 < totalPages) {
  //     visiblePages.push('...');
  //   }

  //   if (visiblePages[0] > 1 || visiblePages[0] !== 1) {
  //     visiblePages.unshift(1);
  //   }

  //   if (
  //     visiblePages[visiblePages.length - 1] < totalPages ||
  //     visiblePages[visiblePages.length - 1] !== totalPages
  //   ) {
  //     visiblePages.push(totalPages);
  //   }

  //   return visiblePages;
  // }

  const handleClick = page => evt => {
    evt.preventDefault();
    onPageChange(page);
  };

  const handleMoveLeft = evt => {
    evt.preventDefault();
    onPageChange(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = evt => {
    evt.preventDefault();
    onPageChange(currentPage + pageNeighbours * 2 + 1);
  };

  const pages = fetchPageNumbers();
  return (
    <div>
      {totalPages >= 2 && (
        <PaginationList>
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    aria-label="Previous"
                    onClick={handleMoveLeft}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </PaginationLink>
                </PaginationItem>
              );

            if (page === RIGHT_PAGE)
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    aria-label="Next"
                    onClick={handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </PaginationLink>
                </PaginationItem>
              );

            return (
              <PaginationItem
                key={index}
                className={`page-item${currentPage === page ? ' active' : ''}`}
              >
                <PaginationLink href="#" onClick={handleClick(page)}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        </PaginationList>
      )}
    </div>
  );

  // return (
  //   <div>
  //     <ul>
  //       {visiblePages.map(number => (
  //         <li key={number}>
  //           <button
  //             onClick={() => onPageChange(number)}
  //             className={
  //               number === currentPage
  //                 ? 'is-active pagination-btn'
  //                 : 'pagination-btn'
  //             }
  //           >
  //             {number}
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};
