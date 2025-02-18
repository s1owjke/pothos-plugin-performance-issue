import { builder } from "src/builder";

import { ConspiracyDraftCreate } from "./create";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelationList = builder.inputRef<any>("ConspiracyDraftUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ConspiracyDraftWhereUnique] }),
    set: t.field({ type: [ConspiracyDraftWhereUnique] }),
    disconnect: t.field({ type: [ConspiracyDraftWhereUnique] }),
    create: t.field({ type: [ConspiracyDraftCreate] }),
  }),
});
