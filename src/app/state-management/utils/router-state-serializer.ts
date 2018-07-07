/**
 * Dependencies
 */
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

/**
 * State Interface
 */
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

/**
 * Serializer
 */
export class SimpleRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url, root } = routerState;
    const { queryParams, params } = root;

    let routeSnapshot = root;
    while (routeSnapshot.firstChild) {
      routeSnapshot = routeSnapshot.firstChild;
    }

    return { url, params, queryParams };
  }
}
