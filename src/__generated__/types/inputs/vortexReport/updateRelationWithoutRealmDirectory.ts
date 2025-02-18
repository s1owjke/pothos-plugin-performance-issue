import { builder } from "src/builder";

import { VortexReportCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { VortexReportUpdateWithoutRealmDirectory } from "./updateWithoutRealmDirectory";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutRealmDirectory = builder.inputRef<any>("VortexReportUpdateRelationWithoutRealmDirectory").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    disconnect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreateWithoutRealmDirectory }),
    update: t.field({ type: VortexReportUpdateWithoutRealmDirectory }),
  }),
});
