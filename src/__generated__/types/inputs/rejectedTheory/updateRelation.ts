import { builder } from "src/builder";

import { RejectedTheoryCreate } from "./create";
import { RejectedTheoryUpdate } from "./update";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelation = builder.inputRef<any>("RejectedTheoryUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: RejectedTheoryWhereUnique }),
    disconnect: t.field({ type: RejectedTheoryWhereUnique }),
    create: t.field({ type: RejectedTheoryCreate }),
    update: t.field({ type: RejectedTheoryUpdate }),
  }),
});
