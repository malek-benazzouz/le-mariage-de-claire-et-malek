import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle?: string;
  @Input() extraText?: string;
  @Input() noDeco?: boolean;

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {}

}
