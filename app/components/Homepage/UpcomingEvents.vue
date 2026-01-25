<template>
  <div>
    <SectionHeader>Upcoming Events</SectionHeader>
    <div v-if="!data || data?.length === 0">
      <div>No upcoming events</div>
    </div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 flex-wrap my-2 gap-4">
        <EventBlock
          type="Solo"
          :events="data"
        />
        <EventBlock
          type="Track"
          :events="data"
        />
        <EventBlock
          type="Street Survival"
          :events="data"
        />
        <EventBlock
          type="General"
          :events="data"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import EventBlock from "~/components/Homepage/EventBlock.vue";

  const { data } = await useFetch("/api/homeEvents");
</script>

<style lang="postcss"></style>
