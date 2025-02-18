import { builder } from "src/builder";

import { SignalGridCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { SignalGridWhereUnique } from "./whereUnique";

export const SignalGridUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("SignalGridUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SignalGridWhereUnique] }),
      set: t.field({ type: [SignalGridWhereUnique] }),
      disconnect: t.field({ type: [SignalGridWhereUnique] }),
      create: t.field({ type: [SignalGridCreateWithoutSchrodingerUser] }),
    }),
  });
