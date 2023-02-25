import { Injectable } from '@angular/core';
import { Issue } from '../models/issue';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { v4 } from 'uuid';

interface Database {
  issues: Issue[];
}

@Injectable()
export class DatabaseService implements InMemoryDbService {
  createDb(): Database {
    return {
      issues: [
        {
          id: v4(),
          title: 'Example Issue',
          description: 'This is a pre-existing issue',
          priority: 'medium',
          resolved: false,
        },
      ],
    };
  }
}
