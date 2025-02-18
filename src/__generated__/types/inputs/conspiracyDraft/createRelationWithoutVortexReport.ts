import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftCreateRelationWithoutVortexReport = builder.inputRef<any>("ConspiracyDraftCreateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: ConspiracyDraftWhereUnique }),
    create: t.field({ type: ConspiracyDraftCreateWithoutVortexReport }),
  }),
});
