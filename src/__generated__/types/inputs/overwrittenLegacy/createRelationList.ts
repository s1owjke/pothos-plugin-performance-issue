import { builder } from "src/builder";

import { OverwrittenLegacyCreate } from "./create";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyCreateRelationList = builder.inputRef<any>("OverwrittenLegacyCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
    create: t.field({ type: [OverwrittenLegacyCreate] }),
  }),
});
