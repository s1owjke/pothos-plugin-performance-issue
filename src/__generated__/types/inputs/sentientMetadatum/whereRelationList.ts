import { builder } from "src/builder";

import { SentientMetadatumWhere } from "./where";

export const SentientMetadatumWhereRelationList = builder.inputRef<any>("SentientMetadatumWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: SentientMetadatumWhere, required: false }),
    every: t.field({ type: SentientMetadatumWhere, required: false }),
    none: t.field({ type: SentientMetadatumWhere, required: false }),
  }),
});
