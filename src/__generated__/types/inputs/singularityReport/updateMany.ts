import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";

export const SingularityReportUpdateMany = builder.inputRef<any>("SingularityReportUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
  }),
});
