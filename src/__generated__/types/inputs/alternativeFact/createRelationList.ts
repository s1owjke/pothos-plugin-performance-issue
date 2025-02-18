import { builder } from "src/builder";

import { AlternativeFactCreate } from "./create";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactCreateRelationList = builder.inputRef<any>("AlternativeFactCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [AlternativeFactWhereUnique] }),
    create: t.field({ type: [AlternativeFactCreate] }),
  }),
});
