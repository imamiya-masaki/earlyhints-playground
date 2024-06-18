/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/',
                headers: [
                  {
                    key: 'Link',
                    value: '<https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js>; rel=preload, </heavy-image.jpg>; rel=preload',
                  }
                ],
              },
              {
                source: '/nohints',
                headers: [
                ],
              },
        ]
    }
};

export default nextConfig;
