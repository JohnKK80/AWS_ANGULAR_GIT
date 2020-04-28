import { TestBed, async, inject } from '@angular/core/testing';

import { TopTenGuard } from './top-ten.guard';

describe('TopTenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopTenGuard]
    });
  });

  it('should ...', inject([TopTenGuard], (guard: TopTenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
