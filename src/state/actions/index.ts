import { ActionType } from '../action-types';

interface SearchNPMPackagesAction {
  type: ActionType.SEARCH_NPM_PACKAGES;
}
interface SearchNPMPackagesSuccessAction {
  type: ActionType.SEARCH_NPM_PACKAGES_SUCCESS;
  payload: string[];
}
interface SearchNPMPackagesErrorAction {
  type: ActionType.SEARCH_NPM_PACKAGES_ERROR;
  payload: string;
}

export type Action =
  | SearchNPMPackagesAction
  | SearchNPMPackagesSuccessAction
  | SearchNPMPackagesErrorAction;
