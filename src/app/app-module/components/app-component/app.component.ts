/**
 * Dependencies
 */
import { Component, ViewEncapsulation, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { environment } from '@environments/environment';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { routerTransition } from '@app/app-core/animations/router.transition';
import { selectorSetting, SettingState } from '@app/state-management/reducers/setting';

/**
 * Services
 */
import { LoggingService } from '@app/app-core/services/logging';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit {

  /**
   * App Meta Information
   */
  private appEnvironment = environment;

  /**
   * Binding of the app root class
   */
  @HostBinding('class') componentCssClass;

  /**
   * NGRX Unsubscribe
   */
  private unsubscribe$: Subject<void> = new Subject<void>();

  // Top-Level Navigation Items
  public navigation = [
    { link: '', label: 'Home' },
    { link: '404', label: 'Error' }
  ];

  /**
   * Constructor
   * @param overlayContainer Overlay Container
   * @param store Store
   * @param logger Logger
   */
  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<any>,
    private logger: LoggingService,
  ) {}

  /**
   * On Component Initalization
   */
  ngOnInit(): void {
    // register state listeners
    this.subscribeToSettings();
  }

  /**
   * Subscribe to the settings store
   */
  private subscribeToSettings() {
    this.store
      .select(selectorSetting)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((settings: SettingState) => {
        this.setTheme(settings.theme);
      });
  }

  /**
   * Sets the current theme of the site
   *
   * @param themeName The name of the theme.
   */
  private setTheme(themeName: string) {
    // logging
    this.logger.log({
      level: 'DEBUG',
      message: 'Changed application theme.',
      context: {
        class: this.constructor.name,
        newtheme: themeName,
      }
    });

    // theme class
    const themeClass = themeName + '-theme';

    // overlay container
    // - remove old theme
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) =>
      item.includes('-theme')
    );
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    // - set new theme
    classList.add(themeClass.toLowerCase());
    this.componentCssClass = themeClass.toLowerCase();
  }

}
