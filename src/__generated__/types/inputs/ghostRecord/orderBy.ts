import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { ArtificialPotatoOrderBy } from "../artificialPotato/orderBy";
import { ClassifiedSillinessOrderBy } from "../classifiedSilliness/orderBy";
import { PortalIndexOrderBy } from "../portalIndex/orderBy";
import { SchrodingerUserOrderBy } from "../schrodingerUser/orderBy";
import { SymphonyChartOrderBy } from "../symphonyChart/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";

export const GhostRecordOrderBy = builder.inputRef<any>("GhostRecordOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    artificialPotato: t.field({ type: ArtificialPotatoOrderBy, required: false }),
    classifiedSilliness: t.field({ type: ClassifiedSillinessOrderBy, required: false }),
    portalIndex: t.field({ type: PortalIndexOrderBy, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserOrderBy, required: false }),
    symphonyChart: t.field({ type: SymphonyChartOrderBy, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
  }),
});
