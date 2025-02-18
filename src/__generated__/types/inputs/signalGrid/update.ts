import { builder } from "src/builder";

import { SchrodingerUserUpdateRelationWithoutSignalGrid } from "../schrodingerUser/updateRelationWithoutSignalGrid";

export const SignalGridUpdate = builder.inputRef<any>("SignalGridUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutSignalGrid,
      required: false,
    }),
  }),
});
