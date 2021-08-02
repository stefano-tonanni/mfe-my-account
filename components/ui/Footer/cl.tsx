import styled from "styled-components"
 import tw from "twin.macro"

 interface Props {
   width?: string
   height?: string
   className?: string
 }

 export const Logo: React.FC<Props> = ({ width, height, className }) => {
   return (
     <Svg
       xmlns="http://www.w3.org/2000/svg"
       className={className}
       width={width}
       height={height}
       viewBox="0 0 114 19"
       fill="currentColor"
     >
       <g clipPath="url(#clip0)">
         <path
           d="M7.71125 7.25977H4.07959V10.8896H7.71125V7.25977Z"
           fill="currentColor"
         />
         <path
           d="M14.0667 7.25977H10.4351V10.8896H14.0667V7.25977Z"
           fill="currentColor"
         />
         <path
           d="M16.3478 13.5892C16.3308 14.0146 16.1606 14.5194 15.4399 14.5194H11.8423C11.5643 14.508 10.2364 14.4967 9.23205 15.4325C9.18098 15.4836 9.12991 15.5346 9.08451 15.5913C9.03344 15.5403 8.98805 15.4836 8.93698 15.4325C7.9326 14.4967 6.60477 14.5024 6.32672 14.5194H2.72911C2.00846 14.5194 1.83822 14.0146 1.8212 13.6119V10.8895H0.00537109V13.6233C0.01672 14.7122 0.7544 16.3343 2.72911 16.3343H6.34942H6.40617C6.41184 16.3343 7.20627 16.3003 7.70562 16.771C8.01204 17.0603 8.17092 17.5253 8.17092 18.1492H10.0095C10.0095 17.5253 10.1627 17.0603 10.4748 16.771C10.9684 16.3003 11.7629 16.3343 11.7629 16.3343H15.4456C17.4203 16.3343 18.158 14.7122 18.1693 13.6119V10.8895H16.3535V13.5892H16.3478Z"
           fill="currentColor"
         />
         <path
           d="M1.82169 4.56C1.83871 4.13463 2.00895 3.62985 2.7296 3.62985H6.32721C6.60526 3.64119 7.93308 3.65254 8.93746 2.71672C8.98853 2.66567 9.03961 2.61463 9.085 2.55791C9.13607 2.60896 9.18147 2.66567 9.23254 2.71672C10.2369 3.65254 11.5647 3.64687 11.8428 3.62985H15.4347C16.1554 3.62985 16.3256 4.13463 16.3426 4.53731V7.2597H18.1585V4.52597C18.1471 3.43702 17.4094 1.81493 15.4347 1.81493H11.8144H11.7577C11.752 1.81493 10.9576 1.84896 10.4582 1.37821C10.1575 1.08896 10.0043 0.623881 10.0043 0H8.16574C8.16574 0.623881 8.01253 1.08896 7.70043 1.37821C7.20675 1.84896 6.41233 1.81493 6.41233 1.81493H2.7296C0.754889 1.81493 0.0172083 3.43702 0.00585938 4.53731V7.2597H1.82169V4.56Z"
           fill="currentColor"
         />
         <path
           d="M27.2371 8.91014C27.2371 7.04417 28.4287 5.67163 30.3069 5.67163C31.7483 5.67163 32.798 6.45432 33.0704 7.71909L31.527 8.12745C31.3454 7.49223 30.8574 7.1179 30.2899 7.1179C29.3139 7.1179 28.8827 7.88924 28.8827 8.91581C28.8827 9.98208 29.3593 10.708 30.2899 10.708C30.9822 10.708 31.3113 10.3791 31.4929 9.78924L33.0704 10.1182C32.7186 11.4227 31.7085 12.1543 30.2842 12.1543C28.372 12.1486 27.2371 10.7534 27.2371 8.91014Z"
           fill="currentColor"
         />
         <path
           d="M33.9048 8.91014C33.9048 6.98745 35.1872 5.67163 37.0087 5.67163C38.8643 5.67163 40.124 7.01014 40.124 8.91014C40.124 10.8215 38.8529 12.1486 37.0087 12.1486C35.1588 12.1486 33.9048 10.8101 33.9048 8.91014ZM38.4898 8.91014C38.4898 7.82118 37.9904 7.11223 37.0144 7.11223C36.0043 7.11223 35.5504 7.8382 35.5504 8.91014C35.5504 10.0104 36.0497 10.7024 37.0144 10.7024C37.9961 10.708 38.4898 9.97074 38.4898 8.91014Z"
           fill="currentColor"
         />
         <path
           d="M50.1392 7.94598V11.9785H48.5958V8.35434C48.5958 7.54896 48.1872 7.07254 47.5176 7.07254C46.8708 7.07254 46.4508 7.56031 46.4508 8.26359V11.9785H44.9017V8.35434C44.9017 7.54896 44.4932 7.07254 43.8236 7.07254C43.1767 7.07254 42.7568 7.56031 42.7568 8.26359V11.9785H41.1963V5.8418H42.5582V6.51105C42.9667 6.00628 43.6136 5.69434 44.3513 5.69434C45.2308 5.69434 45.8153 6.07434 46.1331 6.64717C46.5303 6.05732 47.2169 5.69434 48.0113 5.69434C49.4129 5.69434 50.1392 6.60747 50.1392 7.94598Z"
           fill="currentColor"
         />
         <path
           d="M60.3817 7.94598V11.9785H58.8382V8.35434C58.8382 7.54896 58.4297 7.07254 57.7601 7.07254C57.1132 7.07254 56.6933 7.56031 56.6933 8.26359V11.9785H55.1441V8.35434C55.1441 7.54896 54.7356 7.07254 54.066 7.07254C53.4191 7.07254 52.9992 7.56031 52.9992 8.26359V11.9785H51.4387V5.8418H52.8006V6.51105C53.2092 6.00628 53.856 5.69434 54.5937 5.69434C55.4733 5.69434 56.0577 6.07434 56.3812 6.64717C56.7784 6.05732 57.465 5.69434 58.2538 5.69434C59.6553 5.69434 60.3817 6.60747 60.3817 7.94598Z"
           fill="currentColor"
         />
         <path
           d="M62.9013 9.34118C63.0148 10.2146 63.5028 10.7024 64.3369 10.7024C64.9384 10.7024 65.381 10.4301 65.608 9.93103L67.1514 10.3734C66.6861 11.4964 65.608 12.1486 64.422 12.1486C62.5324 12.1486 61.2273 10.8328 61.2273 8.98954C61.2273 6.97611 62.5097 5.67163 64.3312 5.67163C66.2662 5.67163 67.3898 7.11223 67.2025 9.34118H62.9013ZM62.941 8.19551H65.6477C65.5399 7.36745 65.154 7.01581 64.4107 7.01581C63.5765 7.01581 63.0999 7.4185 62.941 8.19551Z"
           fill="currentColor"
         />
         <path
           d="M71.9179 5.84185V7.28245C71.5775 7.18036 71.0781 7.21439 70.7149 7.38453C70.1702 7.63409 69.8751 8.13319 69.8751 8.83648V11.9729H68.3203V5.84185H69.6822V6.82871C69.8354 6.54513 70.0624 6.30125 70.3404 6.13677C70.783 5.86453 71.3618 5.77379 71.9179 5.84185Z"
           fill="currentColor"
         />
         <path
           d="M72.3718 8.91014C72.3718 7.04417 73.5635 5.67163 75.4417 5.67163C76.883 5.67163 77.9328 6.45432 78.2052 7.71909L76.6617 8.12745C76.4801 7.49223 75.9921 7.1179 75.4247 7.1179C74.4487 7.1179 74.0174 7.88924 74.0174 8.91581C74.0174 9.98208 74.4941 10.708 75.4247 10.708C76.117 10.708 76.4461 10.3791 76.6277 9.78924L78.2052 10.1182C77.8534 11.4227 76.8433 12.1543 75.419 12.1543C73.5124 12.1486 72.3718 10.7534 72.3718 8.91014Z"
           fill="currentColor"
         />
         <path
           d="M80.7074 9.34118C80.8209 10.2146 81.3089 10.7024 82.143 10.7024C82.7445 10.7024 83.1871 10.4301 83.4141 9.93103L84.9576 10.3734C84.4923 11.4964 83.4141 12.1486 82.2282 12.1486C80.3386 12.1486 79.0334 10.8328 79.0334 8.98954C79.0334 6.97611 80.3159 5.67163 82.1374 5.67163C84.0723 5.67163 85.1959 7.11223 85.0086 9.34118H80.7074ZM80.7471 8.19551H83.4538C83.346 7.36745 82.9602 7.01581 82.2168 7.01581C81.3827 7.01581 80.906 7.4185 80.7471 8.19551Z"
           fill="currentColor"
         />
         <path
           d="M88.3398 11.9784V3.62976H89.8833V11.9784H88.3398Z"
           fill="currentColor"
         />
         <path
           d="M96.5678 8.22954V11.9785H95.2173V11.2298C94.6726 11.8764 94.0711 12.1486 93.1234 12.1486C91.807 12.1486 91.075 11.3092 91.075 10.2827C91.075 9.43193 91.4268 8.79671 92.4141 8.42805C93.0043 8.21253 93.8895 8.08208 95.0414 7.91193C94.979 7.33909 94.6442 7.0782 93.9179 7.0782C93.4639 7.0782 92.8851 7.27103 92.6922 7.82685L91.2963 7.38447C91.6027 6.37491 92.4425 5.67163 93.9235 5.67163C95.0017 5.67163 95.8926 5.96656 96.3238 6.78327C96.5565 7.24268 96.5678 7.67372 96.5678 8.22954ZM95.0357 9.16536C94.003 9.34118 93.5831 9.42626 93.2312 9.55671C92.7773 9.7382 92.5957 9.95372 92.5957 10.26C92.5957 10.6797 92.9248 10.9292 93.4582 10.9292C94.3094 10.9292 94.752 10.3734 94.8768 10.1125C94.996 9.8573 95.0301 9.46029 95.0357 9.16536Z"
           fill="currentColor"
         />
         <path
           d="M104.943 9.34118C105.057 10.2146 105.545 10.7024 106.379 10.7024C106.98 10.7024 107.423 10.4301 107.65 9.93103L109.193 10.3734C108.728 11.4964 107.65 12.1486 106.464 12.1486C104.574 12.1486 103.269 10.8328 103.269 8.98954C103.269 6.97611 104.552 5.67163 106.373 5.67163C108.308 5.67163 109.432 7.11223 109.244 9.34118H104.943ZM104.983 8.19551H107.69C107.582 7.36745 107.196 7.01581 106.453 7.01581C105.619 7.01581 105.142 7.4185 104.983 8.19551Z"
           fill="currentColor"
         />
         <path
           d="M113.96 5.84185V7.28245C113.619 7.18036 113.12 7.21439 112.757 7.38453C112.212 7.63409 111.917 8.13319 111.917 8.83648V11.9729H110.362V5.84185H111.724V6.82871C111.877 6.54513 112.104 6.30125 112.382 6.13677C112.825 5.86453 113.404 5.77379 113.96 5.84185Z"
           fill="currentColor"
         />
         <path
           d="M101.703 5.83618V5.84185H101.675L100.075 10.0162L98.4574 5.83618H96.8572L99.3426 11.9389L99.1099 12.5401C98.9851 12.869 98.6673 13.0902 98.3155 13.0902H97.697V14.5081H98.3155C99.2575 14.5024 100.097 13.9239 100.438 13.0505L103.235 5.83618H101.703Z"
           fill="currentColor"
         />
       </g>
       <defs>
         <clipPath id="clip0">
           <rect width="114" height="18.1493" fill="white" />
         </clipPath>
       </defs>
     </Svg>
   )
 }

 const Svg = styled.svg`
   ${tw`text-gray-600`}
 `