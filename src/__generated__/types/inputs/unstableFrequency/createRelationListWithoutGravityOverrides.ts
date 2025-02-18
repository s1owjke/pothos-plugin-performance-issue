import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutGravityOverrides] }),
    }),
  });
