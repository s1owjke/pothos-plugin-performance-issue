import { builder } from "src/builder";

import { SignalGridCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { SignalGridUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { SignalGridWhereUnique } from "./whereUnique";

export const SignalGridUpdateRelationWithoutSchrodingerUser = builder.inputRef<any>("SignalGridUpdateRelationWithoutSchrodingerUser").implement({
  fields: (t) => ({
    connect: t.field({ type: SignalGridWhereUnique }),
    disconnect: t.field({ type: SignalGridWhereUnique }),
    create: t.field({ type: SignalGridCreateWithoutSchrodingerUser }),
    update: t.field({ type: SignalGridUpdateWithoutSchrodingerUser }),
  }),
});
