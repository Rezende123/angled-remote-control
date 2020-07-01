import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Command } from '../interfaces/Command';

@Injectable({
  providedIn: 'root'
})
export class CommandApiService {

  baseUrl = 'http://localhost:4200';

  constructor(
    private http: HttpClient
  ) { }

  save(command: Command) {
    return this.http.post(`${this.baseUrl}/api/command`, command);
  }

}
