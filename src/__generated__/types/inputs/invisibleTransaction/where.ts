import { builder } from "src/builder";

import { ArtificialPotatoWhere } from "../artificialPotato/where";
import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";

export const InvisibleTransactionWhere = builder.inputRef<any>("InvisibleTransactionWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    artificialPotato: t.field({ type: ArtificialPotatoWhere, required: false }),
    artificialPotatoId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [InvisibleTransactionWhere], required: false }),
    OR: t.field({ type: [InvisibleTransactionWhere], required: false }),
    NOT: t.field({ type: [InvisibleTransactionWhere], required: false }),
  }),
});
