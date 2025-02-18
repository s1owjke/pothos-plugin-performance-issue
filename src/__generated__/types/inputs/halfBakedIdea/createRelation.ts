import { builder } from "src/builder";

import { HalfBakedIdeaCreate } from "./create";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaCreateRelation = builder.inputRef<any>("HalfBakedIdeaCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: HalfBakedIdeaWhereUnique }),
    create: t.field({ type: HalfBakedIdeaCreate }),
  }),
});
