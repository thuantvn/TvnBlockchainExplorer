<template>
    <v-container grid-list-lg class="mb-0">
        <app-bread-crumbs :new-items="crumbs" />
        <v-layout row wrap justify-start class="mb-4">
            <v-flex xs12>
                <v-card
                    :class="{ 'pa-1': $vuetify.breakpoint.xsOnly, 'pa-3': $vuetify.breakpoint.smOnly, 'pa-5': $vuetify.breakpoint.mdAndUp }"
                    color="white"
                    flat
                >
                    <v-layout wrap grid-list-sm justify-start column fill-height pa-2>
                        <v-flex xs12>
                            <v-card-title class="display-1 font-weight-bold">{{ $t('about.title') }}</v-card-title>
                            <v-card-text>{{ $t('about.text') }}</v-card-text>
                        </v-flex>
                        <v-flex xs12>
                            <v-layout row wrap align-start justify-start pt-3>
                                <v-flex xs12 sm6 md3>
                                    <a href="https://github.com" class="black--text">
                                        <v-layout justify-start pl-3><v-icon class="primary--text pl-2 fab fa-github" large></v-icon></v-layout>
                                        <v-card-title class="title pb-1">{{ $t('about.git.title') }}</v-card-title>
                                        <v-card-text class="text-xs-left">{{ $t('about.git.text') }}</v-card-text>
                                    </a>
                                </v-flex>
                                <v-flex xs12 sm6 md3>
                                    <a href="https://medium.com/" class="black--text">
                                        <v-layout justify-start pl-3><v-icon class="primary--text pl-2 fab fa-medium-m" large></v-icon></v-layout>
                                        <v-card-title class="title pb-1">{{ $t('about.medium.title') }}</v-card-title>
                                        <v-card-text class="text-xs-left">{{ $t('about.medium.text') }}</v-card-text>
                                    </a>
                                </v-flex>
                                <v-flex xs12 sm6 md3>
                                    <a href="https://twitter.com/" class="black--text">
                                        <v-layout justify-start pl-3><v-icon class="primary--text pl-2 fab fa-twitter" large></v-icon></v-layout>
                                        <v-card-title class="title pb-1">{{ $t('about.twitter.title') }}</v-card-title>
                                        <v-card-text class="text-xs-left">{{ $t('about.twitter.text') }}.</v-card-text>
                                    </a>
                                </v-flex>
                                <v-flex xs12 sm6 md3>
                                    <a href="https://www.reddit.com/" class="black--text">
                                        <v-layout justify-start pl-3><v-icon class="primary--text pl-2 fab fa-reddit text-xs-left" large></v-icon></v-layout>
                                        <v-card-title class="title pb-1" href="https://www.reddit.com/r/ethvm">{{ $t('about.reddit.title') }}</v-card-title>
                                        <v-card-text class="text-xs-left">{{ $t('about.reddit.text') }}</v-card-text>
                                    </a>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12>
                            <v-card-title class="display-1 font-weight-bold">{{ $t('about.disclaimer.name') }}</v-card-title>
                            <v-card-text class="text-xs-left"
                                >{{ $t('about.disclaimer.text') }}<a href="https://github.com/"> {{ $t('about.git.title') }}. </a></v-card-text
                            >
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import AppBreadCrumbs from '@app/core/components/ui/AppBreadCrumbs.vue'
import { Crumb } from '@app/core/components/props'
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
        AppBreadCrumbs
    }
})
export default class PageAbout extends Vue {
    /*
  ===================================================================================
    Computed Values
  ===================================================================================
  */

    get crumbs(): Crumb[] {
        return [
            {
                text: this.$t('about.name')
            }
        ]
    }
}
</script>
