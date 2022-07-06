import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { GithubUsers } from 'src/app/models/models';
import { CoreApisService } from 'src/app/services/core-apis.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  
  showSearch: boolean = false;

  loading$ = this.searchService.loadingSearchResult.pipe();
  result$ = this.searchService.search$.pipe(
    tap((result) => {
    // reset to pagination first page on each new search 
    if(this.UserSource) {
      this.UserSource.paginator?.firstPage()
    } 
    //assign data from api response as mat table source
    this.UserSource = new MatTableDataSource<GithubUsers>(result);
    this.showSearch = true;

    //assign pagination and sorting 
    this.UserSource.paginator = this.paginator;
    this.UserSource.sort = this.sort;
  })
  );

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  displayedColumns: string[] = ['avatar_url', 'login', 'type'];
  UserSource!: MatTableDataSource<GithubUsers>;

  constructor(
    private searchService: CoreApisService,
  ) { }

  ngOnInit(): void {
  }

}
