import { builder } from "src/builder";

import { ArtificialPotatoWhere } from "../artificialPotato/where";
import { DateTimeFilter } from "../dateTimeFilter";
import { GlitchRegistryWhereRelationList } from "../glitchRegistry/whereRelationList";
import { IdFilter } from "../idFilter";
import { PrematureOptimizationWhere } from "../prematureOptimization/where";

export const OverwrittenLegacyWhere = builder.inputRef<any>("OverwrittenLegacyWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    artificialPotato: t.field({ type: ArtificialPotatoWhere, required: false }),
    artificialPotatoId: t.field({ type: IdFilter, required: false }),
    glitchRegistries: t.field({ type: GlitchRegistryWhereRelationList, required: false }),
    prematureOptimization: t.field({ type: PrematureOptimizationWhere, required: false }),
    prematureOptimizationId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [OverwrittenLegacyWhere], required: false }),
    OR: t.field({ type: [OverwrittenLegacyWhere], required: false }),
    NOT: t.field({ type: [OverwrittenLegacyWhere], required: false }),
  }),
});
