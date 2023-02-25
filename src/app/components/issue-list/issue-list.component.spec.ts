import { IssueListComponent } from './issue-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../../store/app.state';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { IssuesComponent } from '../issues/issues.component';
import { FormsModule } from '@angular/forms';
import { Issue } from '../../models/issue';
import { setIssueFilter } from '../../store/issue/issue.actions';

describe('IssueListComponent', () => {
  let component: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;
  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssueListComponent, MockComponent(IssuesComponent)],
      providers: [
        // wstawiam mock Store
        provideMockStore<AppState>({
          initialState: {
            count: 0,
            issue: {
              issues: {},
              loading: false,
              loaded: true,
              error: '',
              filter: { text: '' },
              selected: [],
            },
          },
        }),
      ],
      imports: [RouterTestingModule, FormsModule],
    }).compileComponents();
    // pobieram zmockowany store, zeby go ustawiac do testow
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(IssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display issues', () => {
    let elements = fixture.debugElement.queryAll(By.css('li'));
    expect(elements.length).toBe(0);
    const issues: Issue[] = [
      {
        id: 'abc',
        title: 'Title',
        description: 'Desc',
        priority: 'low',
        resolved: false,
      },
    ];
    // ustawiam store do testow
    store.setState({
      count: 0,
      issue: {
        issues: {
          abc: {
            id: 'abc',
            title: 'Title',
            description: 'Desc',
            priority: 'low',
            resolved: false,
          },
        },
        loading: false,
        loaded: true,
        error: '',
        filter: { text: '' },
        selected: [],
      },
    });
    fixture.detectChanges();

    // sprawdzam czy komponent odzwierciedla stan store
    elements = fixture.debugElement.queryAll(By.css('li'));
    expect(elements.length).toBe(issues.length);
  });

  it('should dispatch search', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const text = 'abc';
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = text;
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(setIssueFilter({ filter: text }));
  });
});
