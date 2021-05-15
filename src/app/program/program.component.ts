import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  moreInfoIcon = faMapMarkerAlt;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {}

  openModal(content: any): void {
    this.modalService.open(content, { centered: true });
  }

}
