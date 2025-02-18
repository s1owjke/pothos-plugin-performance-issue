import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";

export const UnstableFrequencyUpdateMany = builder.inputRef<any>("UnstableFrequencyUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
  }),
});
