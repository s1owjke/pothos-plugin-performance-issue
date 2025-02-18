import { builder } from "src/builder";

import { GloriousMistakeCreate } from "./create";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeCreateRelationList = builder.inputRef<any>("GloriousMistakeCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [GloriousMistakeWhereUnique] }),
    create: t.field({ type: [GloriousMistakeCreate] }),
  }),
});
