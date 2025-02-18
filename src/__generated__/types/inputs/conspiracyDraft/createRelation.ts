import { builder } from "src/builder";

import { ConspiracyDraftCreate } from "./create";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftCreateRelation = builder.inputRef<any>("ConspiracyDraftCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ConspiracyDraftWhereUnique }),
    create: t.field({ type: ConspiracyDraftCreate }),
  }),
});
