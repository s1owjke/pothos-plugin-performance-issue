import { builder } from "src/builder";

import { ArtificialPotatoCreate } from "./create";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelation = builder.inputRef<any>("ArtificialPotatoCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ArtificialPotatoWhereUnique }),
    create: t.field({ type: ArtificialPotatoCreate }),
  }),
});
