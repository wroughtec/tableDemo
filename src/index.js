import React, { useState } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@material-ui/styles";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import { createMuiTheme } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const newTheme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
      type: "light"
    },
    primary: {
      light: "#417d87",
      main: "#08515a",
      dark: "#002831",
      contrastText: "#fff"
    },
    secondary: {
      light: "#7f97a2",
      main: "#607d8b",
      dark: "#435761",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    }
  }
});

function App() {
  const [state, setState] = useState({
      denseTable: true,
      stacked: false
    }),
    toggleDenseTable = event => {
      setState({
        ...state,
        denseTable: event.target.checked
      });
    },
    toggleResponsive = event => {
      setState({
        ...state,
        stacked: event.target.checked ? true : false
      });
    };

  const columns = [
    {
      name: "Name",
      options: {
        filter: true
      }
    },
    {
      name: "Title",
      options: {
        filter: true,
        setCellHeaderProps: value => ({
          style: { textDecoration: "underline" }
        })
      }
    },
    {
      name: "Location",
      options: {
        filter: false
      }
    },
    {
      name: "Age",
      options: {
        filter: true
      }
    },
    {
      name: "Salary",
      options: {
        filter: true,
        sort: false
      }
    }
  ];

  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis", 30, 100000],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, 200000],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, 500000],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, 50000],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, 75000],
    ["Blake Duncan", "Business Management Analyst", "San Diego", 65, 94000],
    ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, 210000],
    ["Lane Wilson", "Commercial Specialist", "Omaha", 19, 65000],
    ["Robin Duncan", "Business Analyst", "Los Angeles", 20, 77000],
    ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, 135000],
    ["Harper White", "Attorney", "Pittsburgh", 52, 420000],
    ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, 150000],
    ["Frankie Long", "Industrial Analyst", "Austin", 31, 170000],
    ["Brynn Robbins", "Business Analyst", "Norfolk", 22, 90000],
    ["Justice Mann", "Business Consultant", "Chicago", 24, 133000],
    ["Addison Navarro", "Business Management Analyst", "New York", 50, 295000],
    ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000],
    ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000],
    ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000],
    ["Danny Leon", "Computer Scientist", "Newark", 60, 220000],
    ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000],
    ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000],
    ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000],
    ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000],
    ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000],
    ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000],
    ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000],
    ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000],
    [
      "Gabby Strickland",
      "Business Process Consultant",
      "Scottsdale",
      26,
      45000
    ],
    ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000]
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: state.stacked ? "stacked" : "scrollMaxHeight",
    rowHover: false,
    fixedHeaderOptions: {
      xAxis: true,
      yAxis: true
    },
    setTableProps: () => ({
      padding: state.denseTable ? "none" : "default",
      size: state.denseTable ? "small" : "medium"
    })
  };

  return (
    <ThemeProvider theme={newTheme}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={state.denseTable}
              onChange={toggleDenseTable}
              value="denseTable"
              color="primary"
            />
          }
          label="Dense Table"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.stacked}
              onChange={toggleResponsive}
              value="stacked"
              color="primary"
            />
          }
          label="Stacked Table"
        />
      </FormGroup>
      <MUIDataTable
        title={"ACME Employee list"}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
