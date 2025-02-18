import { builder } from "src/builder";

import { StaticWhisperWhere } from "./where";

export const StaticWhisperWhereRelationList = builder.inputRef<any>("StaticWhisperWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: StaticWhisperWhere, required: false }),
    every: t.field({ type: StaticWhisperWhere, required: false }),
    none: t.field({ type: StaticWhisperWhere, required: false }),
  }),
});
