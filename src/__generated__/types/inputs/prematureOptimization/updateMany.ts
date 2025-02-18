import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";

export const PrematureOptimizationUpdateMany = builder.inputRef<any>("PrematureOptimizationUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
  }),
});
