import { builder } from "src/builder";

import { HyperlinkedUnicornCreate } from "./create";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornUpdateRelationList = builder.inputRef<any>("HyperlinkedUnicornUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
    set: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
    disconnect: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
    create: t.field({ type: [HyperlinkedUnicornCreate] }),
  }),
});
