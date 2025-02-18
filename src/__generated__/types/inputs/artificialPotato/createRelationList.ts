import { builder } from "src/builder";

import { ArtificialPotatoCreate } from "./create";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationList = builder.inputRef<any>("ArtificialPotatoCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
    create: t.field({ type: [ArtificialPotatoCreate] }),
  }),
});
