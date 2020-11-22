import { Route } from '@angular/router';
import { Path } from '@app/@core/enums';
import { PlayPage } from './play.page';

export const PLAY_ROUTE: Route = {
  path: Path.Play,
  component: PlayPage,
};
