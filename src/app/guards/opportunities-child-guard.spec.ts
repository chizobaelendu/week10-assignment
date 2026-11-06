import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';
import { opportunitiesChildGuard } from './opportunities-child-guard';

describe('opportunitiesChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => opportunitiesChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
