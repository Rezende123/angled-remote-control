import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Command } from '../interfaces/Command';

@Injectable({
  providedIn: 'root'
})
export class CommandApiService {

  baseUrl = 'http://192.168.43.235:8080';

  constructor(
    private http: HttpClient
  ) { }

  save(command: Command) {
    return this.http.post(`${this.baseUrl}/command`, command);
  }

}
