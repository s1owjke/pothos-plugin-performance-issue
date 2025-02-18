import { builder } from "src/builder";

export const GravityOverrideCreateMany = builder.inputRef<any>("GravityOverrideCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    dimensionalBackupId: t.field({ type: "ID", required: false }),
    imaginaryFriendId: t.field({ type: "ID", required: false }),
    reverseTransactionId: t.field({ type: "ID", required: false }),
    thresholdManifestId: t.field({ type: "ID", required: true }),
    unassignedDestinyId: t.field({ type: "ID", required: false }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
  }),
});
