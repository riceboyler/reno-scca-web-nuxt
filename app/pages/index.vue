<template>
  <UContainer>
    <div class="flex flex-col gap-4">
      <div class="font-oswald font-bold text-center text-xl md:text-3xl">
        Welcome to the Reno Region of the Sports Car Club of America (SCCA)!
      </div>
      <HomepageHero />
      <div class="relative font-display flex flex-col md:flex-row gap-8">
        <div class="relative md:sticky top-0 md:top-[125px]">
          <HomepageQuickLinks />
        </div>
        <div class="flex flex-col gap-5 body">
          <HomepageUpcomingEvents />
          <HomepageBody />
          <HomepageProgramBlocks />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup></script>

<style></style>
