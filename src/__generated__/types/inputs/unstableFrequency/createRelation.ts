import { builder } from "src/builder";

import { UnstableFrequencyCreate } from "./create";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelation = builder.inputRef<any>("UnstableFrequencyCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnstableFrequencyWhereUnique }),
    create: t.field({ type: UnstableFrequencyCreate }),
  }),
});
