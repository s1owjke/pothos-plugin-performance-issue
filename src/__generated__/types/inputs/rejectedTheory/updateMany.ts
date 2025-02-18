import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const RejectedTheoryUpdateMany = builder.inputRef<any>("RejectedTheoryUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    ghostRecordId: t.field({ type: IdUpdate, required: false }),
    parentRejectedTheoryId: t.field({ type: IdUpdate, required: false }),
    thresholdManifestId: t.field({ type: IdUpdate, required: false }),
  }),
});
