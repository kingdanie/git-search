import { GitResponse } from './../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  switchMap,
  map,
  catchError,
  EMPTY,
  finalize,
  tap,
} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreApisService {
  private searchState = new BehaviorSubject<string>('');
  searchSubject$ = this.searchState.asObservable();
  loadingSearchResult = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private matSnackBar: MatSnackBar) {}

  search$ = this.searchSubject$.pipe(
    filter((searchparams) => Boolean(searchparams)),
    // tap(() => this.loadingSearchResult.next(true)),
    switchMap((searchParams) =>
      this.http
        .get<GitResponse>(
          `https://api.github.com/search/users?q=${searchParams} in:login`
        )
        .pipe(
          // tap((res) => console.log(res)),
          filter((res) => Boolean(res)),
          // tap((res) =>  {console.log(res.items); return res.items}),
          map((res) => {
            return res.items;
          }),
          catchError((err) => {
            console.log(err);
            this.matSnackBar.open(err.message, undefined, {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 8000,
            });
            return EMPTY;
          }),
          finalize(() => {
            this.loadingSearchResult.next(true);
          })
        )
    )
  );

  /**
   * Action stream to update the case search param.
   * @param data New case search parameters
   */
  updateSearch(data: string): void {
    // this.loadingSearchResult.next(false);
    this.searchState.next(data);
  }

  // /**
  //  * Action stream to update the case search param.
  //  * @param data New case search parameters
  //  */
  // updateLoader(data: boolean): void {
  //   this.loadingSearchResult.next(data);
  // }
}
