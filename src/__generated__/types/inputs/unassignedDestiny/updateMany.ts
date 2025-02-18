import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";

export const UnassignedDestinyUpdateMany = builder.inputRef<any>("UnassignedDestinyUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
  }),
});
