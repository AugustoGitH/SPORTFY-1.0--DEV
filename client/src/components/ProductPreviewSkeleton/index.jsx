import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonProductPreview() {
  return (
    <Stack spacing={0.5}>
      <Skeleton variant="rounded" width={280} height={180} style={{marginBottom: "1rem"}}/>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <div style={{display: "flex", justifyContent: "start", marginTop: "1.8rem", width: "280px"}}>
        <Skeleton variant="circular" width={30} height={30} style={{marginRight: ".4rem"}} />
        <Skeleton variant="circular" width={30} height={30} style={{marginRight: ".4rem"}}/>
        <Skeleton variant="circular" width={30} height={30} style={{marginRight: ".4rem"}} />
        <Skeleton variant="circular" width={30} height={30} style={{marginRight: ".4rem"}}/>
        <Skeleton variant="circular" width={30} height={30} />
      </div>
      <Skeleton variant="text" sx={{ fontSize: '.7rem' }} width={140} style={{marginTop: ".8rem"}} />
      <Skeleton variant="text" sx={{ fontSize: '.7rem' }} width={140} style={{marginTop: ".8rem"}} />
      <Skeleton variant="text" sx={{ fontSize: '.7rem' }} width={140} style={{marginTop: ".8rem"}} />
      <Skeleton variant="text" sx={{ fontSize: '.7rem' }} width={140} style={{marginTop: ".8rem"}} />
    </Stack>
  );
}