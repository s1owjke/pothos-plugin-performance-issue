import { builder } from "src/builder";

export const PortalIndexWhereUnique = builder.inputRef<any>("PortalIndexWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    ghostRecordId: t.field({ type: "ID", required: false }),
  }),
});
