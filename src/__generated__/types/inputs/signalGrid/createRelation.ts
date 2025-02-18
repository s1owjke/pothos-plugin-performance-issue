import { builder } from "src/builder";

import { SignalGridCreate } from "./create";
import { SignalGridWhereUnique } from "./whereUnique";

export const SignalGridCreateRelation = builder.inputRef<any>("SignalGridCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SignalGridWhereUnique }),
    create: t.field({ type: SignalGridCreate }),
  }),
});
