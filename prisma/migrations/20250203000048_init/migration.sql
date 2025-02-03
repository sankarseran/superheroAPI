-- CreateTable
CREATE TABLE "Hero" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "humility_rating" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Power" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroPowers" (
    "hero_id" TEXT NOT NULL,
    "power_id" TEXT NOT NULL,

    CONSTRAINT "HeroPowers_pkey" PRIMARY KEY ("hero_id","power_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hero_name_key" ON "Hero"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Power_name_key" ON "Power"("name");

-- AddForeignKey
ALTER TABLE "HeroPowers" ADD CONSTRAINT "HeroPowers_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroPowers" ADD CONSTRAINT "HeroPowers_power_id_fkey" FOREIGN KEY ("power_id") REFERENCES "Power"("id") ON DELETE CASCADE ON UPDATE CASCADE;
