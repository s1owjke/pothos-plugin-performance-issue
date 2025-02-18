import { builder } from "src/builder";

import { UnstableFrequencyUpdateRelationWithoutUnfinishedSymphonies } from "../unstableFrequency/updateRelationWithoutUnfinishedSymphonies";

export const UnfinishedSymphonyUpdate = builder.inputRef<any>("UnfinishedSymphonyUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutUnfinishedSymphonies,
      required: false,
    }),
  }),
});
