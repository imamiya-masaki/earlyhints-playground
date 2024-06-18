/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/',
                headers: [
                  {
                    key: 'Link',
                    value: '<https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js>; rel=preload; as=script, <https://earlyhints-test.anpan-playground.com/heavy-image.jpg>; rel=preload; as=image',
                  }
                ],
              },
        ]
    }
};

export default nextConfig;
