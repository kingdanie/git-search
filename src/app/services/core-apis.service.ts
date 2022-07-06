import { GitResponse } from './../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, filter, switchMap, map, catchError, EMPTY, finalize } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoreApisService {

  private searchState = new BehaviorSubject<string>('');
  searchSubject$ = this.searchState.asObservable();
  loadingSearchResult = new Subject();

  constructor(
    private http: HttpClient,
  ) { }


  search$ = this.searchSubject$.pipe(
    filter(searchparams => Boolean(searchparams)),
    switchMap((searchParams) =>
      this.http
        .get<GitResponse>(
          `https://api.github.com/search/users?q=${searchParams} in:login`
        )
        .pipe(
          // tap((res) => console.log(res)),
          filter((res) => Boolean(res)),
          // tap((res) =>  {console.log(res.items); return res.items}),
          map(res => { return res.items}),
          catchError((err) => {
            console.log(err);
            return EMPTY;
          }),
          finalize(() => {
            this.loadingSearchResult.next(false);
          })
        )
    )
  );


    /**
 * Action stream to update the case search param.
 * @param data New case search parameters
 */
     updateSearch(data: string): void {
      this.searchState.next(data);

    }
}
