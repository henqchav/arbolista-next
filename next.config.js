/** @type {import('next').NextConfig} */
//https://upload.wikimedia.org/wikipedia/commons/2/29/Cedrela_odorata_foliage.jpg
const nextConfig = {
    images: {
        domains: [
            'upload.wikimedia.org', 
            'static.inaturalist.org',
            'inaturalist-open-data.s3.amazonaws.com',
        ],
    },
}

module.exports = nextConfig
