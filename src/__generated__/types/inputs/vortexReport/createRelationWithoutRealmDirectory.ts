import { builder } from "src/builder";

import { VortexReportCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationWithoutRealmDirectory = builder.inputRef<any>("VortexReportCreateRelationWithoutRealmDirectory").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreateWithoutRealmDirectory }),
  }),
});
