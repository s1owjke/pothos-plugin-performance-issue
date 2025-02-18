import { builder } from "src/builder";

import { StaticWhisperCreate } from "./create";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperCreateRelationList = builder.inputRef<any>("StaticWhisperCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [StaticWhisperWhereUnique] }),
    create: t.field({ type: [StaticWhisperCreate] }),
  }),
});
