import { builder } from "src/builder";

import { SignalGridCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { SignalGridWhereUnique } from "./whereUnique";

export const SignalGridCreateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("SignalGridCreateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SignalGridWhereUnique] }),
      create: t.field({ type: [SignalGridCreateWithoutSchrodingerUser] }),
    }),
  });
