import { FC } from "react";

type Props = {
  page: number;
  searchTopics: boolean;
  prevClick: () => void;
  nextClick: () => void;
};

const Pagination: FC<Props> = (props) => {
  const { page, searchTopics, prevClick, nextClick } = props;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          width: "60%",
        }}
      >
        <button disabled={page <= 1} onClick={prevClick}>
       Prev
        </button>
        <button disabled={!searchTopics} onClick={nextClick}>
         Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
