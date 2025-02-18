import { builder } from "src/builder";

import { AlternativeFactCreate } from "./create";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactCreateRelation = builder.inputRef<any>("AlternativeFactCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: AlternativeFactWhereUnique }),
    create: t.field({ type: AlternativeFactCreate }),
  }),
});
