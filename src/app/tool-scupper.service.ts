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

  checkScuppers(projectName: string,
    roofArea: string,
    scupperSideX: string,
    scupperSideY: string,
    bottomScupperLevelOverRoof: string,
    waterLevel: string): Observable<Scupper> {
    const url = `${this.scuppersUrl}/check?projectName=${projectName}
    &roofArea=${roofArea}
    &scupperSideX=${scupperSideX}
    &scupperSideY=${scupperSideY}
    &bottomScupperLevelOverRoof=${bottomScupperLevelOverRoof}
    &waterLevel=${waterLevel}`;
    return this.http.get<Scupper>(url);
  }

  saveScupper(userId: number, projectId: number, scupper: Scupper): Observable<Scupper> {
    const url = `${this.scuppersUrl}/${userId}/${projectId}`;
    return this.http.post<Scupper>(url, scupper, this.httpOptions);
  }

  findAll(userId: number, projectId: number): Observable<Scupper[]> {
    const url = `${this.scuppersUrl}/${userId}/${projectId}`;
    return this.http.get<Scupper[]>(url);
  }

  findByProjectName(userId: number, projectId: number, projectName: string): Observable<Scupper[]> {
    const url = `${this.scuppersUrl}/find-by-project-name/${userId}/${projectId}/${projectName}`;
    return this.http.get<Scupper[]>(url);
  }

  deleteScupperFromList(userId: number, projectId: number, scupper: Scupper): Observable<Scupper[]> {
    const url = `${this.scuppersUrl}/${userId}/${projectId}/${scupper.id}`;
    return this.http.delete<Scupper[]>(url, this.httpOptions);
  }

  clearAllScuppers(userId: number, projectId: number): Observable<Scupper[]>  {
    const url = `${this.scuppersUrl}/clear-saved-scuppers/${userId}/${projectId}`;
    return this.http.delete<Scupper[]>(url);
  }

}
