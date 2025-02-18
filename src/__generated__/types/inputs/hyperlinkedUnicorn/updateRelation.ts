import { builder } from "src/builder";

import { HyperlinkedUnicornCreate } from "./create";
import { HyperlinkedUnicornUpdate } from "./update";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornUpdateRelation = builder.inputRef<any>("HyperlinkedUnicornUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: HyperlinkedUnicornWhereUnique }),
    disconnect: t.field({ type: HyperlinkedUnicornWhereUnique }),
    create: t.field({ type: HyperlinkedUnicornCreate }),
    update: t.field({ type: HyperlinkedUnicornUpdate }),
  }),
});
