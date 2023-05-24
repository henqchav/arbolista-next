/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'upload.wikimedia.org', 
            'static.inaturalist.org',
            'inaturalist-open-data.s3.amazonaws.com',
        ],
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
