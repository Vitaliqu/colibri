import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    trailingSlash: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/photo-**",
            },
        ],
    },

    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{type: "host", value: "www.kolibri-khust.com"}],
                destination: "https://kolibri-khust.com/:path*",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
