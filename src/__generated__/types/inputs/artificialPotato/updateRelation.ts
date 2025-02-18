import { builder } from "src/builder";

import { ArtificialPotatoCreate } from "./create";
import { ArtificialPotatoUpdate } from "./update";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelation = builder.inputRef<any>("ArtificialPotatoUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ArtificialPotatoWhereUnique }),
    disconnect: t.field({ type: ArtificialPotatoWhereUnique }),
    create: t.field({ type: ArtificialPotatoCreate }),
    update: t.field({ type: ArtificialPotatoUpdate }),
  }),
});
