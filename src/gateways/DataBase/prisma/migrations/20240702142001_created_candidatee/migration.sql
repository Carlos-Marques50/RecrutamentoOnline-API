-- CreateTable
CREATE TABLE `Candidate` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `num_bi` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `doc` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `dateBirth` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Candidate_num_bi_key`(`num_bi`),
    UNIQUE INDEX `Candidate_email_key`(`email`),
    UNIQUE INDEX `Candidate_phone_key`(`phone`),
    UNIQUE INDEX `Candidate_doc_key`(`doc`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
