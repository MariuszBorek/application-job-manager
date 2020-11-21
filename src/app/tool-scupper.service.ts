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

  checkScuppers(username: string,
    password: string,
    projectName: string,
    roofArea: string,
    scupperSideX: string,
    scupperSideY: string,
    bottomScupperLevelOverRoof: string,
    waterLevel: string): Observable<Scupper> {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const url = `${this.scuppersUrl}/check?projectName=${projectName}
    &roofArea=${roofArea}
    &scupperSideX=${scupperSideX}
    &scupperSideY=${scupperSideY}
    &bottomScupperLevelOverRoof=${bottomScupperLevelOverRoof}
    &waterLevel=${waterLevel}`;
    return this.http.get<Scupper>(url);
  }

  // checkScuppers(username: string,
  //   password: string,
  //   projectName: string,
  //   roofArea: string,
  //   scupperSideX: string,
  //   scupperSideY: string,
  //   bottomScupperLevelOverRoof: string,
  //   waterLevel: string): Observable<Scupper> {
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   const url = `${this.scuppersUrl}/check?projectName=${projectName}
  //   &roofArea=${roofArea}
  //   &scupperSideX=${scupperSideX}
  //   &scupperSideY=${scupperSideY}
  //   &bottomScupperLevelOverRoof=${bottomScupperLevelOverRoof}
  //   &waterLevel=${waterLevel}`;
  //   return this.http.get<Scupper>(url, { headers });
  // }

  saveScupper(username: string, password: string, userId: number, projectId: number, scupper: Scupper): Observable<Scupper> {
    const headers = this.baseAuth(username, password);
    const url = `${this.scuppersUrl}/user/${userId}/${projectId}`;
    return this.http.post<Scupper>(url, scupper, { headers });
  }

  findAll(username: string, password: string, userId: number, projectId: number): Observable<Scupper[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const url = `${this.scuppersUrl}/user/${userId}/${projectId}`;
    return this.http.get<Scupper[]>(url, { headers });
  }

  findByProjectName(username: string, password: string, userId: number, projectId: number, projectName: string): Observable<Scupper[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const url = `${this.scuppersUrl}/user/find-by-project-name/${userId}/${projectId}/${projectName}`;
    return this.http.get<Scupper[]>(url, { headers });
  }

  deleteScupperFromList(username: string, password: string, userId: number, projectId: number, scupper: Scupper): Observable<Scupper[]> {
    const headers = this.baseAuth(username, password);
    const url = `${this.scuppersUrl}/user/${userId}/${projectId}/${scupper.id}`;
    return this.http.delete<Scupper[]>(url, { headers });
  }

  clearAllScuppers(username: string, password: string, userId: number, projectId: number): Observable<Scupper[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const url = `${this.scuppersUrl}/user/clear-saved-scuppers/${userId}/${projectId}`;
    return this.http.delete<Scupper[]>(url, { headers });
  }

  private baseAuth(username: string, password: string): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
  }
}
