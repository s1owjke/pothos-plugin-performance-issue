import { builder } from "src/builder";

import { HalfBakedIdeaCreate } from "./create";
import { HalfBakedIdeaUpdate } from "./update";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaUpdateRelation = builder.inputRef<any>("HalfBakedIdeaUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: HalfBakedIdeaWhereUnique }),
    disconnect: t.field({ type: HalfBakedIdeaWhereUnique }),
    create: t.field({ type: HalfBakedIdeaCreate }),
    update: t.field({ type: HalfBakedIdeaUpdate }),
  }),
});
