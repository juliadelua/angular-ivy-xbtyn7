import { Component, OnInit } from '@angular/core';
import { JuliaTasksServiceService } from '../julia-tasks-service.service';

@Component({
  selector: 'app-julia-tasks',
  templateUrl: './julia-tasks.component.html',
  styleUrls: ['./julia-tasks.component.css'],
})
export class JuliaTasksComponent implements OnInit {
  constructor(private serv: JuliaTasksServiceService) {}

  ngOnInit() {}
}
