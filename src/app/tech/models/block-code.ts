import {BlockFields} from "./block-fields";

export interface BlockCode extends BlockFields {
  code_block: string | null;
  language: string | null;
  date_created: string;
  date_updated: string | null;
}
