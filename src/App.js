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
import { forwardRef } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function App() {
  const max = 100;
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(undefined);
  const [position, setPosition] = useState(0);
  const { topics, searchTopics } = useTopics(page, status, position, max);
  const defaultMaterialTheme = createTheme();
  const prevClick = useCallback(() => {
    setPage((page) => page - 1);
    setStatus("prev");
    setPosition(topics[0].wodate);
  }, [setPage, setStatus, setPosition, topics]);


  const nextClick = useCallback(() => {
      debugger;
    setPage((page) => page + 1);
    setStatus("next");
    if(topics[max - 1]) {
        setPosition(topics[max - 1].wodate);
    }
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
    const tableHeight =(window.innerHeight - 34 - 34 - 52 - 1) / window.innerHeight * 100;
  return (
    <>
        <Container maxWidth maxHeight>
            <Box sx={{ bgcolor: 'white', height: '100vh' }}>

                <ThemeProvider theme={defaultMaterialTheme}>

                {topics &&
                <MaterialTable
          columns={columns}
          data={topics}
          icons={tableIcons}
          options={{
              actionsColumnIndex: 0,
              search: true,
              selection: false,
              filtering: false,
              headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF'
              },
              cellStyle: {
                  padding: 2,
              },
              rowStyle: {
                  border: "1px solid green",
                  height: "30px",
                  padding: "0px !important",
              },
                      paging: false,
              maxBodyHeight: `${tableHeight}vh`,
              minBodyHeight: `${tableHeight}vh`,
          }          }
          title="Demo Title"
        />}
      <Pagination
        page={page}
        searchTopics={searchTopics}
        prevClick={prevClick}
        nextClick={nextClick}
      />
                </ThemeProvider>
            </Box>
        </Container>
    </>
  );
}

export default App;
