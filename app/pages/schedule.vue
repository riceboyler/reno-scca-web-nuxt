<template>
  <UContainer>
    <SectionHeader>Schedule (upcoming events)</SectionHeader>
    <div
      v-if="data?.length === 0"
      class="font-display text-2xl md:text-4xl text-center my-8"
    >
      There are currently no upcoming events scheduled. Please check back closer to the start of the
      season (late February/early March).
    </div>
    <!-- TODO: Add filter section -->
    <div
      v-for="event in data?.sort((a, b) => dayjs(a.Date).diff(dayjs(b.Date)))"
      v-else
      :key="event.ID"
    >
      <div class="flex flex-row gap-8 mt-8 w-full body items-center">
        <div class="rounded-2xl w-25 md:w-50 h-25 md:h-50 overflow-hidden min-w-25 md:min-w-50">
          <ScheduleEventImg :event="event" />
        </div>
        <div class="flex flex-col gap-2 justify-start items-start w-full">
          <SubHeader>
            <div>{{ event.Program }}</div>
            <div>{{ dayjs.utc(event.Date).format("M/DD/YYYY") }}</div>
          </SubHeader>
          <div class="font-display text-md md:text-2xl text-left">
            {{ event.Name }} - Event held at {{ event.Location }}.
          </div>
          <div v-if="event.Link">
            <NuxtLink
              :href="event.Link"
              class="text-sm md:text-xl text-accented"
            >
              Register at MotorsportReg by clicking here
            </NuxtLink>
          </div>
          <div v-else>Registration link coming soon...</div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";
  import timezone from "dayjs/plugin/timezone";
  dayjs.extend(timezone);

  const { data } = useFetch("/api/scheduleEvents");
</script>
