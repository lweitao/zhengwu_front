<script lang="ts" setup>
import { computed } from 'vue';

import { AuthPageLayout } from '@vben/layouts';
import { preferences } from '@vben/preferences';

import { $t } from '#/locales';

const appName = computed(() => "智慧运营平台");
const logo = computed(() => preferences.logo.source);
const clickLogo = () => {};
</script>

<template>
  <AuthPageLayout
    app-name="智慧运营平台"
    :logo="logo"
    page-description="2025"
    page-title="智慧运营平台"
    :click-logo="clickLogo"
  >
    <!-- 自定义工具栏 -->
    <!-- <template #toolbar></template> -->
  </AuthPageLayout>
</template>
