import { builder } from "src/builder";

import { HalfBakedIdeaCreate } from "./create";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaUpdateRelationList = builder.inputRef<any>("HalfBakedIdeaUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [HalfBakedIdeaWhereUnique] }),
    set: t.field({ type: [HalfBakedIdeaWhereUnique] }),
    disconnect: t.field({ type: [HalfBakedIdeaWhereUnique] }),
    create: t.field({ type: [HalfBakedIdeaCreate] }),
  }),
});
