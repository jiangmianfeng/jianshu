import {createGlobalStyle } from 'styled-components';
export const IconFontGlobalstyle  = createGlobalStyle`
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1544438706567'); /* IE9*/
    src: url('./iconfont.eot?t=1544438706567#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('./iconfont.ttf?t=1544438706567') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./iconfont.svg?t=1544438706567#iconfont') format('svg'); /* iOS 4.1- */
    }
    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

export default IconFontGlobalstyle;