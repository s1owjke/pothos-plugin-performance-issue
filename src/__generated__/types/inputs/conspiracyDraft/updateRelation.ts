import { builder } from "src/builder";

import { ConspiracyDraftCreate } from "./create";
import { ConspiracyDraftUpdate } from "./update";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelation = builder.inputRef<any>("ConspiracyDraftUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ConspiracyDraftWhereUnique }),
    disconnect: t.field({ type: ConspiracyDraftWhereUnique }),
    create: t.field({ type: ConspiracyDraftCreate }),
    update: t.field({ type: ConspiracyDraftUpdate }),
  }),
});
