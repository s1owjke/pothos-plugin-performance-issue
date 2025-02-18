import { builder } from "src/builder";

import { SignalGridCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { SignalGridWhereUnique } from "./whereUnique";

export const SignalGridCreateRelationWithoutSchrodingerUser = builder.inputRef<any>("SignalGridCreateRelationWithoutSchrodingerUser").implement({
  fields: (t) => ({
    connect: t.field({ type: SignalGridWhereUnique }),
    create: t.field({ type: SignalGridCreateWithoutSchrodingerUser }),
  }),
});
