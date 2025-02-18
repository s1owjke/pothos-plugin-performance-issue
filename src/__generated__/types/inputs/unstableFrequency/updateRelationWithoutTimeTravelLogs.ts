import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutTimeTravelLogs } from "./createWithoutTimeTravelLogs";
import { UnstableFrequencyUpdateWithoutTimeTravelLogs } from "./updateWithoutTimeTravelLogs";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutTimeTravelLogs = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutTimeTravelLogs")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutTimeTravelLogs }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutTimeTravelLogs }),
    }),
  });
