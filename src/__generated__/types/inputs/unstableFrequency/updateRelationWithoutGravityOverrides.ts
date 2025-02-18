import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { UnstableFrequencyUpdateWithoutGravityOverrides } from "./updateWithoutGravityOverrides";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutGravityOverrides = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutGravityOverrides }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutGravityOverrides }),
    }),
  });
