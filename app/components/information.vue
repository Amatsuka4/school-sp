<template>
    <section class="information w-100 pt-15 pb-15">
        <h2 class="text-center mb-8">Company Information</h2>
        <div class="information-container w-66 ga-8 mx-auto d-flex justify-space-between">
            <!-- 会社情報 -->
            <div class="information-content d-flex justify-space-between ga-16">
                <div class="information-info d-flex justify-space-between flex-column">
                    <div class="information-item">
                        <h3 class="text-h6 font-weight-bold mb-2">会社名</h3>
                        <p class="text-body-1">株式会社サンプル</p>
                    </div>
                    <div class="information-item">
                        <h3 class="text-h6 font-weight-bold mb-2">設立</h3>
                        <p class="text-body-1">2020年4月1日</p>
                    </div>
                    <div class="information-item">
                        <h3 class="text-h6 font-weight-bold mb-2">代表取締役</h3>
                        <p class="text-body-1">山田 太郎</p>
                    </div>
                    <div class="information-item">
                        <h3 class="text-h6 font-weight-bold mb-2">電話番号</h3>
                        <p class="text-body-1">03-1234-5678</p>
                    </div>
                    <div class="information-item">
                        <h3 class="text-h6 font-weight-bold mb-2">事業内容</h3>
                        <p class="text-body-1">Webシステム開発<br />モバイルアプリ開発<br />ITコンサルティング</p>
                    </div>
                </div>

                <div class="information-location d-flex justify-space-between flex-column">
                    <div
                        class="information-item d-flex align-center justify-space-between ga-2"
                        v-for="office in offices"
                        :key="office.name"
                    >
                        <div class="office-info">
                            <h3 class="text-h6 font-weight-bold mb-2">{{ office.name }}</h3>
                            <p class="text-body-1">
                                〒{{ office.postalCode }}<br />{{ office.address }}<br />{{ office.building }}
                            </p>
                        </div>
                        <v-btn @click="currentOffice = office" icon="mdi-google-maps"></v-btn>
                    </div>
                </div>
            </div>

            <!-- マップ -->
            <div class="information-map">
                <GMapMap
                    class="map-container w-100 h-100"
                    :center="currentOffice?.coordinates"
                    :zoom="15"
                    style="border-radius: 8px"
                >
                    <GMapMarker :position="currentOffice?.coordinates" />
                </GMapMap>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// オフィス情報のデータ構造
interface OfficeInfo {
    name: string;
    postalCode: string;
    address: string;
    building: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

// オフィス情報のデータ
const offices: OfficeInfo[] = [
    {
        name: "東京オフィス",
        postalCode: "100-0001",
        address: "東京都千代田区千代田1-1-1",
        building: "東京サンプルビル 5F",
        coordinates: {
            lat: 35.681236,
            lng: 139.767125,
        },
    },
    {
        name: "大阪オフィス",
        postalCode: "555-0001",
        address: "大阪府大阪市中央区大阪1-1-1",
        building: "大阪サンプルビル 5F",
        coordinates: {
            lat: 34.693738,
            lng: 135.502165,
        },
    },
    {
        name: "沖縄オフィス",
        postalCode: "901-0001",
        address: "沖縄県沖縄市1-1-1",
        building: "沖縄サンプルビル 5F",
        coordinates: {
            lat: 26.334106,
            lng: 127.805025,
        },
    },
];

const currentOffice = ref(offices[0]);
</script>

<style scoped lang="sass">

.information-content,
.information-map
    flex: 1
    max-width: 500px

.information-item
    h3
        color: #333

    p
        color: #666

.information-map
    height: 500px

@media (max-width: 1480px)
    .information-container
        flex-direction: column
        text-align: center

    .information-content
        flex-direction: column

    .information-info,
    .information-location
        flex-direction: row
        gap: 16px

    .information-item
        flex: 1

    .information-location .information-item
        flex-direction: column

    .information-content,
    .information-map
        max-width: 100%
        flex: 0 0 auto

    .information-map
        min-height: 300px

@media (max-width: 768px)
    .information-info
        flex-direction: column
</style>
