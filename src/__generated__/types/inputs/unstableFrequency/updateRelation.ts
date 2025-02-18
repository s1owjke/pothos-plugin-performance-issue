import { builder } from "src/builder";

import { UnstableFrequencyCreate } from "./create";
import { UnstableFrequencyUpdate } from "./update";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelation = builder.inputRef<any>("UnstableFrequencyUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnstableFrequencyWhereUnique }),
    disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
    create: t.field({ type: UnstableFrequencyCreate }),
    update: t.field({ type: UnstableFrequencyUpdate }),
  }),
});
