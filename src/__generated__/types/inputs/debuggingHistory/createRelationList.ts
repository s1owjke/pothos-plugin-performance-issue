import { builder } from "src/builder";

import { DebuggingHistoryCreate } from "./create";
import { DebuggingHistoryWhereUnique } from "./whereUnique";

export const DebuggingHistoryCreateRelationList = builder.inputRef<any>("DebuggingHistoryCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [DebuggingHistoryWhereUnique] }),
    create: t.field({ type: [DebuggingHistoryCreate] }),
  }),
});
