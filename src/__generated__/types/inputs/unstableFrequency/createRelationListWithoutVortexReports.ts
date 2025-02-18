import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutVortexReports = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutVortexReports")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutVortexReports] }),
    }),
  });
