import { TestBed } from '@angular/core/testing';

import { UserCreatorService } from './user-creator.service';

describe('UserCreatorService', () => {
  let service: UserCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
