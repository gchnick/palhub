import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  OptionTopbar,
  ScrollState,
  UiScrollStateService,
} from '@nikosoftware/core-ui';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  // private readonly themeService = inject(UiThemeService);
  private readonly scrollStateService = inject(UiScrollStateService);
  title = 'Home';
  private scrollDown = false;
  topbarOptions: OptionTopbar[] = [];
  private destroy = new Subject<void>();

  ngOnInit(): void {
    // this.themeService.init();
    this.scrollServiceInit();
  }

  private scrollServiceInit(): void {
    this.scrollStateService
      .getStateAsObserbable()
      .pipe(takeUntil(this.destroy))
      .subscribe((scroll) => {
        if (scroll === ScrollState.DOWN) {
          this.scrollDown = true;
        }

        if (scroll === ScrollState.TOP) {
          this.scrollDown = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
