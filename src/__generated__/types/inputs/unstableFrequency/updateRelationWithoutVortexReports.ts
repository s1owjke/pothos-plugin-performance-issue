import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { UnstableFrequencyUpdateWithoutVortexReports } from "./updateWithoutVortexReports";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutVortexReports = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutVortexReports")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutVortexReports }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutVortexReports }),
    }),
  });
