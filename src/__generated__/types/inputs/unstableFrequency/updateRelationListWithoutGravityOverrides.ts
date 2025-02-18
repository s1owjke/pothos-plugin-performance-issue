import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutGravityOverrides] }),
    }),
  });
