import { AxiosError } from 'axios';

/* eslint-disable camelcase */
export type IStatTotals = {
  count: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  elevation_gain: number;
  achievement_count: number;
};

export type IAthleteStats = {
  biggest_ride_distance: number;
  biggest_climb_elevation_gain: number;
  recent_ride_totals: IStatTotals;
  recent_run_totals: IStatTotals;
  recent_swim_totals: IStatTotals;
  ytd_ride_totals: IStatTotals;
  ytd_run_totals: IStatTotals;
  ytd_swim_totals: IStatTotals;
  all_ride_totals: IStatTotals;
  all_run_totals: IStatTotals;
  all_swim_totals: IStatTotals;
};
export type IFetchStravaAthleteStatsResponse = {
  athleteStats?: IAthleteStats | undefined;
  error?: AxiosError | Error;
  isSuccessful?: boolean;
};
