import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

const Tooltips = (props) => {
  return (
    <div>
      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={props.title}>
        {props.children}
      </Tooltip>
    </div>
  );
}

export default Tooltips;