import { TestBed } from '@angular/core/testing';

import { PvModuleLibraryService } from './pv-module-library.service';

describe('PvModuleLibraryService', () => {
  let service: PvModuleLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvModuleLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
