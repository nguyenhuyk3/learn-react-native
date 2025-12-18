import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export const PeopleIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <Circle cx="9" cy="7" r="4" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const GlobeIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="10" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const ChatIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const BookIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const LockIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const ShieldIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const FingerprintIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const LogoutIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const ChevronIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M9 18l6-6-6-6" stroke="#D4A027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const FaceRecognitionIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {/* Khung nhận diện */}
        <Path
            d="M4 7V5a2 2 0 0 1 2-2h2
                M20 7V5a2 2 0 0 0-2-2h-2
                M4 17v2a2 2 0 0 0 2 2h2
                M20 17v2a2 2 0 0 1-2 2h-2"
            stroke="#D4A027"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        {/* Khuôn mặt */}
        <Circle cx="12" cy="10" r="2" stroke="#D4A027" strokeWidth="2" />
        <Path
            d="M8.5 15c.8-1 2-1.5 3.5-1.5s2.7.5 3.5 1.5"
            stroke="#D4A027"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);