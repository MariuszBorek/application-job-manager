import { TestBed } from '@angular/core/testing';

import { ToolScupperService } from './tool-scupper.service';

describe('ToolScupperService', () => {
  let service: ToolScupperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolScupperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
