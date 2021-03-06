import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { FilePicker } from 'react-file-picker';
import { withStyles } from '@material-ui/core/styles';
import {
} from '@material-ui/core';
import {
  CloudUpload,
} from '@material-ui/icons';

import * as helpers from './helpers';

import { FileContext } from '../File.context';

const FileOpen = ({
  classes,
}) => {
  const {setFile} = useContext(FileContext);

  return (
    <FilePicker
      extensions={['tsv']}
      onChange={ async (fileObject) => {
        const file = await helpers.handleTsvFileObject(fileObject);
        setFile(file);
      }}
      onError={errMsg => {
        alert(errMsg);
      }}
    >
      <CloudUpload />
    </FilePicker>
  );
};

FileOpen.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
});

export default withStyles(styles)(FileOpen);
