import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const ArtificialPotatoUpdateMany = builder.inputRef<any>("ArtificialPotatoUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    ghostRecordId: t.field({ type: IdUpdate, required: false }),
    unstableFrequencyId: t.field({ type: IdUpdate, required: false }),
  }),
});
