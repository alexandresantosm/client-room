import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoomService } from '../room.service';
import { Room } from '../room';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  room: Room = new Room;
  submitted = false;

  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  newRoom(): void {
    this.room = new Room;
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.roomService.createRoom(this.room)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );

      this.room = new Room;

      this.goToList();
  }

  goToList() {
    this.router.navigate(['/rooms'])
  }
}
