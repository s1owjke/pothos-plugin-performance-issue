import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { EchoChamberWhereRelationList } from "../echoChamber/whereRelationList";
import { GhostRecordWhere } from "../ghostRecord/where";
import { IdFilter } from "../idFilter";
import { InvisibleTransactionWhere } from "../invisibleTransaction/where";
import { OverwrittenLegacyWhereRelationList } from "../overwrittenLegacy/whereRelationList";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const ArtificialPotatoWhere = builder.inputRef<any>("ArtificialPotatoWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    echoChambers: t.field({ type: EchoChamberWhereRelationList, required: false }),
    ghostRecord: t.field({ type: GhostRecordWhere, required: false }),
    ghostRecordId: t.field({ type: IdFilter, required: false }),
    invisibleTransaction: t.field({ type: InvisibleTransactionWhere, required: false }),
    overwrittenLegacy: t.field({ type: OverwrittenLegacyWhereRelationList, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [ArtificialPotatoWhere], required: false }),
    OR: t.field({ type: [ArtificialPotatoWhere], required: false }),
    NOT: t.field({ type: [ArtificialPotatoWhere], required: false }),
  }),
});
