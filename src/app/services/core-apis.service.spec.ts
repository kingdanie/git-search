import { TestBed } from '@angular/core/testing';

import { CoreApisService } from './core-apis.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CoreApisService', () => {
  let service: CoreApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
   imports: [
    HttpClientTestingModule,
    MatSnackBarModule]
 });
    service = TestBed.inject(CoreApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [CoreApisService]
  // }));

   it('should be created', () => {
    const service: CoreApisService = TestBed.get(CoreApisService);
    expect(service).toBeTruthy();
   });


});
