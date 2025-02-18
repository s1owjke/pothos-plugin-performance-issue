import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const GravityOverrideUpdateMany = builder.inputRef<any>("GravityOverrideUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    dimensionalBackupId: t.field({ type: IdUpdate, required: false }),
    imaginaryFriendId: t.field({ type: IdUpdate, required: false }),
    reverseTransactionId: t.field({ type: IdUpdate, required: false }),
    thresholdManifestId: t.field({ type: IdUpdate, required: false }),
    unassignedDestinyId: t.field({ type: IdUpdate, required: false }),
    unstableFrequencyId: t.field({ type: IdUpdate, required: false }),
  }),
});
