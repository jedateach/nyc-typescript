import { SAME, DIFF } from "./constants";
import comparitor from "./comparitor";

/*
 * And a nice big comment for the fun of it!!
 */
export function comparisonReport(arg1, arg2): string {
  if (comparitor(arg1, arg2)) {
    return SAME;
  }
  return DIFF;
}
