<script setup>
const props = defineProps({
    title: String,
    text: String,
    resources: [String],
    repoUrl: String,
    url: String
});
</script>

<template>
    project card
    <v-card width="400">
        <template v-slot:title>
            {{ props.title }}
        </template>

        <template v-slot:text>
            {{ props.text }}
        </template>
    </v-card>
</template>