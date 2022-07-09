import { CoreApisService } from 'src/app/services/core-apis.service';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';import {HttpClientModule} from '@angular/common/http';
import { GithubUsers } from 'src/app/models/models';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let service: CoreApisService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule],
      declarations: [ ResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loader should be displayed', () => {
    expect(component.loading$.subscribe()).toBeTruthy();
  });

  it('#LoadingObservableValue should return boolean value from observable',
  (done: DoneFn) => {
     component.loading$.subscribe((value: boolean) => {
     expect(value).toBeInstanceOf(Boolean);
     done();
  });
});
  
  // it('loader should be displayed', () => {
  // expect(component.ngOnInit.call(service.updateSearch(' '))).withContext(GithubUsers[]);
  // });

//   it('#getObservableValue should return value from observable',
//     (done: DoneFn) => {
//        service.search$.(service.updateSearch('')).subscribe((value: GithubUsers[]) => {
//        expect(value).toBeGreaterThan(0);
//        done();
//     });
// });


//   it('retrieves all the cars', waitForAsync(inject([CoreApisService], (coreApisService) => {
//     coreApisService.updateSearch(' ').subscribe((result: GithubUsers[]) => expect(result.length).toBeGreaterThan(0)); 
// })));

});
