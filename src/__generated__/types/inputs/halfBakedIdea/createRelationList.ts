import { builder } from "src/builder";

import { HalfBakedIdeaCreate } from "./create";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaCreateRelationList = builder.inputRef<any>("HalfBakedIdeaCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [HalfBakedIdeaWhereUnique] }),
    create: t.field({ type: [HalfBakedIdeaCreate] }),
  }),
});
