import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutVortexReports = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutVortexReports")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutVortexReports] }),
    }),
  });
