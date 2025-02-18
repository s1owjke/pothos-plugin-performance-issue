import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutTimeTravelLogs } from "./createWithoutTimeTravelLogs";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutTimeTravelLogs = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutTimeTravelLogs")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutTimeTravelLogs }),
    }),
  });
