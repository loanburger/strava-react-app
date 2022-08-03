import { StreamSet } from 'src/models';

export const mockDistanceStream: StreamSet = {
  distance: {
    data: [2.9, 5.8, 8.5, 11.7, 15, 19, 23.2, 28, 32.8, 38.1, 43.8, 49.5],
    series_type: 'distance',
    original_size: 10,
    resolution: 'high',
  },
  altitude: {
    data: [18, 19, 20.2, 22.2, 22.4, 22.6, 23.6, 24.6, 24.4, 23.2],
    series_type: 'distance',
    original_size: 10,
    resolution: 'high',
  },
};
