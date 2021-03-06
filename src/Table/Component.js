import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
} from '@material-ui/icons';
import Cell from './Cell';
import RowMenu from './Row/Menu';

const TableComponent = ({
  classes,
  file,
  file: {
    title,
    columns,
    data,
  },
  raw,
  options,
}) => {
  let columnConfig, dataRows;
  if (columns && data) {
    columnConfig = columns.map(name => ({
      name,
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <Cell value={value} tableMeta={tableMeta} raw={raw} />
        ),
      }
    }));
    const actionsColumn = {
      name: 'Actions',
      options: {
        sort: true,
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <RowMenu rowIndex={value} row={file.data[value]} />
        ),
      },
    };
    columnConfig.unshift(actionsColumn);
    dataRows = data.map((row, rowIndex) => {
      let _row = [rowIndex, ...row];
      return _row;
    });
  }

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={getMuiTheme}>
        <MUIDataTable
          title={title}
          data={dataRows}
          columns={columnConfig}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
};

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    padding: '1em',
  },
});

const getMuiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiTableCell: {
      root: {
        padding: "0 8px 0 8px",
        textAlign: "unset",
        maxWidth: "30em",
      },
    },
    MuiTableRow: {
      root: {
        height: 'unset',
      }
    },
    MUIDataTable: {
      root: {

      },
      responsiveScroll: {
        maxHeight: 'unset',
        overflowX: 'unset',
        overflowY: 'unset',
      },
    },
    MuiToolbar: {
      root: {
        top: 0,
        position: 'sticky',
        background: 'white',
        zIndex: '100',
      },
    },
    MUIDataTableHeadCell: {
      fixedHeader: {
        top: '62px',
      },
      toolButton: {
        whiteSpace: 'nowrap',
      },
    },
    MuiTable: {
      root: {
        position: 'sticky',
        bottom: 0,
        background: 'white',
      },
    },
  }
});

export default withStyles(styles)(TableComponent);
