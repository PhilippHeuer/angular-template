/**
 * Dependencies
 */
import { Component, ViewEncapsulation, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { environment } from '@environments/environment';
import { routerTransition } from '@app/app-core/animations/router.transition';

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
   * Constructor
   * @param overlayContainer Overlay Container
   */
  constructor(
    public overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.setTheme('default');
  }

  /**
   * Sets the current theme of the site
   *
   * @param themeName The name of the theme.
   */
  private setTheme(themeName: string) {
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
    classList.add(themeClass);
    this.componentCssClass = themeClass;
  }

}
