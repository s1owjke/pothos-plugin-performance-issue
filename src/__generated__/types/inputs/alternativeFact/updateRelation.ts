import { builder } from "src/builder";

import { AlternativeFactCreate } from "./create";
import { AlternativeFactUpdate } from "./update";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelation = builder.inputRef<any>("AlternativeFactUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: AlternativeFactWhereUnique }),
    disconnect: t.field({ type: AlternativeFactWhereUnique }),
    create: t.field({ type: AlternativeFactCreate }),
    update: t.field({ type: AlternativeFactUpdate }),
  }),
});
