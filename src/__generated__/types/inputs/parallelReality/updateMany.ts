import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";

export const ParallelRealityUpdateMany = builder.inputRef<any>("ParallelRealityUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
  }),
});
