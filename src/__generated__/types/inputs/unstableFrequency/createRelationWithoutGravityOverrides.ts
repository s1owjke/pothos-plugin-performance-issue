import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutGravityOverrides = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutGravityOverrides }),
    }),
  });
