export type LaunchesPastType = {
  id: string;
  details: string;
  mission_name: string;
  launch_date_local: string;
  launch_date_utc: string;
  launch_year: string;
  links: {
    article_link: string;
    video_link: string;
  };
  rocket: {
    rocket_name: string;
  };
};

export type LaunchesPastWrapperType = {
  launchesPast: LaunchesPastType[];
};
