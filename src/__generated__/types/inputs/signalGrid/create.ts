import { builder } from "src/builder";

import { SchrodingerUserCreateRelationWithoutSignalGrid } from "../schrodingerUser/createRelationWithoutSignalGrid";

export const SignalGridCreate = builder.inputRef<any>("SignalGridCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutSignalGrid,
      required: true,
    }),
  }),
});
