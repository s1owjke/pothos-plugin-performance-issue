import { builder } from "src/builder";

import { OverwrittenLegacyCreate } from "./create";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyUpdateRelationList = builder.inputRef<any>("OverwrittenLegacyUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
    set: t.field({ type: [OverwrittenLegacyWhereUnique] }),
    disconnect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
    create: t.field({ type: [OverwrittenLegacyCreate] }),
  }),
});
