import { builder } from "src/builder";

import { SingularityReportCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { SingularityReportUpdateWithoutGlitchRegistry } from "./updateWithoutGlitchRegistry";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationWithoutGlitchRegistry = builder
  .inputRef<any>("SingularityReportUpdateRelationWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SingularityReportWhereUnique }),
      disconnect: t.field({ type: SingularityReportWhereUnique }),
      create: t.field({ type: SingularityReportCreateWithoutGlitchRegistry }),
      update: t.field({ type: SingularityReportUpdateWithoutGlitchRegistry }),
    }),
  });
