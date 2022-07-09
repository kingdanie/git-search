import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormsModule,
} from '@angular/forms';

import { SearchComponent } from './search.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialUiModule } from 'src/app/common';
import { GithubUsers } from 'src/app/models/models';
import { CoreApisService } from 'src/app/services/core-apis.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: CoreApisService;
  let formControl: NgForm;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MaterialUiModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [SearchComponent],
    }).compileComponents();
    service = TestBed.inject(CoreApisService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();

    // debugElement = fixture.debugElement;
    // formElem = debugElement.query(By.css('#nativeForm'));
    // formControl = formElem && formElem.injector.get('form');
    // console.log('john', formControl);
  });
  beforeEach((done) => {
    fixture.whenStable().then(done);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.searchForm.valid).toBeFalsy();
  });

  it('should validate search input', () => {
    let searchInput = component.searchForm.controls['searchInput'];
    expect(searchInput).withContext(
      'Expected searchInput control was not found'
    );
    if (searchInput) {
      searchInput.setValue('');
      expect(searchInput.valid).withContext('searchInput invalid when empty');

      searchInput.setValue('value');
      expect(searchInput.valid).withContext('searchInput valid when not empty');
    }
  });
  it('searchInput field validity', () => {
    let errors = {};
    let searchInput = component.searchForm.controls['searchInput'];
    errors = searchInput.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('search input should be stored in searchSubject', () => {
    expect(component.searchForm.valid).toBeFalsy();
    component.searchForm.controls['searchInput'].setValue('john');
    expect(component.searchForm.valid).toBeTruthy();
    let searchCriteria = '';
    component.getUsers();
    service.searchSubject$.subscribe((res) => {
      searchCriteria = res;
    });
    expect(searchCriteria).toBe('john');
  });

  /**
   * Gets form control or undefined
   * @param name form control name
   * @returns FormControl
   */
  function getFormControl(name: any) {
    return formControl && formControl.form.get(name);
  }
});