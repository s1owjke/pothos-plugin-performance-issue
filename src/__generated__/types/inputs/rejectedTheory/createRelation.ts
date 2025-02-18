import { builder } from "src/builder";

import { RejectedTheoryCreate } from "./create";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelation = builder.inputRef<any>("RejectedTheoryCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: RejectedTheoryWhereUnique }),
    create: t.field({ type: RejectedTheoryCreate }),
  }),
});
