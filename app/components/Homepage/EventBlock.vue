<template>
  <div class="border border-accented w-full rounded-lg overflow-hidden">
    <div class="bg-elevated font-oswald text-3xl text-center">
      <ULink
        class="event-link"
        :to="`#${type}`"
        >{{ type }}</ULink
      >
    </div>
    <div class="p-2">
      <div v-if="programEvents?.length === 0">No upcomfing {{ type }} events</div>
      <div
        v-for="evt in programEvents"
        v-else
        :id="evt.ID.toString()"
        :key="evt.ID"
        class="font-semibold font-display mb-2 p-1 hover:text-highlighted hover:bg-accented"
      >
        <span class="text-bold">
          {{ dayjs.utc(evt.Date).format("M/DD") }}
        </span>
        <span>: {{ evt.Name }} at {{ evt.Location }}</span>
        <div
          v-if="evt.Link"
          class="my-1"
        >
          <ULink
            :to="evt.Link"
            rel="noopener noreferrer"
            target="_blank"
          >
            More Info
          </ULink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";
  import type { ScheduledEventModel } from "~/db/models/ScheduledEvent.model";

  type Props = {
    type: "Solo" | "Track" | "Street Survival" | "General";
    events: ScheduledEventModel[];
  };

  const { type, events } = defineProps<Props>();
  const programEvents = events.filter((event) => event.Program === type);
</script>

<style lang="postcss">
  .event-link {
    text-decoration: none !important;
  }
</style>
