import { useState, useCallback } from "react";
import "./App.css";
import { useTopics } from "./hooks/useTopics";
import TableHeader from "./components/tableHeader/TableHeader";
import TableRow from "./components/tableRow/TableRow";
import Pagination from "./components/pagination/Pagination";
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
function App() {
  const max = 5;
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState<"next" | "prev" | undefined>(undefined);
  const [position, setPosition] = useState<number>(0);
  const { topics, searchTopics } = useTopics(page, status, position, max);
  const defaultMaterialTheme = createTheme();

  const prevClick = useCallback(() => {
    setPage((page) => page - 1);
    setStatus("prev");
    setPosition(topics[0].wodate);
  }, [setPage, setStatus, setPosition, topics]);


  const nextClick = useCallback(() => {
    setPage((page) => page + 1);
    setStatus("next");
    setPosition(topics[max - 1].wodate);
  }, [setPage, setStatus, setPosition, topics]);
  const columns = [
    {
        "title": "Zone",
        "field": "zone"
    },
    {
        "title": "City Codes",
        "field": "citycodes"
    },
    {
        "title": "City",
        "field": "city"
    },
    {
        "title": "Appx Value",
        "field": "appxvalue"
    },
    {
        "title": "Type Work",
        "field": "typework"
    },
    {
        "title": "Owner",
        "field": "owner"
    },
    {
        "title": "Owner Phone",
        "field": "ownerphone"
    },
    {
        "title": "Owner Address",
        "field": "owneraddress"
    },
    {
        "title": "Owner City",
        "field": "ownercity"
    },
    {
        "title": "Owner St",
        "field": "ownerst"
    },
    {
        "title": "Zip",
        "field": "ownerzip"
    },
    {
        "title": "General Ct",
        "field": "generalct"
    },
    {
        "title": "General Ct Phone",
        "field": "generalctphone"
    },
    {
        "title": "General Ct Address",
        "field": "generalctaddress"
    },
    {
        "title": "General Ct Email",
        "field": "generalctemail"
    },
    {
        "title": "General Ct City",
        "field": "generalctcity"
    },
    {
        "title": "General Ct St",
        "field": "generalctst"
    },
    {
        "title": "General Ct Zip",
        "field": "generalctzip"
    },
    {
        "title": "Architect",
        "field": "architect"
    },
    {
        "title": "Architect Phone",
        "field": "architectphone"
    },
    {
        "title": "Architect Email",
        "field": "architectemail"
    },
    {
        "title": "Job Location",
        "field": "joblocation"
    },
    {
        "title": "Job Status",
        "field": "jobstatus"
    },
    {
        "title": "St Date",
        "field": "stdate"
    },
    {
        "title": "Wo Date",
        "field": "wodate"
    },
    {
        "title": "ADate",
        "field": "adate"
    },
    {
        "title": "UDate",
        "field": "udate"
    },
    {
        "title": "Link",
        "field": "link"
    }
];

  return (
    <>
      <TableHeader />
      <ThemeProvider theme={defaultMaterialTheme}>
      {topics &&
                <MaterialTable
          columns={columns}
          data={topics}
          options={{  
                      paging: false
          }          }
          title="Demo Title"
        />}
        </ThemeProvider>
      <Pagination
        page={page}
        searchTopics={searchTopics}
        prevClick={prevClick}
        nextClick={nextClick}
      />
    </>
  );
}

export default App;
