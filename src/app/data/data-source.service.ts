import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MockDataService } from './mock-data.service';
import { DataSourceConfig } from '../core/models/widget.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  constructor(
    private mockDataService: MockDataService,
    private http: HttpClient
  ) {}

  fetchData(config: DataSourceConfig): Observable<any> {
    if (!config) {
      return throwError(() => new Error('Data source config is required'));
    }

    switch (config.type) {
      case 'mock':
        return this.mockDataService.getData(config.source);
      case 'api':
        return this.fetchFromApi(config);
      case 'sql':
        return this.fetchFromSql(config);
      default:
        return throwError(() => new Error(`Unknown data source type: ${config.type}`));
    }
  }

  private fetchFromApi(config: DataSourceConfig): Observable<any> {
    const url = config.source;
    const params = config.params || {};
    return this.http.get(url, { params });
  }

  private fetchFromSql(config: DataSourceConfig): Observable<any> {
    return this.mockDataService.getData('table-orders');
  }
}
