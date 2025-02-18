import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelationListWithoutVortexReport = builder
  .inputRef<any>("ConspiracyDraftUpdateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      set: t.field({ type: [ConspiracyDraftWhereUnique] }),
      disconnect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      create: t.field({ type: [ConspiracyDraftCreateWithoutVortexReport] }),
    }),
  });
