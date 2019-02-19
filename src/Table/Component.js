import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import ReactMarkdown from 'react-markdown';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

function TableComponent({
  classes,
  title,
  columns,
  data,
}) {
  const options = {
    selectableRows: false,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100],
    downloadOptions: {
      filename: title,
      separator: '\t',
    },
  };

  if (columns) {
    columns = columns.map(name => ({
      name,
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const maxNoteLength = 100;
          let note = "";
          if (value) {
            value = value.replace(/<br>/gi, '\n');
            if (value.length <= (maxNoteLength - 3)) {
              note = value;
            } else {
              note = value.substring(0,maxNoteLength) + '...';
            }
          }
          return (
            <ReactMarkdown source={note} />
          );
        },
      }
    }));
  }

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={title}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
};

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

const styles = theme => ({
  root: {
    padding: '1em',
  },
});

const getMuiTheme = () => createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        padding: "0 8px 0 8px",
      }
    },
    MuiTableRow: {
      root: {
        height: 'unset',
      }
    },
  }
});

export default withStyles(styles)(TableComponent);