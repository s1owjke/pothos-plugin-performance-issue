import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";

export const SuspiciousTimestampUpdateMany = builder.inputRef<any>("SuspiciousTimestampUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
  }),
});
