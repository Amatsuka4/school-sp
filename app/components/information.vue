<template>
    <section class="information w-100">
        <h2 class="text-center mb-8">会社概要</h2>
        <div class="information-container mx-auto d-flex justify-space-between">
            <!-- 会社情報 -->
            <div class="information-content d-flex justify-space-between">
                <div class="information-info d-flex flex-column justify-space-between">
                    <div class="information-item">
                        <h3>会社名</h3>
                        <p>株式会社サンプル</p>
                    </div>
                    <div class="information-item">
                        <h3>設立</h3>
                        <p>2020年4月1日</p>
                    </div>
                    <div class="information-item">
                        <h3>代表取締役</h3>
                        <p>山田 太郎</p>
                    </div>
                    <div class="information-item">
                        <h3>電話番号</h3>
                        <p>03-1234-5678</p>
                    </div>
                    <div class="information-item">
                        <h3>事業内容</h3>
                        <p>Webシステム開発<br />モバイルアプリ開発<br />ITコンサルティング</p>
                    </div>
                </div>

                <div class="information-location d-flex flex-column justify-space-between">
                    <div class="information-item">
                        <h3>東京オフィス</h3>
                        <p>〒100-0001<br />東京都千代田区千代田1-1-1<br />東京サンプルビル 5F</p>
                    </div>
                    <div class="information-item">
                        <h3>大阪オフィス</h3>
                        <p>〒555-0001<br />大阪府大阪市中央区大阪1-1-1<br />大阪サンプルビル 5F</p>
                    </div>
                    <div class="information-item">
                        <h3>沖縄オフィス</h3>
                        <p>〒901-0001<br />沖縄県沖縄市1-1-1<br />沖縄サンプルビル 5F</p>
                    </div>
                </div>
            </div>

            <!-- マップ -->
            <div class="information-map">
                <GMapMap class="map-container" :center="{ lat: 35.681236, lng: 139.767125 }" :zoom="15">
                    <GMapMarker :position="{ lat: 35.681236, lng: 139.767125 }" />
                </GMapMap>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.information
    padding: 60px 20px

.information-container
    max-width: 1200px
    gap: 40px

.information-content
    flex: 1
    max-width: 500px

.information-item
    margin-bottom: 24px

    h3
        font-size: 18px
        font-weight: bold
        margin-bottom: 8px
        color: #333

    p
        font-size: 16px
        line-height: 1.6
        color: #666

.information-map
    flex: 1
    max-width: 500px
    height: 500px

.map-container
    width: 100%
    height: 100%

@media (max-width: 768px)
    .information-container
        flex-direction: column
        gap: 30px

    .information-content, .information-map
        max-width: 100%
</style>
