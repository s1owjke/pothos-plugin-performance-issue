import { builder } from "src/builder";

import { DebuggingHistoryCreate } from "./create";
import { DebuggingHistoryWhereUnique } from "./whereUnique";

export const DebuggingHistoryUpdateRelationList = builder.inputRef<any>("DebuggingHistoryUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [DebuggingHistoryWhereUnique] }),
    set: t.field({ type: [DebuggingHistoryWhereUnique] }),
    disconnect: t.field({ type: [DebuggingHistoryWhereUnique] }),
    create: t.field({ type: [DebuggingHistoryCreate] }),
  }),
});
