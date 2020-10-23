import { Box, CircularProgress } from '@material-ui/core';
import React from 'react'

interface IProps{
  size: number;
  color:any;
}

const LoadingIcon:React.FC<IProps> = (props) =>{
  return(
    <Box mr={1}>
      <CircularProgress size={props.size} color={props.color} />
    </Box>
  )
}

export default LoadingIcon;