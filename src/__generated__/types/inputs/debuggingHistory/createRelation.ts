import { builder } from "src/builder";

import { DebuggingHistoryCreate } from "./create";
import { DebuggingHistoryWhereUnique } from "./whereUnique";

export const DebuggingHistoryCreateRelation = builder.inputRef<any>("DebuggingHistoryCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: DebuggingHistoryWhereUnique }),
    create: t.field({ type: DebuggingHistoryCreate }),
  }),
});
