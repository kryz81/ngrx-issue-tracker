import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 } from 'uuid';
import { submitIssue } from '../../store/issue/issue.actions';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styles: [
    `
      form {
        margin: 25px 0;
      }
    `,
  ],
})
export class IssuesComponent {
  form: FormGroup;

  constructor(private readonly store: Store, private readonly fb: FormBuilder) {
    this.form = fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['low', Validators.required],
    });
  }

  submit() {
    const id = v4();
    const issue: Issue = {
      id,
      resolved: false,
      ...this.form.value,
    };
    this.store.dispatch(submitIssue({ issue }));
  }
}
