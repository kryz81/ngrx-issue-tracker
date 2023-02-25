import { Issue } from '../../models/issue';

export interface Filter {
  text: string;
}

export interface IssueState {
  filter: Filter;
  issues: Issues;
  selected: string[];
  loaded: boolean;
}

export interface Issues {
  [id: string]: Issue;
}
