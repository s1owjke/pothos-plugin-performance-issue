import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutTimeTravelLogs } from "./createWithoutTimeTravelLogs";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutTimeTravelLogs = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutTimeTravelLogs")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutTimeTravelLogs] }),
    }),
  });
