/* eslint-disable react-hooks/exhaustive-deps */
import { Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivityStreamAction } from 'src/actions';
import { ActivityDetail, AltitudeStreamSet, StreamData } from 'src/models';
import {
  getActivityStreamIsLoading,
  getActivityStreamResponse,
} from 'src/selectors';
import LoadingSkeleton from '../Common/Skeleton';

const ElevationGraph = (activity: ActivityDetail): JSX.Element => {
  const dispatch = useDispatch();
  const { id, elev_low, elev_high } = activity;
  const [stream, setStream] = useState<StreamData | undefined>(undefined);

  const streamResponse = useSelector(getActivityStreamResponse);
  const isLoading = useSelector(getActivityStreamIsLoading);

  useEffect(() => {
    dispatch(
      fetchActivityStreamAction({
        id,
        types: ['altitude'],
      }),
    );
  }, [dispatch, id]);

  useEffect(() => {
    if (
      streamResponse?.isSuccessful &&
      streamResponse.stream &&
      streamResponse.stream
    ) {
      const aSteam = streamResponse.stream as AltitudeStreamSet;
      setStream(aSteam.altitude);
    } else {
      setStream(undefined);
    }
  }, [streamResponse]);

  return (
    <>
      {isLoading && <LoadingSkeleton />}
      <Grid item padding={3}>
        {!isLoading && stream && (
          <>
            <Typography variant="h5">Elevation Graph</Typography>
            <Typography variant="body1">{`${elev_low} - ${elev_high}`}</Typography>
            <Typography variant="body1">{`Stream set: ${stream.series_type}`}</Typography>
          </>
        )}
      </Grid>
    </>
  );
};

export default ElevationGraph;
