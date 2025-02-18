import { builder } from "src/builder";

import { AlternativeFactCreate } from "./create";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelationList = builder.inputRef<any>("AlternativeFactUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [AlternativeFactWhereUnique] }),
    set: t.field({ type: [AlternativeFactWhereUnique] }),
    disconnect: t.field({ type: [AlternativeFactWhereUnique] }),
    create: t.field({ type: [AlternativeFactCreate] }),
  }),
});
