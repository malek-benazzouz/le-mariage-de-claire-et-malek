import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  @Input() size: 'small' | 'normal';
  @Output() navLinkSelected = new EventEmitter<void>();

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {}

  onNavLinkClick(targetAnchorId: string): void {
    this.navLinkSelected.emit();
    this.viewportScroller.setOffset([0, this.size === 'small' ? 200 : 100]);
    this.viewportScroller.scrollToAnchor(targetAnchorId);
  }

}
