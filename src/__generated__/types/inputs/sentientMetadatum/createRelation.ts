import { builder } from "src/builder";

import { SentientMetadatumCreate } from "./create";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumCreateRelation = builder.inputRef<any>("SentientMetadatumCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SentientMetadatumWhereUnique }),
    create: t.field({ type: SentientMetadatumCreate }),
  }),
});
