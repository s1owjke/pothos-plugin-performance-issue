import { builder } from "src/builder";

import { SentientMetadatumCreate } from "./create";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumCreateRelationList = builder.inputRef<any>("SentientMetadatumCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SentientMetadatumWhereUnique] }),
    create: t.field({ type: [SentientMetadatumCreate] }),
  }),
});
