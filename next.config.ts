import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["images.unsplash.com"],
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
