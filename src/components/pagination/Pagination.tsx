import { FC } from "react";
import {Button} from "@mui/material";

type Props = {
  page: number;
  searchTopics: boolean;
  prevClick: () => void;
  nextClick: () => void;
};

const Pagination: FC<Props> = (props) => {
  const { page, searchTopics, prevClick, nextClick } = props;
  return (
    <div style={{ display: "flex", justifyContent: "end", marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2px",
          width: "8%",
        }}
      >
        <Button  variant="contained" disabled={page <= 1} onClick={prevClick}>
       Prev
        </Button>
        <Button variant="contained" disabled={!searchTopics} variant="contained" onClick={nextClick}>
         Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
