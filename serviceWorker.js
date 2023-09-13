const staticNote = "note-app-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/js/ui.js",
    "/js/materialize.min.js",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticNote).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
}
)

