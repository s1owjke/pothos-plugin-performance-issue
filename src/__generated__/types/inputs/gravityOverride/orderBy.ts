import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { DimensionalBackupOrderBy } from "../dimensionalBackup/orderBy";
import { ImaginaryFriendOrderBy } from "../imaginaryFriend/orderBy";
import { ReverseTransactionOrderBy } from "../reverseTransaction/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";
import { UnassignedDestinyOrderBy } from "../unassignedDestiny/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";

export const GravityOverrideOrderBy = builder.inputRef<any>("GravityOverrideOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    dimensionalBackup: t.field({ type: DimensionalBackupOrderBy, required: false }),
    dimensionalBackupId: t.field({ type: SortOrder, required: false }),
    imaginaryFriend: t.field({ type: ImaginaryFriendOrderBy, required: false }),
    imaginaryFriendId: t.field({ type: SortOrder, required: false }),
    reverseTransaction: t.field({ type: ReverseTransactionOrderBy, required: false }),
    reverseTransactionId: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
    unassignedDestiny: t.field({ type: UnassignedDestinyOrderBy, required: false }),
    unassignedDestinyId: t.field({ type: SortOrder, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
  }),
});
