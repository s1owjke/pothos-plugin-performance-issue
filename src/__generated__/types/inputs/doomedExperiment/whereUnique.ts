import { builder } from "src/builder";

export const DoomedExperimentWhereUnique = builder.inputRef<any>("DoomedExperimentWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
