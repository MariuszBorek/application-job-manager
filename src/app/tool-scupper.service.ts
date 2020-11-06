import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scupper } from './scupper';

@Injectable({
  providedIn: 'root'
})
export class ToolScupperService {

  private scuppersUrl = 'http://localhost:8080/api/tools/scuppers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  checkScuppers(projectName: string, roofArea: string, scupperSideX: string, scupperSideY: string, bottomScupperLevelOverRoof: string, waterLevel: string): Observable<Scupper> {
    const url = `${this.scuppersUrl}/check?projectName=${projectName}
    &roofArea=${roofArea}
    &scupperSideX=${scupperSideX}
    &scupperSideY=${scupperSideY}
    &bottomScupperLevelOverRoof=${bottomScupperLevelOverRoof}
    &waterLevel=${waterLevel}`;
    return this.http.get<Scupper>(url);
  }

  saveScupper(scupper: Scupper): Observable<Scupper> {
    return this.http.post<Scupper>(this.scuppersUrl, scupper, this.httpOptions);
  }

  findAll(): Observable<Scupper[]> {
    return this.http.get<Scupper[]>(this.scuppersUrl);
  }

}
