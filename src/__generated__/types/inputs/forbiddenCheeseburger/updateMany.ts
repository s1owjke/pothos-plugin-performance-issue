import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const ForbiddenCheeseburgerUpdateMany = builder.inputRef<any>("ForbiddenCheeseburgerUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    thresholdManifestId: t.field({ type: IdUpdate, required: false }),
  }),
});
