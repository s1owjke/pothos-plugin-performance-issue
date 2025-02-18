import { builder } from "src/builder";

import { UnstableFrequencyCreateRelationWithoutUnfinishedSymphonies } from "../unstableFrequency/createRelationWithoutUnfinishedSymphonies";

export const UnfinishedSymphonyCreate = builder.inputRef<any>("UnfinishedSymphonyCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutUnfinishedSymphonies,
      required: false,
    }),
  }),
});
