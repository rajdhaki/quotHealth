import React from 'react'
import iphone from '../../../public/Images/iphone.svg'
import Image from 'next/image'
import sidebar from '../../../public/Images/Sidebar.svg'

const Macbook = () => {
    return (
        <section className='w-full h-screen  bg-gradient-to-b from-[#36CFA600] via-[#07C4B880]/80 to-[#36CFA600] bg-[length:10%_100%] mt-24'>

            <div className='flex justify-center items-center flex-col w-full h-full relative '>

                <div className='border-[14px] border-foreground h-[70vh] w-[60%] rounded-t-3xl rounded-b-xl relative overflow-hidden'>
                    <div className='bg-foreground h-6 w-32 mx-auto rounded-b-xl flex justify-center relative z-20'>
                        <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.99965" cy="4.09072" r="3.77901" fill="#0F0F0F" stroke="#151515" strokeWidth="0.260621" />
                            <circle cx="3.60846" cy="5.003" r="0.912175" fill="#16181E" />
                            <circle cx="3.60846" cy="3.69977" r="0.912175" fill="#0A0B0D" />
                            <circle opacity="0.6" cx="3.9994" cy="4.0907" r="1.30311" fill="#1F2531" />
                        </svg>

                    </div>

                    <div className='w-full h-full relative -top-6 '>
                        <div className='w-[30%] rounded-tl-2xl'>
                        <Image src={sidebar.src} width={200} height={50} alt='sidebar'  className='rounded-tl-2xl'/>
                        </div>

                        <div className='w-[70%]'>

                        </div>

                    </div>

                    <div className='absolute -bottom-16 -right-28 flex justify-center items-center z-30'>

                        <Image src={iphone.src} width={300} height={300} alt='iphone' />

                    </div>

                </div>

                <div className='-mt-2.5 relative z-10'>
                    <svg width="1103" height="30" viewBox="0 0 992 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.846185 0H991.501V19C991.501 21.2091 989.71 23 987.501 23H4.8462C2.63706 23 0.846185 21.2091 0.846185 19V0Z" fill="url(#paint0_linear_592_9127)" />
                        <defs>
                            <linearGradient id="paint0_linear_592_9127" x1="495.5" y1="0" x2="495.5" y2="23" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#222222" />
                                <stop offset="0.0852114" stopColor="#242424" />
                                <stop offset="0.830431" stopColor="#242424" />
                                <stop offset="1" stopColor="#201F24" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>

                <div className='-mt-3 relative z-20'>
                    <svg width="1316" height="70" viewBox="0 0 1216 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_592_9093)">
                            <path d="M1216 4.6V0H0V4.6C0 18.0413 0 24.7619 2.61584 29.8958C4.91681 34.4117 8.58832 38.0832 13.1042 40.3842C18.2381 43 24.9587 43 38.4 43H1177.6C1191.04 43 1197.76 43 1202.9 40.3842C1207.41 38.0832 1211.08 34.4117 1213.38 29.8958C1216 24.7619 1216 18.0413 1216 4.6Z" fill="url(#paint0_linear_592_9093)" />
                            <path d="M1146 46C1147.6 45.6 1148.67 43.8333 1149 43H1069.5C1069.83 43.8333 1070.9 45.6 1072.5 46C1072.67 47.1667 1073.4 49.5 1075 49.5H1143.5C1145.1 49.5 1145.83 47.1667 1146 46Z" fill="url(#paint1_linear_592_9093)" />
                            <path d="M1145.93 46.4033C1145.67 47.6321 1144.93 49.4997 1143.5 49.5H1075C1073.51 49.5 1072.77 47.4698 1072.54 46.25H1145.93V46.4033Z" fill="url(#paint2_linear_592_9093)" />
                            <path d="M1145.93 46.4033C1145.85 46.7517 1145.74 47.1509 1145.59 47.5449H1072.91C1072.73 47.092 1072.61 46.6313 1072.54 46.25H1145.93V46.4033Z" fill="#383838" />
                            <path d="M142.5 46C144.1 45.6 145.167 43.8333 145.5 43H66C66.3333 43.8333 67.4 45.6 69 46C69.1667 47.1667 69.9 49.5 71.5 49.5H140C141.6 49.5 142.333 47.1667 142.5 46Z" fill="url(#paint3_linear_592_9093)" />
                            <path d="M142.427 46.4033C142.168 47.6321 141.431 49.4997 140 49.5H71.5002C70.0079 49.5 69.2701 47.4698 69.0422 46.25H142.427V46.4033Z" fill="url(#paint4_linear_592_9093)" />
                            <path d="M142.427 46.4033C142.354 46.7517 142.241 47.1509 142.085 47.5449H69.4126C69.2342 47.092 69.1137 46.6313 69.0425 46.25H142.427V46.4033Z" fill="#383838" />
                            <path d="M502 0H713.5C713.5 9.1127 706.113 16.5 697 16.5H518.5C509.387 16.5 502 9.1127 502 0Z" fill="url(#paint5_linear_592_9093)" />
                            <path d="M712.992 0.5C712.728 9.1052 705.669 16 697 16H518.5C509.831 16 502.772 9.1052 502.508 0.5H712.992Z" stroke="white" strokeOpacity="0.1" />
                            <rect x="1121.5" width="81" height="33" fill="url(#paint6_linear_592_9093)" />
                            <rect width="84" height="33" transform="matrix(-1 0 0 1 84.5 0)" fill="url(#paint7_linear_592_9093)" />
                            <g filter="url(#filter0_f_592_9093)">
                                <path d="M1192.5 0H1205.5V20.1124C1205.5 24.4686 1201.97 28 1197.61 28C1194.79 28 1192.5 25.7111 1192.5 22.8876V0Z" fill="#D2D2DA" />
                            </g>
                            <g filter="url(#filter1_f_592_9093)">
                                <path d="M20.5 0H9.5V21.3258C9.5 25.0119 12.4881 28 16.1742 28C18.5633 28 20.5 26.0633 20.5 23.6742V0Z" fill="#D2D2DA" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_f_592_9093" x="1184.5" y="-8" width="29" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_592_9093" />
                            </filter>
                            <filter id="filter1_f_592_9093" x="-0.5" y="-10" width="31" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_592_9093" />
                            </filter>
                            <linearGradient id="paint0_linear_592_9093" x1="608" y1="0" x2="608" y2="43" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#AEAFB4" />
                                <stop offset="0.192522" stopColor="#AFB0B5" />
                                <stop offset="0.376094" stopColor="#AFB0B5" />
                                <stop offset="0.598958" stopColor="#7D7E82" />
                                <stop offset="0.713542" stopColor="#696A6F" />
                                <stop offset="0.852125" stopColor="#838489" />
                                <stop offset="0.931356" stopColor="#ABACB0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_592_9093" x1="1069.5" y1="46.25" x2="1149" y2="46.25" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#8C8D91" />
                                <stop offset="0.173014" stopColor="#525358" />
                                <stop offset="0.31824" stopColor="#78797D" />
                                <stop offset="0.465029" stopColor="#A0A0A2" />
                                <stop offset="0.691458" stopColor="#9A9A9C" />
                                <stop offset="0.825754" stopColor="#4F5055" />
                                <stop offset="0.941311" stopColor="#9E9EA0" />
                                <stop offset="1" stopColor="#848589" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_592_9093" x1="1072.54" y1="47.875" x2="1145.93" y2="47.875" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#575757" />
                                <stop offset="0.0827846" stopColor="#2D2D2D" />
                                <stop offset="0.490477" stopColor="#4E4E4E" />
                                <stop offset="0.824814" stopColor="#2A2A2A" />
                                <stop offset="1" stopColor="#5C5C5C" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_592_9093" x1="66" y1="46.25" x2="145.5" y2="46.25" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#8C8D91" />
                                <stop offset="0.173014" stopColor="#525358" />
                                <stop offset="0.31824" stopColor="#78797D" />
                                <stop offset="0.465029" stopColor="#A0A0A2" />
                                <stop offset="0.691458" stopColor="#9A9A9C" />
                                <stop offset="0.825754" stopColor="#4F5055" />
                                <stop offset="0.941311" stopColor="#9E9EA0" />
                                <stop offset="1" stopColor="#848589" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_592_9093" x1="69.0422" y1="47.875" x2="142.427" y2="47.875" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#575757" />
                                <stop offset="0.0827846" stopColor="#2D2D2D" />
                                <stop offset="0.490477" stopColor="#4E4E4E" />
                                <stop offset="0.824814" stopColor="#2A2A2A" />
                                <stop offset="1" stopColor="#5C5C5C" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_592_9093" x1="502.5" y1="7.99999" x2="713.5" y2="7.99998" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#25262B" />
                                <stop offset="0.015659" stopColor="#606166" />
                                <stop offset="0.035819" stopColor="#9FA0A4" />
                                <stop offset="0.0504351" stopColor="#C8C8CE" />
                                <stop offset="0.479167" stopColor="#D7D8DD" />
                                <stop offset="0.941214" stopColor="#CBCBD3" />
                                <stop offset="0.970403" stopColor="#A7A8AC" />
                                <stop offset="0.980129" stopColor="#595A5E" />
                                <stop offset="1" stopColor="#27282C" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_592_9093" x1="1202.5" y1="17" x2="1121.5" y2="17" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#65666B" stopOpacity="0" />
                                <stop offset="0.259918" stopColor="#65666B" />
                                <stop offset="1" stopColor="#65666B" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_592_9093" x1="84" y1="17" x2="2.87514e-08" y2="17" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#65666B" stopOpacity="0" />
                                <stop offset="0.259918" stopColor="#65666B" />
                                <stop offset="1" stopColor="#65666B" stopOpacity="0" />
                            </linearGradient>
                            <clipPath id="clip0_592_9093">
                                <rect width="1216" height="49.5" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className='-mt-8'>
                    <svg width="1263" height="64" viewBox="0 0 1163 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_592_9092)">
                            <ellipse cx="581.5" cy="22" rx="570.5" ry="11" fill="#141212" />
                        </g>
                        <defs>
                            <filter id="filter0_f_592_9092" x="0.1" y="0.1" width="1162.8" height="43.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="5.45" result="effect1_foregroundBlur_592_9092" />
                            </filter>
                        </defs>
                    </svg>

                </div>

            </div>
        </section>
    )
}

export default Macbook
