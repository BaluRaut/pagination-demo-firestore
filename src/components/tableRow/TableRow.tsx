import { FC } from "react";
import { Topic } from "../../types/topics";
import "./TableRow.css";

type Props = {
  topic: Topic;
};

const TableRow: FC<Props> = (props) => {
  const { topic } = props;
  return (
    <div className="table-row">
      <span>
        <span>{JSON.stringify(topic)}</span>
      </span>
      <span>{topic.city}</span>
    </div>
  );
};

export default TableRow;
