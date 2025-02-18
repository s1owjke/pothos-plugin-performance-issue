import { builder } from "src/builder";

import { OverwrittenLegacyCreate } from "./create";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyCreateRelation = builder.inputRef<any>("OverwrittenLegacyCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: OverwrittenLegacyWhereUnique }),
    create: t.field({ type: OverwrittenLegacyCreate }),
  }),
});
