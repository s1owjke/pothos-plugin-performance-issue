import { builder } from "src/builder";

import { ClassifiedSillinessWhereRelationList } from "../classifiedSilliness/whereRelationList";
import { DateTimeFilter } from "../dateTimeFilter";
import { DimensionalBackupWhereRelationList } from "../dimensionalBackup/whereRelationList";
import { GhostRecordWhere } from "../ghostRecord/where";
import { IdFilter } from "../idFilter";
import { MissingContextWhereRelationList } from "../missingContext/whereRelationList";
import { RejectedTheoryWhereRelationList } from "../rejectedTheory/whereRelationList";
import { TeleportationFailureWhereRelationList } from "../teleportationFailure/whereRelationList";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const PortalIndexWhere = builder.inputRef<any>("PortalIndexWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    classifiedSillinesses: t.field({ type: ClassifiedSillinessWhereRelationList, required: false }),
    dimensionalBackups: t.field({ type: DimensionalBackupWhereRelationList, required: false }),
    ghostRecord: t.field({ type: GhostRecordWhere, required: false }),
    ghostRecordId: t.field({ type: IdFilter, required: false }),
    missingContexts: t.field({ type: MissingContextWhereRelationList, required: false }),
    rejectedTheories: t.field({ type: RejectedTheoryWhereRelationList, required: false }),
    teleportationFailures: t.field({
      type: TeleportationFailureWhereRelationList,
      required: false,
    }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [PortalIndexWhere], required: false }),
    OR: t.field({ type: [PortalIndexWhere], required: false }),
    NOT: t.field({ type: [PortalIndexWhere], required: false }),
  }),
});
