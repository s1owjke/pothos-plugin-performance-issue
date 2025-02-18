import { builder } from "src/builder";

import { ArtificialPotatoCreate } from "./create";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationList = builder.inputRef<any>("ArtificialPotatoUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
    set: t.field({ type: [ArtificialPotatoWhereUnique] }),
    disconnect: t.field({ type: [ArtificialPotatoWhereUnique] }),
    create: t.field({ type: [ArtificialPotatoCreate] }),
  }),
});
