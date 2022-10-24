import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { range } from "./utils";

const paginationList = range(10);

const Pagination = () => {
  const [searchParams] = useSearchParams();

  const page = useMemo(() => searchParams.get("page"), [searchParams]);
  const hasPrev = useMemo(() => !!page && Number(page) > 1, [page]);
  const hasNext = useMemo(() => Number(page) < 10, [page]);

  return (
    <div className="pagination">
      {hasPrev ? (
        <Link to={`/users/?page=${Number(page ?? 1) - 1}`}>Prev</Link>
      ) : (
        <Link role="link" aria-disabled>
          Prev
        </Link>
      )}
      {paginationList.map((p) =>
        p !== Number(page) ? (
          <Link key={p} to={`/users/?page=${p}`}>
            {p}
          </Link>
        ) : (
          <Link key={p} aria-disabled>
            {p}
          </Link>
        )
      )}
      {hasNext ? (
        <Link to={`/users/?page=${Number(page ?? 1) + 1}`}>Next</Link>
      ) : (
        <Link role="link" aria-disabled>
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;

