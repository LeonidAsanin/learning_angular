import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { Logger } from '../logger.service';

describe('StateService', () => {
  let service: StateService;
  let loggerSpy: jasmine.SpyObj<Logger>;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('Logger', ['debug']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: Logger,
          useValue: loggerSpy,
        },
      ],
    });
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get state', () => {
    service.setState('foo');
    expect(service.getState()).toBe('foo');
    expect(loggerSpy.debug).toHaveBeenCalledWith('Set new state: foo');
  });
});
