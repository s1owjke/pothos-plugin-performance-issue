import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GhostRecordWhere } from "../ghostRecord/where";
import { IdFilter } from "../idFilter";
import { PortalIndexWhereRelationList } from "../portalIndex/whereRelationList";
import { RejectedTheoryWhereRelationList } from "../rejectedTheory/whereRelationList";
import { ThresholdManifestWhere } from "../thresholdManifest/where";

export const RejectedTheoryWhere = builder.inputRef<any>("RejectedTheoryWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    childRejectedTheories: t.field({ type: RejectedTheoryWhereRelationList, required: false }),
    ghostRecord: t.field({ type: GhostRecordWhere, required: false }),
    ghostRecordId: t.field({ type: IdFilter, required: false }),
    parentRejectedTheory: t.field({ type: RejectedTheoryWhere, required: false }),
    parentRejectedTheoryId: t.field({ type: IdFilter, required: false }),
    portalIndexes: t.field({ type: PortalIndexWhereRelationList, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [RejectedTheoryWhere], required: false }),
    OR: t.field({ type: [RejectedTheoryWhere], required: false }),
    NOT: t.field({ type: [RejectedTheoryWhere], required: false }),
  }),
});
