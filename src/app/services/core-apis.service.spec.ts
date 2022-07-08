import { TestBed } from '@angular/core/testing';

import { CoreApisService } from './core-apis.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockUsers } from './../dummyData/dummyData'

describe('CoreApisService', () => {
  let service: CoreApisService;
  let apiUrl = 'https://api.github.com/search/users?q=in:login';
  let httpController: HttpTestingController;

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

   it('should call search and return an array of Users', () => {
  
    service.search$.subscribe((res) => {
      expect(res).toEqual(mockUsers);
    })

    const req = httpController?.expectOne({
      method: 'GET',
      url: `${apiUrl}`,
    });

    req?.flush(mockUsers);
  });


});
