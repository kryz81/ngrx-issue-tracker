import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../models/issue';
import { Observable } from 'rxjs';
import { Issues } from '../store/issue/issue.state';

@Injectable({ providedIn: 'root' })
export class IssueService {
  constructor(private http: HttpClient) {}

  save(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(`/api/issues`, issue);
  }

  transformIssues(issues: Issue[]): Issues {
    return issues.reduce(
      (result, current) => ({ ...result, [current.id]: current }),
      {}
    );
  }
}
