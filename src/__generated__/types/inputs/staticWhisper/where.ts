import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { ForbiddenCheeseburgerWhere } from "../forbiddenCheeseburger/where";
import { IdFilter } from "../idFilter";
import { ThresholdManifestWhere } from "../thresholdManifest/where";

export const StaticWhisperWhere = builder.inputRef<any>("StaticWhisperWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    forbiddenCheeseburger: t.field({ type: ForbiddenCheeseburgerWhere, required: false }),
    forbiddenCheeseburgerId: t.field({ type: IdFilter, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [StaticWhisperWhere], required: false }),
    OR: t.field({ type: [StaticWhisperWhere], required: false }),
    NOT: t.field({ type: [StaticWhisperWhere], required: false }),
  }),
});
