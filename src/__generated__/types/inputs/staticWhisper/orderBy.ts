import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { ForbiddenCheeseburgerOrderBy } from "../forbiddenCheeseburger/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";

export const StaticWhisperOrderBy = builder.inputRef<any>("StaticWhisperOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    forbiddenCheeseburger: t.field({ type: ForbiddenCheeseburgerOrderBy, required: false }),
    forbiddenCheeseburgerId: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
  }),
});
