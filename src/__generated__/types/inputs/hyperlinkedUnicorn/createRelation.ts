import { builder } from "src/builder";

import { HyperlinkedUnicornCreate } from "./create";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornCreateRelation = builder.inputRef<any>("HyperlinkedUnicornCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: HyperlinkedUnicornWhereUnique }),
    create: t.field({ type: HyperlinkedUnicornCreate }),
  }),
});
