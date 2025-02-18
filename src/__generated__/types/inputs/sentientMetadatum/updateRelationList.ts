import { builder } from "src/builder";

import { SentientMetadatumCreate } from "./create";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumUpdateRelationList = builder.inputRef<any>("SentientMetadatumUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SentientMetadatumWhereUnique] }),
    set: t.field({ type: [SentientMetadatumWhereUnique] }),
    disconnect: t.field({ type: [SentientMetadatumWhereUnique] }),
    create: t.field({ type: [SentientMetadatumCreate] }),
  }),
});
