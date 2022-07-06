import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreApisService } from 'src/app/services/core-apis.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private searchService: CoreApisService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.fb.group({
      searchInput: ['', Validators.required],
    });
  }

  get searchInput() {
    return this.searchForm.get('searchInput');
  }

  getUsers() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value.searchInput);
      this.searchService.updateSearch(this.searchForm.value.searchInput);
      this.searchForm.get('searchInput')?.setValue('');
    } else {
      alert('an error occured');
    }
  }
}
