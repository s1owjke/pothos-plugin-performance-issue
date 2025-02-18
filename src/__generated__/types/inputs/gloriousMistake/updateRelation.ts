import { builder } from "src/builder";

import { GloriousMistakeCreate } from "./create";
import { GloriousMistakeUpdate } from "./update";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeUpdateRelation = builder.inputRef<any>("GloriousMistakeUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: GloriousMistakeWhereUnique }),
    disconnect: t.field({ type: GloriousMistakeWhereUnique }),
    create: t.field({ type: GloriousMistakeCreate }),
    update: t.field({ type: GloriousMistakeUpdate }),
  }),
});
