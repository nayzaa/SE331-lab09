import { TestBed, inject } from '@angular/core/testing';

import { CourseServerService } from './course-server.service';

describe('CourseServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseServerService]
    });
  });

  it('should be created', inject([CourseServerService], (service: CourseServerService) => {
    expect(service).toBeTruthy();
  }));
});
