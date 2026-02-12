export type YearConfig = {
  ID: number;
  Year: number;
  NumOfEvents: number;
  NumOfEventsDone: number;
};

export type TrackYearConfig = YearConfig;
export type SoloYearConfig = YearConfig & {
  NumOfEventsPerDrop: number;
};
