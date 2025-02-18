import { builder } from "src/builder";

import { GloriousMistakeCreate } from "./create";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeUpdateRelationList = builder.inputRef<any>("GloriousMistakeUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [GloriousMistakeWhereUnique] }),
    set: t.field({ type: [GloriousMistakeWhereUnique] }),
    disconnect: t.field({ type: [GloriousMistakeWhereUnique] }),
    create: t.field({ type: [GloriousMistakeCreate] }),
  }),
});
