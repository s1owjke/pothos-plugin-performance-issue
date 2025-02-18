import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { StaticWhisperWhereRelationList } from "../staticWhisper/whereRelationList";
import { ThresholdManifestWhere } from "../thresholdManifest/where";

export const ForbiddenCheeseburgerWhere = builder.inputRef<any>("ForbiddenCheeseburgerWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    staticWhispers: t.field({ type: StaticWhisperWhereRelationList, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [ForbiddenCheeseburgerWhere], required: false }),
    OR: t.field({ type: [ForbiddenCheeseburgerWhere], required: false }),
    NOT: t.field({ type: [ForbiddenCheeseburgerWhere], required: false }),
  }),
});
