import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const GhostRecordUpdateMany = builder.inputRef<any>("GhostRecordUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    thresholdManifestId: t.field({ type: IdUpdate, required: false }),
  }),
});
