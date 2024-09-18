import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Changed styleUrl to styleUrls
})

export class AppComponent implements OnInit {
  message: string = '';
  title = 'Minsait Project';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMessage().subscribe(
      (response) => {
        this.message = response.message;
      },
      (error) => {
        console.error('Erro ao obter a mensagem:', error);
      }
    );
  }
}
