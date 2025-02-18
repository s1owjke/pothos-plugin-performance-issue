import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutTimeTravelLogs } from "./createWithoutTimeTravelLogs";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutTimeTravelLogs = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutTimeTravelLogs")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutTimeTravelLogs] }),
    }),
  });
