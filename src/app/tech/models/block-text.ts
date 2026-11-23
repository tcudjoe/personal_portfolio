import {BlockFields} from "./block-fields";

export interface BlockText extends BlockFields{
  body_text: string | null;
}
