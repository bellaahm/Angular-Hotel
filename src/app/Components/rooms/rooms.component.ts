import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../Services/rooms.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [HttpClientModule],
  providers:[RoomsService],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit  {
  Rooms: any = [];
  constructor(private roomsServ: RoomsService) { }
  ngOnInit(): void {

  }
  
}
