/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import { Typography, Grid, Container, Paper } from '@mui/material';
import { ActivityDetail } from 'src/models';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStravaActivityIsLoading,
  getStravaActivityResponse,
} from 'src/selectors';
import { useEffect, useState } from 'react';
import {
  fetchActivityStreamAction,
  fetchStravaActivityAction,
} from 'src/actions';
import LoadingSkeleton from 'src/components/Common/Skeleton';
import ActivityDetailStats from 'src/components/Strava/ActivityDetailStats';
import ElevationGraph from 'src/components/Strava/ElevationGraph';
import MapControl from '../components/LeafletMap/LeafletMapControl';

const StravaActivityDetail = () => {
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const [activity, setActivity] = useState<ActivityDetail | undefined>(
    undefined,
  );

  const stravaActivityResponse = useSelector(getStravaActivityResponse);
  const isLoading = useSelector(getStravaActivityIsLoading);

  useEffect(() => {
    dispatch(fetchStravaActivityAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (
      stravaActivityResponse?.isSuccessful &&
      stravaActivityResponse.activity
    ) {
      setActivity(stravaActivityResponse.activity);
    } else {
      setActivity(undefined);
    }
  }, [stravaActivityResponse]);

  const noActivityFound = (
    <Typography
      variant="h4"
      color="red"
    >{`No activity found for id: ${id}`}</Typography>
  );

  return (
    <Container maxWidth="xl">
      {isLoading && (
        <Paper>
          <LoadingSkeleton />
        </Paper>
      )}
      {!isLoading && !activity && noActivityFound}
      {!isLoading && activity && (
        <Grid padding={2}>
          <Grid container item padding={1}>
            <Grid container direction="row" spacing={3} marginBottom={3}>
              <Grid item>
                <Paper>
                  <ActivityDetailStats {...activity} />
                </Paper>
              </Grid>
              <Grid item>
                <Paper>
                  <ElevationGraph {...activity} />
                </Paper>
              </Grid>
            </Grid>
            <MapControl
              activity={activity}
              style={{ height: '500px', width: '100%' }}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default StravaActivityDetail;
