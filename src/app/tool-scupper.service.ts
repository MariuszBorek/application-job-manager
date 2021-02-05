import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scupper } from './scupper';

@Injectable({
  providedIn: 'root'
})
export class ToolScupperService {

  private scuppersUrl = 'https://jm-backend.herokuapp.com/api/tools/scuppers';
  // private scuppersUrl = 'http://localhost:8080/api/tools/scuppers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  private getProjectId(): string {
    return localStorage.getItem('project');
  }

  checkScuppers(
    projectName: string,
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

  saveScupper(scupper: Scupper): Observable<Scupper> {
    const url = `${this.scuppersUrl}/user/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.post<Scupper>(url, scupper);
  }

  findAll(): Observable<Scupper[]> {
    const url = `${this.scuppersUrl}/user/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.get<Scupper[]>(url);
  }

  findByProjectName(projectName: string): Observable<Scupper[]> {
    const url = `${this.scuppersUrl}/user/find-by-project-name/${this.getUserEmail()}/${this.getProjectId()}/${projectName}`;
    return this.http.get<Scupper[]>(url);
  }

  deleteScupperFromList(scupper: Scupper): Observable<Scupper[]> {
    const url = `${this.scuppersUrl}/user/${this.getUserEmail()}/${this.getProjectId()}/${scupper.id}`;
    return this.http.delete<Scupper[]>(url);
  }

  clearAllScuppers(): Observable<Scupper[]> {
    const url = `${this.scuppersUrl}/user/clear-saved-scuppers/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.delete<Scupper[]>(url);
  }

}
