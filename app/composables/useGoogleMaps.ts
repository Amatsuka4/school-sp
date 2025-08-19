import { Loader } from "@googlemaps/js-api-loader";

let _loader: Loader | null = null;

export function useGoogleMaps() {
    if (!_loader) {
        _loader = new Loader({
            apiKey: useRuntimeConfig().public.MAPS_API_KEY,
            version: "weekly",
            libraries: ["places"], // 必要に応じて
        });
    }
    const load = () => _loader!.load(); // googleグローバルを解決
    return { load };
}
