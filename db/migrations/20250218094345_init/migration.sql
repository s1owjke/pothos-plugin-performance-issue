-- CreateTable
CREATE TABLE `BananaQueue` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `singularityReportId` VARCHAR(191) NOT NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GhostRecord` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `thresholdManifestId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnfinishedSymphony` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QuantumInvoice` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HalfBakedIdea` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `symphonyChartId` VARCHAR(191) NOT NULL,
    `thresholdManifestId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `HalfBakedIdea_symphonyChartId_thresholdManifestId_key`(`symphonyChartId`, `thresholdManifestId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TimeTravelLog` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OverdueRevolution` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EndlessLoop` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PocketUniverse` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MetaphysicalReceipt` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `thresholdManifestId` VARCHAR(191) NULL,

    UNIQUE INDEX `MetaphysicalReceipt_thresholdManifestId_key`(`thresholdManifestId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InfiniteUndo` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlternativeFact` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `glitchRegistryId` VARCHAR(191) NULL,
    `singularityReportId` VARCHAR(191) NOT NULL,
    `symphonyChartId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AlternativeFact_singularityReportId_key`(`singularityReportId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GloriousMistake` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `alternativeFactId` VARCHAR(191) NOT NULL,
    `thresholdManifestId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnassignedDestiny` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ForbiddenCheeseburger` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `thresholdManifestId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StaticWhisper` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `forbiddenCheeseburgerId` VARCHAR(191) NOT NULL,
    `thresholdManifestId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParallelReality` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SymphonyChart` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `ghostRecordId` VARCHAR(191) NULL,
    `schrodingerUserId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    UNIQUE INDEX `SymphonyChart_ghostRecordId_key`(`ghostRecordId`),
    UNIQUE INDEX `SymphonyChart_schrodingerUserId_key`(`schrodingerUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CosmicDebris` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SecretSauce` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HyperlinkedUnicorn` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RecursiveRecursion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ThoughtCache` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `schrodingerUserId` VARCHAR(191) NOT NULL,
    `symphonyChartId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ThresholdManifest` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `cosmicDebrisId` VARCHAR(191) NULL,
    `ghostRecordId` VARCHAR(191) NULL,
    `hypotheticalRevenueId` VARCHAR(191) NULL,
    `infiniteUndoId` VARCHAR(191) NULL,
    `realmDirectoryId` VARCHAR(191) NULL,
    `suspiciousTimestampId` VARCHAR(191) NULL,
    `timeTravelLogId` VARCHAR(191) NULL,
    `unnecessaryPermissionId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,
    `vortexReportId` VARCHAR(191) NULL,

    UNIQUE INDEX `ThresholdManifest_cosmicDebrisId_key`(`cosmicDebrisId`),
    UNIQUE INDEX `ThresholdManifest_ghostRecordId_key`(`ghostRecordId`),
    UNIQUE INDEX `ThresholdManifest_infiniteUndoId_key`(`infiniteUndoId`),
    UNIQUE INDEX `ThresholdManifest_realmDirectoryId_key`(`realmDirectoryId`),
    UNIQUE INDEX `ThresholdManifest_suspiciousTimestampId_key`(`suspiciousTimestampId`),
    UNIQUE INDEX `ThresholdManifest_timeTravelLogId_key`(`timeTravelLogId`),
    UNIQUE INDEX `ThresholdManifest_unnecessaryPermissionId_key`(`unnecessaryPermissionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GravityOverride` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `dimensionalBackupId` VARCHAR(191) NULL,
    `imaginaryFriendId` VARCHAR(191) NULL,
    `reverseTransactionId` VARCHAR(191) NULL,
    `thresholdManifestId` VARCHAR(191) NOT NULL,
    `unassignedDestinyId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    UNIQUE INDEX `GravityOverride_unassignedDestinyId_key`(`unassignedDestinyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DimensionalBackup` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `schrodingerUserId` VARCHAR(191) NOT NULL,
    `thresholdManifestId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DimensionalBackup_schrodingerUserId_key`(`schrodingerUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnnecessaryPermission` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RejectedTheory` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `ghostRecordId` VARCHAR(191) NULL,
    `parentRejectedTheoryId` VARCHAR(191) NULL,
    `thresholdManifestId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnstableFrequency` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PendingDisaster` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `emotionalSupportTableId` VARCHAR(191) NULL,
    `glitchRegistryId` VARCHAR(191) NULL,
    `thresholdManifestId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SingularityReport` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InterdimensionalReceipt` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `schrodingerUserId` VARCHAR(191) NOT NULL,
    `singularityReportId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `InterdimensionalReceipt_singularityReportId_schrodingerUserI_key`(`singularityReportId`, `schrodingerUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RedundantDuplication` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SignalGrid` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `schrodingerUserId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SignalGrid_schrodingerUserId_key`(`schrodingerUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PortalIndex` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `ghostRecordId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    UNIQUE INDEX `PortalIndex_ghostRecordId_key`(`ghostRecordId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RealmDirectory` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoomedExperiment` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MissingContext` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,
    `portalIndexId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnderappreciatedComment` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SentientMetadata` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpontaneousCombustion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NULL,
    `missingContextId` VARCHAR(191) NULL,
    `sentientMetadataId` VARCHAR(191) NULL,
    `symphonyChartId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ConspiracyDraft` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `glitchRegistryId` VARCHAR(191) NULL,
    `hypotheticalRevenueId` VARCHAR(191) NULL,
    `thresholdManifestId` VARCHAR(191) NULL,
    `vortexReportId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnfinishedPrototype` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `classifiedSillinessId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VortexReport` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `cosmicDebrisId` VARCHAR(191) NULL,
    `ghostRecordId` VARCHAR(191) NULL,
    `hypotheticalRevenueId` VARCHAR(191) NULL,
    `infiniteUndoId` VARCHAR(191) NULL,
    `realmDirectoryId` VARCHAR(191) NULL,
    `suspiciousTimestampId` VARCHAR(191) NULL,
    `timeTravelLogId` VARCHAR(191) NULL,
    `unnecessaryPermissionId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    UNIQUE INDEX `VortexReport_cosmicDebrisId_key`(`cosmicDebrisId`),
    UNIQUE INDEX `VortexReport_infiniteUndoId_key`(`infiniteUndoId`),
    UNIQUE INDEX `VortexReport_realmDirectoryId_key`(`realmDirectoryId`),
    UNIQUE INDEX `VortexReport_suspiciousTimestampId_key`(`suspiciousTimestampId`),
    UNIQUE INDEX `VortexReport_timeTravelLogId_key`(`timeTravelLogId`),
    UNIQUE INDEX `VortexReport_unnecessaryPermissionId_key`(`unnecessaryPermissionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HypotheticalRevenue` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `cosmicDebrisId` VARCHAR(191) NULL,
    `ghostRecordId` VARCHAR(191) NULL,
    `infiniteUndoId` VARCHAR(191) NULL,
    `realmDirectoryId` VARCHAR(191) NULL,
    `suspiciousTimestampId` VARCHAR(191) NULL,
    `timeTravelLogId` VARCHAR(191) NULL,
    `unnecessaryPermissionId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    UNIQUE INDEX `HypotheticalRevenue_cosmicDebrisId_key`(`cosmicDebrisId`),
    UNIQUE INDEX `HypotheticalRevenue_infiniteUndoId_key`(`infiniteUndoId`),
    UNIQUE INDEX `HypotheticalRevenue_realmDirectoryId_key`(`realmDirectoryId`),
    UNIQUE INDEX `HypotheticalRevenue_suspiciousTimestampId_key`(`suspiciousTimestampId`),
    UNIQUE INDEX `HypotheticalRevenue_timeTravelLogId_key`(`timeTravelLogId`),
    UNIQUE INDEX `HypotheticalRevenue_unnecessaryPermissionId_key`(`unnecessaryPermissionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LostAndNeverFound` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `hypotheticalRevenueId` VARCHAR(191) NOT NULL,
    `schrodingerUserId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `LostAndNeverFound_schrodingerUserId_key`(`schrodingerUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReverseTransaction` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `imaginaryFriendId` VARCHAR(191) NULL,
    `unassignedDestinyId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,
    `unstableFrequencyId2` VARCHAR(191) NULL,
    `vortexReportId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ReverseTransaction_unassignedDestinyId_key`(`unassignedDestinyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeleportationFailure` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `schrodingerUserId` VARCHAR(191) NOT NULL,
    `vortexReportId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TeleportationFailure_schrodingerUserId_key`(`schrodingerUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OverwrittenLegacy` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `artificialPotatoId` VARCHAR(191) NOT NULL,
    `prematureOptimizationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrematureOptimization` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InfiniteScrollLog` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `schrodingerUserId` VARCHAR(191) NOT NULL,
    `thresholdManifestId` VARCHAR(191) NULL,

    UNIQUE INDEX `InfiniteScrollLog_schrodingerUserId_key`(`schrodingerUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClassifiedSilliness` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `ghostRecordId` VARCHAR(191) NULL,
    `portalIndexId` VARCHAR(191) NULL,
    `symphonyChartId` VARCHAR(191) NOT NULL,
    `thresholdManifestId` VARCHAR(191) NOT NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    UNIQUE INDEX `ClassifiedSilliness_ghostRecordId_key`(`ghostRecordId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImaginaryFriend` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `hypotheticalRevenueId` VARCHAR(191) NOT NULL,
    `lostAndNeverFoundId` VARCHAR(191) NULL,
    `unassignedDestinyId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,
    `unstableFrequencyId2` VARCHAR(191) NULL,

    UNIQUE INDEX `ImaginaryFriend_unassignedDestinyId_key`(`unassignedDestinyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DebuggingHistory` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `gravityOverrideId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WormholeRental` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuspiciousTimestamp` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmotionalSupportTable` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `infiniteScrollLogId` VARCHAR(191) NOT NULL,
    `singularityReportId` VARCHAR(191) NOT NULL,
    `symphonyChartId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EmotionalSupportTable_singularityReportId_key`(`singularityReportId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SchrodingerUser` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `ghostRecordId` VARCHAR(191) NULL,

    UNIQUE INDEX `SchrodingerUser_ghostRecordId_key`(`ghostRecordId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GlitchRegistry` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `overwrittenLegacyId` VARCHAR(191) NULL,
    `singularityReportId` VARCHAR(191) NOT NULL,
    `symphonyChartId` VARCHAR(191) NOT NULL,
    `verifierStaffId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `GlitchRegistry_singularityReportId_key`(`singularityReportId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArtificialPotato` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `ghostRecordId` VARCHAR(191) NULL,
    `unstableFrequencyId` VARCHAR(191) NULL,

    UNIQUE INDEX `ArtificialPotato_ghostRecordId_key`(`ghostRecordId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InvisibleTransaction` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `artificialPotatoId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `InvisibleTransaction_artificialPotatoId_key`(`artificialPotatoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EchoChamber` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `artificialPotatoId` VARCHAR(191) NOT NULL,
    `schrodingerUserId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EchoChamber_schrodingerUserId_key`(`schrodingerUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_OverdueRevolutionToPocketUniverse` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_OverdueRevolutionToPocketUniverse_AB_unique`(`A`, `B`),
    INDEX `_OverdueRevolutionToPocketUniverse_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EndlessLoopToPocketUniverse` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EndlessLoopToPocketUniverse_AB_unique`(`A`, `B`),
    INDEX `_EndlessLoopToPocketUniverse_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SymphonyChartToTeleportationFailure` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SymphonyChartToTeleportationFailure_AB_unique`(`A`, `B`),
    INDEX `_SymphonyChartToTeleportationFailure_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HyperlinkedUnicornToRecursiveRecursion` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_HyperlinkedUnicornToRecursiveRecursion_AB_unique`(`A`, `B`),
    INDEX `_HyperlinkedUnicornToRecursiveRecursion_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RecursiveRecursionToSecretSauce` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_RecursiveRecursionToSecretSauce_AB_unique`(`A`, `B`),
    INDEX `_RecursiveRecursionToSecretSauce_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GravityOverrideToSchrodingerUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GravityOverrideToSchrodingerUser_AB_unique`(`A`, `B`),
    INDEX `_GravityOverrideToSchrodingerUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DimensionalBackupToPortalIndex` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_DimensionalBackupToPortalIndex_AB_unique`(`A`, `B`),
    INDEX `_DimensionalBackupToPortalIndex_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PortalIndexToRejectedTheory` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PortalIndexToRejectedTheory_AB_unique`(`A`, `B`),
    INDEX `_PortalIndexToRejectedTheory_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PortalIndexToTeleportationFailure` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PortalIndexToTeleportationFailure_AB_unique`(`A`, `B`),
    INDEX `_PortalIndexToTeleportationFailure_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DoomedExperimentToSpontaneousCombustion` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_DoomedExperimentToSpontaneousCombustion_AB_unique`(`A`, `B`),
    INDEX `_DoomedExperimentToSpontaneousCombustion_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SpontaneousCombustionToUnderappreciatedComment` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SpontaneousCombustionToUnderappreciatedComment_AB_unique`(`A`, `B`),
    INDEX `_SpontaneousCombustionToUnderappreciatedComment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ReverseTransactionToSchrodingerUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ReverseTransactionToSchrodingerUser_AB_unique`(`A`, `B`),
    INDEX `_ReverseTransactionToSchrodingerUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TeleportationFailureToThresholdManifest` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TeleportationFailureToThresholdManifest_AB_unique`(`A`, `B`),
    INDEX `_TeleportationFailureToThresholdManifest_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ImaginaryFriendToSchrodingerUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ImaginaryFriendToSchrodingerUser_AB_unique`(`A`, `B`),
    INDEX `_ImaginaryFriendToSchrodingerUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GlitchRegistryToThresholdManifest` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GlitchRegistryToThresholdManifest_AB_unique`(`A`, `B`),
    INDEX `_GlitchRegistryToThresholdManifest_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BananaQueue` ADD CONSTRAINT `BananaQueue_singularityReportId_fkey` FOREIGN KEY (`singularityReportId`) REFERENCES `SingularityReport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BananaQueue` ADD CONSTRAINT `BananaQueue_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GhostRecord` ADD CONSTRAINT `GhostRecord_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnfinishedSymphony` ADD CONSTRAINT `UnfinishedSymphony_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `QuantumInvoice` ADD CONSTRAINT `QuantumInvoice_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HalfBakedIdea` ADD CONSTRAINT `HalfBakedIdea_symphonyChartId_fkey` FOREIGN KEY (`symphonyChartId`) REFERENCES `SymphonyChart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HalfBakedIdea` ADD CONSTRAINT `HalfBakedIdea_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TimeTravelLog` ADD CONSTRAINT `TimeTravelLog_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OverdueRevolution` ADD CONSTRAINT `OverdueRevolution_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EndlessLoop` ADD CONSTRAINT `EndlessLoop_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PocketUniverse` ADD CONSTRAINT `PocketUniverse_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MetaphysicalReceipt` ADD CONSTRAINT `MetaphysicalReceipt_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlternativeFact` ADD CONSTRAINT `AlternativeFact_glitchRegistryId_fkey` FOREIGN KEY (`glitchRegistryId`) REFERENCES `GlitchRegistry`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlternativeFact` ADD CONSTRAINT `AlternativeFact_singularityReportId_fkey` FOREIGN KEY (`singularityReportId`) REFERENCES `SingularityReport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlternativeFact` ADD CONSTRAINT `AlternativeFact_symphonyChartId_fkey` FOREIGN KEY (`symphonyChartId`) REFERENCES `SymphonyChart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GloriousMistake` ADD CONSTRAINT `GloriousMistake_alternativeFactId_fkey` FOREIGN KEY (`alternativeFactId`) REFERENCES `AlternativeFact`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GloriousMistake` ADD CONSTRAINT `GloriousMistake_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ForbiddenCheeseburger` ADD CONSTRAINT `ForbiddenCheeseburger_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StaticWhisper` ADD CONSTRAINT `StaticWhisper_forbiddenCheeseburgerId_fkey` FOREIGN KEY (`forbiddenCheeseburgerId`) REFERENCES `ForbiddenCheeseburger`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StaticWhisper` ADD CONSTRAINT `StaticWhisper_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SymphonyChart` ADD CONSTRAINT `SymphonyChart_ghostRecordId_fkey` FOREIGN KEY (`ghostRecordId`) REFERENCES `GhostRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SymphonyChart` ADD CONSTRAINT `SymphonyChart_schrodingerUserId_fkey` FOREIGN KEY (`schrodingerUserId`) REFERENCES `SchrodingerUser`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SymphonyChart` ADD CONSTRAINT `SymphonyChart_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CosmicDebris` ADD CONSTRAINT `CosmicDebris_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SecretSauce` ADD CONSTRAINT `SecretSauce_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HyperlinkedUnicorn` ADD CONSTRAINT `HyperlinkedUnicorn_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RecursiveRecursion` ADD CONSTRAINT `RecursiveRecursion_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThoughtCache` ADD CONSTRAINT `ThoughtCache_schrodingerUserId_fkey` FOREIGN KEY (`schrodingerUserId`) REFERENCES `SchrodingerUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThoughtCache` ADD CONSTRAINT `ThoughtCache_symphonyChartId_fkey` FOREIGN KEY (`symphonyChartId`) REFERENCES `SymphonyChart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThresholdManifest` ADD CONSTRAINT `ThresholdManifest_cosmicDebrisId_fkey` FOREIGN KEY (`cosmicDebrisId`) REFERENCES `CosmicDebris`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThresholdManifest` ADD CONSTRAINT `ThresholdManifest_hypotheticalRevenueId_fkey` FOREIGN KEY (`hypotheticalRevenueId`) REFERENCES `HypotheticalRevenue`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThresholdManifest` ADD CONSTRAINT `ThresholdManifest_infiniteUndoId_fkey` FOREIGN KEY (`infiniteUndoId`) REFERENCES `InfiniteUndo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThresholdManifest` ADD CONSTRAINT `ThresholdManifest_realmDirectoryId_fkey` FOREIGN KEY (`realmDirectoryId`) REFERENCES `RealmDirectory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThresholdManifest` ADD CONSTRAINT `ThresholdManifest_suspiciousTimestampId_fkey` FOREIGN KEY (`suspiciousTimestampId`) REFERENCES `SuspiciousTimestamp`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThresholdManifest` ADD CONSTRAINT `ThresholdManifest_timeTravelLogId_fkey` FOREIGN KEY (`timeTravelLogId`) REFERENCES `TimeTravelLog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThresholdManifest` ADD CONSTRAINT `ThresholdManifest_unnecessaryPermissionId_fkey` FOREIGN KEY (`unnecessaryPermissionId`) REFERENCES `UnnecessaryPermission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThresholdManifest` ADD CONSTRAINT `ThresholdManifest_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThresholdManifest` ADD CONSTRAINT `ThresholdManifest_vortexReportId_fkey` FOREIGN KEY (`vortexReportId`) REFERENCES `VortexReport`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GravityOverride` ADD CONSTRAINT `GravityOverride_dimensionalBackupId_fkey` FOREIGN KEY (`dimensionalBackupId`) REFERENCES `DimensionalBackup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GravityOverride` ADD CONSTRAINT `GravityOverride_imaginaryFriendId_fkey` FOREIGN KEY (`imaginaryFriendId`) REFERENCES `ImaginaryFriend`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GravityOverride` ADD CONSTRAINT `GravityOverride_reverseTransactionId_fkey` FOREIGN KEY (`reverseTransactionId`) REFERENCES `ReverseTransaction`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GravityOverride` ADD CONSTRAINT `GravityOverride_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GravityOverride` ADD CONSTRAINT `GravityOverride_unassignedDestinyId_fkey` FOREIGN KEY (`unassignedDestinyId`) REFERENCES `UnassignedDestiny`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GravityOverride` ADD CONSTRAINT `GravityOverride_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DimensionalBackup` ADD CONSTRAINT `DimensionalBackup_schrodingerUserId_fkey` FOREIGN KEY (`schrodingerUserId`) REFERENCES `SchrodingerUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DimensionalBackup` ADD CONSTRAINT `DimensionalBackup_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RejectedTheory` ADD CONSTRAINT `RejectedTheory_ghostRecordId_fkey` FOREIGN KEY (`ghostRecordId`) REFERENCES `GhostRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RejectedTheory` ADD CONSTRAINT `RejectedTheory_parentRejectedTheoryId_fkey` FOREIGN KEY (`parentRejectedTheoryId`) REFERENCES `RejectedTheory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RejectedTheory` ADD CONSTRAINT `RejectedTheory_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PendingDisaster` ADD CONSTRAINT `PendingDisaster_emotionalSupportTableId_fkey` FOREIGN KEY (`emotionalSupportTableId`) REFERENCES `EmotionalSupportTable`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PendingDisaster` ADD CONSTRAINT `PendingDisaster_glitchRegistryId_fkey` FOREIGN KEY (`glitchRegistryId`) REFERENCES `GlitchRegistry`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PendingDisaster` ADD CONSTRAINT `PendingDisaster_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PendingDisaster` ADD CONSTRAINT `PendingDisaster_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InterdimensionalReceipt` ADD CONSTRAINT `InterdimensionalReceipt_schrodingerUserId_fkey` FOREIGN KEY (`schrodingerUserId`) REFERENCES `SchrodingerUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InterdimensionalReceipt` ADD CONSTRAINT `InterdimensionalReceipt_singularityReportId_fkey` FOREIGN KEY (`singularityReportId`) REFERENCES `SingularityReport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SignalGrid` ADD CONSTRAINT `SignalGrid_schrodingerUserId_fkey` FOREIGN KEY (`schrodingerUserId`) REFERENCES `SchrodingerUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortalIndex` ADD CONSTRAINT `PortalIndex_ghostRecordId_fkey` FOREIGN KEY (`ghostRecordId`) REFERENCES `GhostRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortalIndex` ADD CONSTRAINT `PortalIndex_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RealmDirectory` ADD CONSTRAINT `RealmDirectory_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoomedExperiment` ADD CONSTRAINT `DoomedExperiment_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MissingContext` ADD CONSTRAINT `MissingContext_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MissingContext` ADD CONSTRAINT `MissingContext_portalIndexId_fkey` FOREIGN KEY (`portalIndexId`) REFERENCES `PortalIndex`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnderappreciatedComment` ADD CONSTRAINT `UnderappreciatedComment_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SentientMetadata` ADD CONSTRAINT `SentientMetadata_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpontaneousCombustion` ADD CONSTRAINT `SpontaneousCombustion_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpontaneousCombustion` ADD CONSTRAINT `SpontaneousCombustion_missingContextId_fkey` FOREIGN KEY (`missingContextId`) REFERENCES `MissingContext`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpontaneousCombustion` ADD CONSTRAINT `SpontaneousCombustion_sentientMetadataId_fkey` FOREIGN KEY (`sentientMetadataId`) REFERENCES `SentientMetadata`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConspiracyDraft` ADD CONSTRAINT `ConspiracyDraft_glitchRegistryId_fkey` FOREIGN KEY (`glitchRegistryId`) REFERENCES `GlitchRegistry`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConspiracyDraft` ADD CONSTRAINT `ConspiracyDraft_hypotheticalRevenueId_fkey` FOREIGN KEY (`hypotheticalRevenueId`) REFERENCES `HypotheticalRevenue`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConspiracyDraft` ADD CONSTRAINT `ConspiracyDraft_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConspiracyDraft` ADD CONSTRAINT `ConspiracyDraft_vortexReportId_fkey` FOREIGN KEY (`vortexReportId`) REFERENCES `VortexReport`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnfinishedPrototype` ADD CONSTRAINT `UnfinishedPrototype_classifiedSillinessId_fkey` FOREIGN KEY (`classifiedSillinessId`) REFERENCES `ClassifiedSilliness`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VortexReport` ADD CONSTRAINT `VortexReport_cosmicDebrisId_fkey` FOREIGN KEY (`cosmicDebrisId`) REFERENCES `CosmicDebris`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VortexReport` ADD CONSTRAINT `VortexReport_ghostRecordId_fkey` FOREIGN KEY (`ghostRecordId`) REFERENCES `GhostRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VortexReport` ADD CONSTRAINT `VortexReport_hypotheticalRevenueId_fkey` FOREIGN KEY (`hypotheticalRevenueId`) REFERENCES `HypotheticalRevenue`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VortexReport` ADD CONSTRAINT `VortexReport_infiniteUndoId_fkey` FOREIGN KEY (`infiniteUndoId`) REFERENCES `InfiniteUndo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VortexReport` ADD CONSTRAINT `VortexReport_realmDirectoryId_fkey` FOREIGN KEY (`realmDirectoryId`) REFERENCES `RealmDirectory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VortexReport` ADD CONSTRAINT `VortexReport_suspiciousTimestampId_fkey` FOREIGN KEY (`suspiciousTimestampId`) REFERENCES `SuspiciousTimestamp`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VortexReport` ADD CONSTRAINT `VortexReport_timeTravelLogId_fkey` FOREIGN KEY (`timeTravelLogId`) REFERENCES `TimeTravelLog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VortexReport` ADD CONSTRAINT `VortexReport_unnecessaryPermissionId_fkey` FOREIGN KEY (`unnecessaryPermissionId`) REFERENCES `UnnecessaryPermission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VortexReport` ADD CONSTRAINT `VortexReport_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HypotheticalRevenue` ADD CONSTRAINT `HypotheticalRevenue_cosmicDebrisId_fkey` FOREIGN KEY (`cosmicDebrisId`) REFERENCES `CosmicDebris`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HypotheticalRevenue` ADD CONSTRAINT `HypotheticalRevenue_ghostRecordId_fkey` FOREIGN KEY (`ghostRecordId`) REFERENCES `GhostRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HypotheticalRevenue` ADD CONSTRAINT `HypotheticalRevenue_infiniteUndoId_fkey` FOREIGN KEY (`infiniteUndoId`) REFERENCES `InfiniteUndo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HypotheticalRevenue` ADD CONSTRAINT `HypotheticalRevenue_realmDirectoryId_fkey` FOREIGN KEY (`realmDirectoryId`) REFERENCES `RealmDirectory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HypotheticalRevenue` ADD CONSTRAINT `HypotheticalRevenue_suspiciousTimestampId_fkey` FOREIGN KEY (`suspiciousTimestampId`) REFERENCES `SuspiciousTimestamp`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HypotheticalRevenue` ADD CONSTRAINT `HypotheticalRevenue_timeTravelLogId_fkey` FOREIGN KEY (`timeTravelLogId`) REFERENCES `TimeTravelLog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HypotheticalRevenue` ADD CONSTRAINT `HypotheticalRevenue_unnecessaryPermissionId_fkey` FOREIGN KEY (`unnecessaryPermissionId`) REFERENCES `UnnecessaryPermission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HypotheticalRevenue` ADD CONSTRAINT `HypotheticalRevenue_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LostAndNeverFound` ADD CONSTRAINT `LostAndNeverFound_hypotheticalRevenueId_fkey` FOREIGN KEY (`hypotheticalRevenueId`) REFERENCES `HypotheticalRevenue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LostAndNeverFound` ADD CONSTRAINT `LostAndNeverFound_schrodingerUserId_fkey` FOREIGN KEY (`schrodingerUserId`) REFERENCES `SchrodingerUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReverseTransaction` ADD CONSTRAINT `ReverseTransaction_imaginaryFriendId_fkey` FOREIGN KEY (`imaginaryFriendId`) REFERENCES `ImaginaryFriend`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReverseTransaction` ADD CONSTRAINT `ReverseTransaction_unassignedDestinyId_fkey` FOREIGN KEY (`unassignedDestinyId`) REFERENCES `UnassignedDestiny`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReverseTransaction` ADD CONSTRAINT `ReverseTransaction_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReverseTransaction` ADD CONSTRAINT `ReverseTransaction_unstableFrequencyId2_fkey` FOREIGN KEY (`unstableFrequencyId2`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReverseTransaction` ADD CONSTRAINT `ReverseTransaction_vortexReportId_fkey` FOREIGN KEY (`vortexReportId`) REFERENCES `VortexReport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeleportationFailure` ADD CONSTRAINT `TeleportationFailure_schrodingerUserId_fkey` FOREIGN KEY (`schrodingerUserId`) REFERENCES `SchrodingerUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeleportationFailure` ADD CONSTRAINT `TeleportationFailure_vortexReportId_fkey` FOREIGN KEY (`vortexReportId`) REFERENCES `VortexReport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OverwrittenLegacy` ADD CONSTRAINT `OverwrittenLegacy_artificialPotatoId_fkey` FOREIGN KEY (`artificialPotatoId`) REFERENCES `ArtificialPotato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OverwrittenLegacy` ADD CONSTRAINT `OverwrittenLegacy_prematureOptimizationId_fkey` FOREIGN KEY (`prematureOptimizationId`) REFERENCES `PrematureOptimization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InfiniteScrollLog` ADD CONSTRAINT `InfiniteScrollLog_schrodingerUserId_fkey` FOREIGN KEY (`schrodingerUserId`) REFERENCES `SchrodingerUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InfiniteScrollLog` ADD CONSTRAINT `InfiniteScrollLog_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassifiedSilliness` ADD CONSTRAINT `ClassifiedSilliness_ghostRecordId_fkey` FOREIGN KEY (`ghostRecordId`) REFERENCES `GhostRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassifiedSilliness` ADD CONSTRAINT `ClassifiedSilliness_portalIndexId_fkey` FOREIGN KEY (`portalIndexId`) REFERENCES `PortalIndex`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassifiedSilliness` ADD CONSTRAINT `ClassifiedSilliness_symphonyChartId_fkey` FOREIGN KEY (`symphonyChartId`) REFERENCES `SymphonyChart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassifiedSilliness` ADD CONSTRAINT `ClassifiedSilliness_thresholdManifestId_fkey` FOREIGN KEY (`thresholdManifestId`) REFERENCES `ThresholdManifest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassifiedSilliness` ADD CONSTRAINT `ClassifiedSilliness_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImaginaryFriend` ADD CONSTRAINT `ImaginaryFriend_hypotheticalRevenueId_fkey` FOREIGN KEY (`hypotheticalRevenueId`) REFERENCES `HypotheticalRevenue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImaginaryFriend` ADD CONSTRAINT `ImaginaryFriend_lostAndNeverFoundId_fkey` FOREIGN KEY (`lostAndNeverFoundId`) REFERENCES `LostAndNeverFound`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImaginaryFriend` ADD CONSTRAINT `ImaginaryFriend_unassignedDestinyId_fkey` FOREIGN KEY (`unassignedDestinyId`) REFERENCES `UnassignedDestiny`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImaginaryFriend` ADD CONSTRAINT `ImaginaryFriend_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImaginaryFriend` ADD CONSTRAINT `ImaginaryFriend_unstableFrequencyId2_fkey` FOREIGN KEY (`unstableFrequencyId2`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DebuggingHistory` ADD CONSTRAINT `DebuggingHistory_gravityOverrideId_fkey` FOREIGN KEY (`gravityOverrideId`) REFERENCES `GravityOverride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WormholeRental` ADD CONSTRAINT `WormholeRental_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmotionalSupportTable` ADD CONSTRAINT `EmotionalSupportTable_infiniteScrollLogId_fkey` FOREIGN KEY (`infiniteScrollLogId`) REFERENCES `InfiniteScrollLog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmotionalSupportTable` ADD CONSTRAINT `EmotionalSupportTable_singularityReportId_fkey` FOREIGN KEY (`singularityReportId`) REFERENCES `SingularityReport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmotionalSupportTable` ADD CONSTRAINT `EmotionalSupportTable_symphonyChartId_fkey` FOREIGN KEY (`symphonyChartId`) REFERENCES `SymphonyChart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SchrodingerUser` ADD CONSTRAINT `SchrodingerUser_ghostRecordId_fkey` FOREIGN KEY (`ghostRecordId`) REFERENCES `GhostRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GlitchRegistry` ADD CONSTRAINT `GlitchRegistry_verifierStaffId_fkey` FOREIGN KEY (`verifierStaffId`) REFERENCES `EchoChamber`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GlitchRegistry` ADD CONSTRAINT `GlitchRegistry_overwrittenLegacyId_fkey` FOREIGN KEY (`overwrittenLegacyId`) REFERENCES `OverwrittenLegacy`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GlitchRegistry` ADD CONSTRAINT `GlitchRegistry_singularityReportId_fkey` FOREIGN KEY (`singularityReportId`) REFERENCES `SingularityReport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GlitchRegistry` ADD CONSTRAINT `GlitchRegistry_symphonyChartId_fkey` FOREIGN KEY (`symphonyChartId`) REFERENCES `SymphonyChart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArtificialPotato` ADD CONSTRAINT `ArtificialPotato_ghostRecordId_fkey` FOREIGN KEY (`ghostRecordId`) REFERENCES `GhostRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArtificialPotato` ADD CONSTRAINT `ArtificialPotato_unstableFrequencyId_fkey` FOREIGN KEY (`unstableFrequencyId`) REFERENCES `UnstableFrequency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvisibleTransaction` ADD CONSTRAINT `InvisibleTransaction_artificialPotatoId_fkey` FOREIGN KEY (`artificialPotatoId`) REFERENCES `ArtificialPotato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EchoChamber` ADD CONSTRAINT `EchoChamber_schrodingerUserId_fkey` FOREIGN KEY (`schrodingerUserId`) REFERENCES `SchrodingerUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EchoChamber` ADD CONSTRAINT `EchoChamber_artificialPotatoId_fkey` FOREIGN KEY (`artificialPotatoId`) REFERENCES `ArtificialPotato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OverdueRevolutionToPocketUniverse` ADD CONSTRAINT `_OverdueRevolutionToPocketUniverse_A_fkey` FOREIGN KEY (`A`) REFERENCES `OverdueRevolution`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OverdueRevolutionToPocketUniverse` ADD CONSTRAINT `_OverdueRevolutionToPocketUniverse_B_fkey` FOREIGN KEY (`B`) REFERENCES `PocketUniverse`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EndlessLoopToPocketUniverse` ADD CONSTRAINT `_EndlessLoopToPocketUniverse_A_fkey` FOREIGN KEY (`A`) REFERENCES `EndlessLoop`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EndlessLoopToPocketUniverse` ADD CONSTRAINT `_EndlessLoopToPocketUniverse_B_fkey` FOREIGN KEY (`B`) REFERENCES `PocketUniverse`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SymphonyChartToTeleportationFailure` ADD CONSTRAINT `_SymphonyChartToTeleportationFailure_A_fkey` FOREIGN KEY (`A`) REFERENCES `SymphonyChart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SymphonyChartToTeleportationFailure` ADD CONSTRAINT `_SymphonyChartToTeleportationFailure_B_fkey` FOREIGN KEY (`B`) REFERENCES `TeleportationFailure`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HyperlinkedUnicornToRecursiveRecursion` ADD CONSTRAINT `_HyperlinkedUnicornToRecursiveRecursion_A_fkey` FOREIGN KEY (`A`) REFERENCES `HyperlinkedUnicorn`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HyperlinkedUnicornToRecursiveRecursion` ADD CONSTRAINT `_HyperlinkedUnicornToRecursiveRecursion_B_fkey` FOREIGN KEY (`B`) REFERENCES `RecursiveRecursion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RecursiveRecursionToSecretSauce` ADD CONSTRAINT `_RecursiveRecursionToSecretSauce_A_fkey` FOREIGN KEY (`A`) REFERENCES `RecursiveRecursion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RecursiveRecursionToSecretSauce` ADD CONSTRAINT `_RecursiveRecursionToSecretSauce_B_fkey` FOREIGN KEY (`B`) REFERENCES `SecretSauce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GravityOverrideToSchrodingerUser` ADD CONSTRAINT `_GravityOverrideToSchrodingerUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `GravityOverride`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GravityOverrideToSchrodingerUser` ADD CONSTRAINT `_GravityOverrideToSchrodingerUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `SchrodingerUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DimensionalBackupToPortalIndex` ADD CONSTRAINT `_DimensionalBackupToPortalIndex_A_fkey` FOREIGN KEY (`A`) REFERENCES `DimensionalBackup`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DimensionalBackupToPortalIndex` ADD CONSTRAINT `_DimensionalBackupToPortalIndex_B_fkey` FOREIGN KEY (`B`) REFERENCES `PortalIndex`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PortalIndexToRejectedTheory` ADD CONSTRAINT `_PortalIndexToRejectedTheory_A_fkey` FOREIGN KEY (`A`) REFERENCES `PortalIndex`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PortalIndexToRejectedTheory` ADD CONSTRAINT `_PortalIndexToRejectedTheory_B_fkey` FOREIGN KEY (`B`) REFERENCES `RejectedTheory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PortalIndexToTeleportationFailure` ADD CONSTRAINT `_PortalIndexToTeleportationFailure_A_fkey` FOREIGN KEY (`A`) REFERENCES `PortalIndex`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PortalIndexToTeleportationFailure` ADD CONSTRAINT `_PortalIndexToTeleportationFailure_B_fkey` FOREIGN KEY (`B`) REFERENCES `TeleportationFailure`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DoomedExperimentToSpontaneousCombustion` ADD CONSTRAINT `_DoomedExperimentToSpontaneousCombustion_A_fkey` FOREIGN KEY (`A`) REFERENCES `DoomedExperiment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DoomedExperimentToSpontaneousCombustion` ADD CONSTRAINT `_DoomedExperimentToSpontaneousCombustion_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpontaneousCombustion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpontaneousCombustionToUnderappreciatedComment` ADD CONSTRAINT `_SpontaneousCombustionToUnderappreciatedComment_A_fkey` FOREIGN KEY (`A`) REFERENCES `SpontaneousCombustion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpontaneousCombustionToUnderappreciatedComment` ADD CONSTRAINT `_SpontaneousCombustionToUnderappreciatedComment_B_fkey` FOREIGN KEY (`B`) REFERENCES `UnderappreciatedComment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReverseTransactionToSchrodingerUser` ADD CONSTRAINT `_ReverseTransactionToSchrodingerUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `ReverseTransaction`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReverseTransactionToSchrodingerUser` ADD CONSTRAINT `_ReverseTransactionToSchrodingerUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `SchrodingerUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TeleportationFailureToThresholdManifest` ADD CONSTRAINT `_TeleportationFailureToThresholdManifest_A_fkey` FOREIGN KEY (`A`) REFERENCES `TeleportationFailure`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TeleportationFailureToThresholdManifest` ADD CONSTRAINT `_TeleportationFailureToThresholdManifest_B_fkey` FOREIGN KEY (`B`) REFERENCES `ThresholdManifest`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ImaginaryFriendToSchrodingerUser` ADD CONSTRAINT `_ImaginaryFriendToSchrodingerUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `ImaginaryFriend`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ImaginaryFriendToSchrodingerUser` ADD CONSTRAINT `_ImaginaryFriendToSchrodingerUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `SchrodingerUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GlitchRegistryToThresholdManifest` ADD CONSTRAINT `_GlitchRegistryToThresholdManifest_A_fkey` FOREIGN KEY (`A`) REFERENCES `GlitchRegistry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GlitchRegistryToThresholdManifest` ADD CONSTRAINT `_GlitchRegistryToThresholdManifest_B_fkey` FOREIGN KEY (`B`) REFERENCES `ThresholdManifest`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
