import { AxiosError } from 'axios';

export type StreamData = {
  data: Array<number>;
  series_type: string;
  original_size: number;
  resolution: string;
};

/* eslint-disable camelcase */
export type DistanceStreamSet = {
  distance: StreamData;
};

export type AltitudeStreamSet = {
  altitude: StreamData;
};

export type StreamSet = DistanceStreamSet | AltitudeStreamSet;

export type ActivityStreamResponse = {
  stream?: StreamSet;
  isSuccessful: boolean;
  error?: Error | AxiosError;
};

export type ActivityStreamRequest = {
  id: number;
  types: Array<string>;
};
