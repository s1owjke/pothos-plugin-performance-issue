import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutVortexReports = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutVortexReports")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutVortexReports }),
    }),
  });
