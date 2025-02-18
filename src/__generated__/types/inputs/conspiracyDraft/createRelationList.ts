import { builder } from "src/builder";

import { ConspiracyDraftCreate } from "./create";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftCreateRelationList = builder.inputRef<any>("ConspiracyDraftCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ConspiracyDraftWhereUnique] }),
    create: t.field({ type: [ConspiracyDraftCreate] }),
  }),
});
