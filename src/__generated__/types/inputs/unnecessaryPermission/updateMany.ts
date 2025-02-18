import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";

export const UnnecessaryPermissionUpdateMany = builder.inputRef<any>("UnnecessaryPermissionUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
  }),
});
