import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (isServer) {
      // 서버 사이드에서만 적용할 설정
      // 예: 서버 측 로깅, 서버 전용 설정 등
      console.log('This is the server side');
    } else {
      // 클라이언트 사이드에서만 적용할 설정
      console.log('This is the client side');

      // 예: 클라이언트에서만 이미지 로딩 관련 로더 추가
      config.module.rules.push({
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      });
    }

    return config;
  },
};

export default nextConfig;
