import { builder } from "src/builder";

import { UnstableFrequencyCreate } from "./create";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationList = builder.inputRef<any>("UnstableFrequencyUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
    set: t.field({ type: [UnstableFrequencyWhereUnique] }),
    disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
    create: t.field({ type: [UnstableFrequencyCreate] }),
  }),
});
