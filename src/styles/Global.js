import { createGlobalStyle } from 'styled-components';
import { caveatBrush } from './constants';

export const Global = createGlobalStyle`
    html {
        font-size: 62.5%;
        height: 100%;
    }

    body {
        height: 100%;
        margin: 0;
        background: #2f97c1;
        overflow: hidden;
    }

    #root {
        width: 100%;
        height: 100%;
        background: 
            radial-gradient(
            farthest-side at bottom left,
            rgb(250, 223, 99, 0.75), 
            transparent
            ),
            radial-gradient(
            farthest-side at bottom right,
            rgb(230, 57, 70, 0.75),
            transparent
            );
        overflow: auto;
        display: flex;
        flex-direction: column;
    }

    .sr {
        position: absolute;
        left: -99999px;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }

      h1 {
          font-family: ${caveatBrush}
          color: #f1faee
          font-size: 4rem;
          font-style: italic;
          line-height: 3.5rem;
          text-align: right;
          user-select: none;
          display: inline-block;
      }
`;
