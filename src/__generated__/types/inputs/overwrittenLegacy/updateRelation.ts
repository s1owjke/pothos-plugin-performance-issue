import { builder } from "src/builder";

import { OverwrittenLegacyCreate } from "./create";
import { OverwrittenLegacyUpdate } from "./update";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyUpdateRelation = builder.inputRef<any>("OverwrittenLegacyUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: OverwrittenLegacyWhereUnique }),
    disconnect: t.field({ type: OverwrittenLegacyWhereUnique }),
    create: t.field({ type: OverwrittenLegacyCreate }),
    update: t.field({ type: OverwrittenLegacyUpdate }),
  }),
});
