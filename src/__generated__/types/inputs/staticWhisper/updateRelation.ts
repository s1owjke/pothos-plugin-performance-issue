import { builder } from "src/builder";

import { StaticWhisperCreate } from "./create";
import { StaticWhisperUpdate } from "./update";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperUpdateRelation = builder.inputRef<any>("StaticWhisperUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: StaticWhisperWhereUnique }),
    disconnect: t.field({ type: StaticWhisperWhereUnique }),
    create: t.field({ type: StaticWhisperCreate }),
    update: t.field({ type: StaticWhisperUpdate }),
  }),
});
