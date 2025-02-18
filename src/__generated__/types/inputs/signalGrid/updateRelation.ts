import { builder } from "src/builder";

import { SignalGridCreate } from "./create";
import { SignalGridUpdate } from "./update";
import { SignalGridWhereUnique } from "./whereUnique";

export const SignalGridUpdateRelation = builder.inputRef<any>("SignalGridUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SignalGridWhereUnique }),
    disconnect: t.field({ type: SignalGridWhereUnique }),
    create: t.field({ type: SignalGridCreate }),
    update: t.field({ type: SignalGridUpdate }),
  }),
});
