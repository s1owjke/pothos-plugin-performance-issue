import { builder } from "src/builder";

import { DebuggingHistoryCreate } from "./create";
import { DebuggingHistoryUpdate } from "./update";
import { DebuggingHistoryWhereUnique } from "./whereUnique";

export const DebuggingHistoryUpdateRelation = builder.inputRef<any>("DebuggingHistoryUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: DebuggingHistoryWhereUnique }),
    disconnect: t.field({ type: DebuggingHistoryWhereUnique }),
    create: t.field({ type: DebuggingHistoryCreate }),
    update: t.field({ type: DebuggingHistoryUpdate }),
  }),
});
