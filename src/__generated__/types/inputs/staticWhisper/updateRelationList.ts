import { builder } from "src/builder";

import { StaticWhisperCreate } from "./create";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperUpdateRelationList = builder.inputRef<any>("StaticWhisperUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [StaticWhisperWhereUnique] }),
    set: t.field({ type: [StaticWhisperWhereUnique] }),
    disconnect: t.field({ type: [StaticWhisperWhereUnique] }),
    create: t.field({ type: [StaticWhisperCreate] }),
  }),
});
