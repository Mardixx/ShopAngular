import { Component } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private loggingService: LoggingService) { }

  
}
