import { builder } from "src/builder";

import { ArtificialPotatoWhere } from "../artificialPotato/where";
import { DateTimeFilter } from "../dateTimeFilter";
import { GlitchRegistryWhereRelationList } from "../glitchRegistry/whereRelationList";
import { IdFilter } from "../idFilter";
import { SchrodingerUserWhere } from "../schrodingerUser/where";

export const EchoChamberWhere = builder.inputRef<any>("EchoChamberWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    artificialPotatoId: t.field({ type: IdFilter, required: false }),
    glitchRegistries: t.field({ type: GlitchRegistryWhereRelationList, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    schrodingerUserId: t.field({ type: IdFilter, required: false }),
    verifier: t.field({ type: ArtificialPotatoWhere, required: false }),
    AND: t.field({ type: [EchoChamberWhere], required: false }),
    OR: t.field({ type: [EchoChamberWhere], required: false }),
    NOT: t.field({ type: [EchoChamberWhere], required: false }),
  }),
});
