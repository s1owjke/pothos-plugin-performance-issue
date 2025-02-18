import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ConspiracyDraftUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelationWithoutVortexReport = builder.inputRef<any>("ConspiracyDraftUpdateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: ConspiracyDraftWhereUnique }),
    disconnect: t.field({ type: ConspiracyDraftWhereUnique }),
    create: t.field({ type: ConspiracyDraftCreateWithoutVortexReport }),
    update: t.field({ type: ConspiracyDraftUpdateWithoutVortexReport }),
  }),
});
