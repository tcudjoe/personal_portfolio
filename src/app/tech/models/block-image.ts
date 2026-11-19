import {BlockFields} from "./block-fields";

export interface BlockImage extends BlockFields{
  image: string | null;
  caption: string | null;
}
