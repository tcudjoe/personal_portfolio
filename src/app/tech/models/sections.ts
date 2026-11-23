import {BlockImage} from "./block-image";
import {BlockText} from "./block-text";
import {BlockCode} from "./block-code";

export type Sections =
  | { collection: 'block_image'; item: BlockImage }
  | { collection: 'block_text'; item: BlockText }
  | { collection: 'block_code'; item: BlockCode };
