import { issueInitialState, issueReducer } from './issue.reducer';
import { INIT } from '@ngrx/store';
import { IssueState } from './issue.state';
import { IssueActions } from './issue.actions';

describe('Issue Reducer', () => {
  describe('init action', () => {
    it('should return the initial state', () => {
      const nextState = issueReducer(undefined, { type: INIT });
      expect(nextState).toEqual(issueInitialState);
    });
  });

  it('gets an issue by id', () => {
    // given
    const initialState: IssueState = {
      filter: { text: '' },
      issues: {},
      selected: [],
      loaded: true,
      loading: false,
      error: '',
    };

    // when
    const nextState = issueReducer(initialState, {
      type: IssueActions.SET,
      issues: {
        abc: {
          id: 'abc',
          title: 'title',
          description: 'desc',
          resolved: false,
          priority: 'low',
        },
      },
    } as any);

    // then
    expect(nextState.issues).toEqual({
      abc: {
        id: 'abc',
        title: 'title',
        description: 'desc',
        resolved: false,
        priority: 'low',
      },
    });
  });
});
